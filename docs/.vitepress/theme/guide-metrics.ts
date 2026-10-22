import { productDestination } from '../product-routes';

// Aggregate guide measurement: one day-level counter per page/source/target on
// airreps.link plus Cloudflare Web Analytics. Production hosts only, and both
// stay off when the browser sends Do Not Track or Global Privacy Control.
// Nothing is stored in the browser; the source category lives in this closure
// for the lifetime of the tab. See scripts/guide-analytics/README.md.

export const METRICS_ENDPOINT = 'https://airreps.link/guide-metrics/collect.php';
export const CF_BEACON_SRC = 'https://static.cloudflareinsights.com/beacon.min.js';
// Public Web Analytics site token (it is visible in every page that loads the beacon).
export const CF_BEACON_TOKEN = 'bc7df2ec08544f4e955ffebd7121c70b';

const PRODUCTION_HOSTS = new Set(['airpodsreplicas.com', 'www.airpodsreplicas.com']);
const MAX_BODY_BYTES = 1024;
const MAX_ROUTE_LENGTH = 180;
// Letters, digits and hyphens between slashes — no dots, queries, fragments or escapes.
const GUIDE_ROUTE = /^\/(?:[A-Za-z0-9-]+\/)*[A-Za-z0-9-]*$/;
const PAGE_SOURCE = /^(?:[A-Za-z0-9-]+\/)*[A-Za-z0-9-]+\.md$/;

export type Source =
    | 'ai_chatgpt'
    | 'ai_gemini'
    | 'ai_claude'
    | 'ai_grok'
    | 'ai_perplexity'
    | 'search_google'
    | 'search_bing'
    | 'search_other'
    | 'community'
    | 'social'
    | 'direct'
    | 'other';

export type Target =
    | 'hicity'
    | 'jenny'
    | 'earhive'
    | 'replicute'
    | 'kakobuy'
    | 'kakoguide'
    | 'discord'
    | 'reddit';

export type MetricEvent =
    | { event: 'view'; route: string; source: Source; target: '' }
    | { event: 'outbound'; route: string; source: Source; target: Target };

// --- Source category -------------------------------------------------------

// Referrer hosts match exactly or as a subdomain ("www.reddit.com"), never as a
// suffix of some other name ("evil-chatgpt.com"). More specific entries first:
// gemini.google.com is checked before Google search.
const REFERRER_DOMAINS: [string, Source][] = [
    ['chatgpt.com', 'ai_chatgpt'],
    ['chat.openai.com', 'ai_chatgpt'],
    ['gemini.google.com', 'ai_gemini'],
    ['bard.google.com', 'ai_gemini'],
    ['claude.ai', 'ai_claude'],
    ['grok.com', 'ai_grok'],
    ['perplexity.ai', 'ai_perplexity'],
    ['bing.com', 'search_bing'],
    ['copilot.microsoft.com', 'search_bing'],
    ['duckduckgo.com', 'search_other'],
    ['search.yahoo.com', 'search_other'],
    ['search.yahoo.co.jp', 'search_other'],
    ['yandex.ru', 'search_other'],
    ['yandex.com', 'search_other'],
    ['yandex.com.tr', 'search_other'],
    ['ya.ru', 'search_other'],
    ['ecosia.org', 'search_other'],
    ['search.brave.com', 'search_other'],
    ['startpage.com', 'search_other'],
    ['qwant.com', 'search_other'],
    ['kagi.com', 'search_other'],
    ['baidu.com', 'search_other'],
    ['search.naver.com', 'search_other'],
    ['seznam.cz', 'search_other'],
    ['reddit.com', 'community'],
    ['redd.it', 'community'],
    ['discord.com', 'community'],
    ['discordapp.com', 'community'],
    ['youtube.com', 'social'],
    ['youtu.be', 'social'],
    ['tiktok.com', 'social'],
    ['instagram.com', 'social'],
    ['facebook.com', 'social'],
    ['threads.net', 'social'],
    ['t.co', 'social'],
    ['bsky.app', 'social'],
    ['pinterest.com', 'social'],
    ['vk.com', 'social'],
    ['t.me', 'social'],
    ['airpodsreplicas.com', 'direct'],
];

// google.com, www.google.de, google.co.uk, www.google.com.br — but not
// google.com.evil.net or notgoogle.com.
const GOOGLE_SEARCH_HOST = /^(?:www\.)?google\.(?:com|[a-z]{2}|co\.[a-z]{2}|com\.[a-z]{2})$/;

// Android apps report themselves as android-app://<package>.
const ANDROID_APP_SOURCES: Record<string, Source> = {
    'com.discord': 'community',
    'com.google.android.gm': 'other',
    'com.google.android.googlequicksearchbox': 'search_google',
    'com.openai.chatgpt': 'ai_chatgpt',
    'com.reddit.frontpage': 'community',
};

// Only these exact utm_source values are recognised; anything else is ignored
// and the referrer decides. ChatGPT appends utm_source=chatgpt.com to links.
const UTM_SOURCES: Record<string, Source> = {
    'bing.com': 'search_bing',
    'chat.openai.com': 'ai_chatgpt',
    chatgpt: 'ai_chatgpt',
    'chatgpt.com': 'ai_chatgpt',
    claude: 'ai_claude',
    'claude.ai': 'ai_claude',
    copilot: 'search_bing',
    'copilot.microsoft.com': 'search_bing',
    discord: 'community',
    gemini: 'ai_gemini',
    'gemini.google.com': 'ai_gemini',
    grok: 'ai_grok',
    'grok.com': 'ai_grok',
    perplexity: 'ai_perplexity',
    'perplexity.ai': 'ai_perplexity',
    reddit: 'community',
    tiktok: 'social',
    youtube: 'social',
};

function matchesDomain(host: string, domain: string): boolean {
    return host === domain || host.endsWith(`.${domain}`);
}

/**
 * Category for a referrer URL. Reads only the scheme and hostname (plus the
 * /i/grok path prefix on X) — the referrer itself is never sent anywhere.
 * Empty referrers and this site's own pages count as direct.
 */
export function classifyReferrer(referrer: string): Source {
    if (!referrer) {
        return 'direct';
    }
    let url: URL;
    try {
        url = new URL(referrer);
    } catch {
        return 'other';
    }
    if (url.protocol === 'android-app:') {
        return ANDROID_APP_SOURCES[url.hostname.toLowerCase()] ?? 'other';
    }
    if (url.protocol !== 'https:' && url.protocol !== 'http:') {
        return 'other';
    }
    const host = url.hostname.toLowerCase().replace(/\.$/, '');
    if (GOOGLE_SEARCH_HOST.test(host)) {
        return 'search_google';
    }
    // X hosts Grok under /i/grok; every other X or Twitter page is social.
    if (matchesDomain(host, 'x.com') || matchesDomain(host, 'twitter.com')) {
        return /^\/i\/grok(?:\/|$)/.test(url.pathname) ? 'ai_grok' : 'social';
    }
    for (const [domain, source] of REFERRER_DOMAINS) {
        if (matchesDomain(host, domain)) {
            return source;
        }
    }
    return 'other';
}

/** Category for a utm_source value, or null when it isn't a recognised value. */
export function classifyUtmSource(value: string | null | undefined): Source | null {
    if (!value || value.length > 64) {
        return null;
    }
    const key = value.trim().toLowerCase();
    return Object.hasOwn(UTM_SOURCES, key) ? UTM_SOURCES[key] : null;
}

/**
 * Initial source category for a visit. A recognised external referrer wins;
 * otherwise a recognised utm_source fills in (apps often send no referrer);
 * otherwise the referrer category stands (other/direct).
 */
export function classifySource(search: string, referrer: string): Source {
    const fromReferrer = classifyReferrer(referrer);
    if (fromReferrer !== 'other' && fromReferrer !== 'direct') {
        return fromReferrer;
    }
    let utm: string | null = null;
    try {
        utm = new URLSearchParams(search).get('utm_source');
    } catch {
        utm = null;
    }
    return classifyUtmSource(utm) ?? fromReferrer;
}

// --- Page route ------------------------------------------------------------

/** True for a bounded, slash-separated guide path without query, hash or dots. */
export function isGuideRoute(route: string): boolean {
    return route.length <= MAX_ROUTE_LENGTH && GUIDE_ROUTE.test(route);
}

/**
 * Canonical route for a rendered page, derived from VitePress page data (the
 * docs source file), never from the address bar. Mirrors the sitemap: cleanUrls,
 * `index` → directory URL, and generation pages folded into their family page.
 * Returns null for the 404 page or anything that doesn't look like a guide page.
 */
export function guideRoute(page: { relativePath?: string; isNotFound?: boolean }): string | null {
    const { relativePath = '', isNotFound } = page;
    if (isNotFound || !PAGE_SOURCE.test(relativePath)) {
        return null;
    }
    let route = `/${relativePath.slice(0, -'.md'.length)}`.replace(/(^|\/)index$/, '$1');
    const destination = productDestination(route);
    if (destination) {
        [route] = destination.split(/[?#]/);
    }
    return isGuideRoute(route) ? route : null;
}

// --- Outbound targets ------------------------------------------------------

// airreps.link aliases that stand for a whole destination.
const SHORTLINK_ALIASES: Record<string, Target> = {
    discord: 'discord',
    earhivew: 'earhive',
    hicityw: 'hicity',
    jennyw: 'jenny',
    kakobuy: 'kakobuy',
    reddit: 'reddit',
};

// Seller product shortlinks: seller prefix (e = Earhive, j = Jenny, hc = HiCity)
// followed by a product code such as prov54hl, 4v2tb, maxv3p, gen2v3e or pro3se.
// App downloads (flycc, kkx, …) and other aliases (wise, …) don't fit.
const SELLER_SHORTLINK =
    /^(e|j|hc)(?:(?:gen)?2v\d{1,2}e?|4v\d{1,2}(?:tb|hl)|maxv\d{1,2}(?:p|tb)?|pro3se|prov\d{1,2}(?:tb|hl|hr\d?)?)$/;
const SELLER_PREFIXES: Record<string, Target> = { e: 'earhive', hc: 'hicity', j: 'jenny' };

const DESTINATION_DOMAINS: [string, Target][] = [
    ['hicitypods.com', 'hicity'],
    ['earhive.com', 'earhive'],
    ['replicute.com', 'replicute'],
    ['kakobuy.com', 'kakobuy'],
    ['kakoguide.com', 'kakoguide'],
    ['discord.gg', 'discord'],
];

/** Destination for an outbound link, or null if it isn't one we count. */
export function outboundTarget(href: string): Target | null {
    let url: URL;
    try {
        url = new URL(href);
    } catch {
        return null;
    }
    if (url.protocol !== 'https:' && url.protocol !== 'http:') {
        return null;
    }
    const host = url.hostname.toLowerCase().replace(/\.$/, '');
    if (host === 'airreps.link' || host === 'www.airreps.link') {
        const slug = url.pathname.match(/^\/([A-Za-z0-9]+)\/?$/)?.[1];
        if (!slug) {
            return null;
        }
        if (Object.hasOwn(SHORTLINK_ALIASES, slug)) {
            return SHORTLINK_ALIASES[slug];
        }
        const seller = slug.match(SELLER_SHORTLINK)?.[1];
        return seller ? SELLER_PREFIXES[seller] : null;
    }
    if (host === 'jenny.airreps.info') {
        return 'jenny';
    }
    if (matchesDomain(host, 'discord.com') || matchesDomain(host, 'discordapp.com')) {
        // Invites only — not Discord's own terms/privacy pages.
        return url.pathname.startsWith('/invite/') ? 'discord' : null;
    }
    if (matchesDomain(host, 'reddit.com')) {
        return /^\/r\/airreps(?:\/|$)/i.test(url.pathname) ? 'reddit' : null;
    }
    for (const [domain, target] of DESTINATION_DOMAINS) {
        if (matchesDomain(host, domain)) {
            return target;
        }
    }
    return null;
}

// --- Consent and environment ----------------------------------------------

interface PrivacySignals {
    doNotTrack?: string | null;
    globalPrivacyControl?: boolean;
    msDoNotTrack?: string | null;
}

/** Do Not Track (any vendor spelling) or Global Privacy Control turns measurement off. */
export function prefersNoTracking(
    nav: PrivacySignals | undefined,
    win?: { doNotTrack?: string | null }
): boolean {
    const dnt = [nav?.doNotTrack, nav?.msDoNotTrack, win?.doNotTrack];
    return (
        dnt.some((value) => value === '1' || value === 'yes') || nav?.globalPrivacyControl === true
    );
}

export function isProductionHost(location: { protocol: string; hostname: string }): boolean {
    return location.protocol === 'https:' && PRODUCTION_HOSTS.has(location.hostname);
}

export function serializeEvent(event: MetricEvent): string | null {
    if (!isGuideRoute(event.route)) {
        return null;
    }
    // Fixed field set, in the order the endpoint documents. Never a `test` flag.
    const body = JSON.stringify({
        event: event.event,
        route: event.route,
        source: event.source,
        target: event.target,
    });
    return body.length <= MAX_BODY_BYTES ? body : null;
}

interface ClickLike {
    button: number;
    isTrusted: boolean;
    target: unknown;
    type: string;
}

interface ListenerTarget {
    addEventListener: (
        type: string,
        listener: (event: ClickLike) => void,
        options?: AddEventListenerOptions
    ) => void;
}

export interface MetricsEnv {
    defer: (callback: () => void) => void;
    document: ListenerTarget & {
        referrer: string;
        readyState: string;
        head: { appendChild: (node: unknown) => unknown };
        querySelector: (selector: string) => unknown;
        createElement: (tag: 'script') => {
            type: string;
            src: string;
            setAttribute: (name: string, value: string) => void;
        };
    };
    fetch?: (url: string, init: RequestInit) => Promise<unknown>;
    location: { protocol: string; hostname: string; search: string };
    navigator: PrivacySignals & {
        sendBeacon?: (url: string, data: string) => boolean;
    };
    window: ListenerTarget & { doNotTrack?: string | null };
}

export interface GuideMetrics {
    /** Call after every route change with VitePress's current page data. */
    pageChanged: (page: { relativePath?: string; isNotFound?: boolean }) => void;
}

function browserEnv(): MetricsEnv {
    return {
        defer: (callback) => setTimeout(callback, 0),
        document: document as unknown as MetricsEnv['document'],
        fetch: typeof fetch === 'function' ? fetch.bind(window) : undefined,
        location: window.location,
        navigator: navigator as unknown as MetricsEnv['navigator'],
        window: window as unknown as MetricsEnv['window'],
    };
}

function loadCloudflareBeacon(env: MetricsEnv): void {
    const insert = () => {
        if (env.document.querySelector('script[data-cf-beacon]')) {
            return;
        }
        const script = env.document.createElement('script');
        script.type = 'module';
        script.src = CF_BEACON_SRC;
        script.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_BEACON_TOKEN }));
        env.document.head.appendChild(script);
    };
    // After load, so analytics never competes with the page itself. The beacon
    // reads buffered performance entries and follows SPA navigation on its own.
    if (env.document.readyState === 'complete') {
        insert();
    } else {
        env.window.addEventListener('load', insert, { once: true });
    }
}

function send(env: MetricsEnv, event: MetricEvent): void {
    const body = serializeEvent(event);
    if (!body) {
        return;
    }
    // A plain string beacon is text/plain, so no CORS preflight is needed.
    try {
        if (env.navigator.sendBeacon?.(METRICS_ENDPOINT, body)) {
            return;
        }
    } catch {
        // Fall through to fetch.
    }
    // Measurement is best-effort: failures are dropped, never surfaced.
    try {
        env.fetch?.(METRICS_ENDPOINT, {
            body,
            credentials: 'omit',
            headers: { 'Content-Type': 'text/plain' },
            keepalive: true,
            method: 'POST',
            mode: 'cors',
        }).catch(() => undefined);
    } catch {
        // Ignore.
    }
}

let started = false;

/**
 * Starts measurement once per page load, or returns null when it must stay
 * off (preview/local hosts, Do Not Track, Global Privacy Control).
 */
export function startGuideMetrics(env: MetricsEnv = browserEnv()): GuideMetrics | null {
    if (
        started ||
        !isProductionHost(env.location) ||
        prefersNoTracking(env.navigator, env.window)
    ) {
        return null;
    }
    started = true;

    // Fixed for this tab; only the category is kept, not the referrer or URL.
    const source = classifySource(env.location.search, env.document.referrer);
    let currentRoute: string | null = null;

    loadCloudflareBeacon(env);

    // Outbound intent: primary clicks (including Ctrl/Cmd/Shift and keyboard
    // activation) and middle clicks. Each physical click produces one of these
    // two events, never both. Passive and capture-phase: we never cancel,
    // rewrite or delay the navigation, and other handlers still see the event.
    const onActivate = (event: ClickLike) => {
        if (!event.isTrusted || event.button !== (event.type === 'auxclick' ? 1 : 0)) {
            return;
        }
        const element = event.target as { closest?: (selector: string) => unknown } | null;
        const anchor = element?.closest?.('a[href]') as { href?: unknown } | null | undefined;
        // SVG links expose an object here; only HTML anchors have a string href.
        if (!(currentRoute && typeof anchor?.href === 'string')) {
            return;
        }
        const target = outboundTarget(anchor.href);
        if (target) {
            send(env, { event: 'outbound', route: currentRoute, source, target });
        }
    };
    env.document.addEventListener('click', onActivate, { capture: true, passive: true });
    env.document.addEventListener('auxclick', onActivate, { capture: true, passive: true });

    return {
        pageChanged(page) {
            const route = guideRoute(page);
            // Hash and query changes on the same page arrive here too; they
            // keep the route, so they don't count as another view.
            if (route === currentRoute) {
                return;
            }
            currentRoute = route;
            if (route) {
                // After VitePress renders the page (initial mount or SPA update).
                env.defer(() => send(env, { event: 'view', route, source, target: '' }));
            }
        },
    };
}

/** Test hook: lets each test start from a fresh page load. */
export function resetGuideMetricsForTests(): void {
    started = false;
}
