import { afterAll, beforeAll, beforeEach, describe, expect, test } from 'bun:test';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import {
    CF_BEACON_SRC,
    CF_BEACON_TOKEN,
    classifyReferrer,
    classifySource,
    guideRoute,
    isGuideRoute,
    METRICS_ENDPOINT,
    type MetricsEnv,
    outboundTarget,
    prefersNoTracking,
    resetGuideMetricsForTests,
    type Source,
    startGuideMetrics,
} from '../docs/.vitepress/theme/guide-metrics';
import { routesFromSitemap, serializeRoutes } from './guide-analytics/generate-allowed-routes';

const SOURCES: Source[] = [
    'ai_chatgpt',
    'ai_gemini',
    'ai_claude',
    'ai_grok',
    'ai_perplexity',
    'search_google',
    'search_bing',
    'search_other',
    'community',
    'social',
    'direct',
    'other',
];
const ALLOWED_ROUTES: string[] = JSON.parse(
    readFileSync('scripts/guide-analytics/allowed-routes.json', 'utf8')
);

// Nothing in this file may reach the network, including the real endpoint.
const realFetch = globalThis.fetch;
beforeAll(() => {
    globalThis.fetch = (() => {
        throw new Error('network access is disabled in analytics tests');
    }) as unknown as typeof fetch;
});
afterAll(() => {
    globalThis.fetch = realFetch;
});

describe('source classification', () => {
    test('maps known referrer hosts and their subdomains to categories', () => {
        const cases: [string, Source][] = [
            ['https://chatgpt.com/', 'ai_chatgpt'],
            ['https://chat.openai.com/c/abc', 'ai_chatgpt'],
            ['https://gemini.google.com/app', 'ai_gemini'],
            ['https://claude.ai/chat/123', 'ai_claude'],
            ['https://grok.com/', 'ai_grok'],
            ['https://x.com/i/grok?conversation=1', 'ai_grok'],
            ['https://www.perplexity.ai/search/x', 'ai_perplexity'],
            ['https://www.google.com/', 'search_google'],
            ['https://www.google.co.uk/search?q=airpods+replicas', 'search_google'],
            ['https://google.com.br/', 'search_google'],
            ['https://www.google.de/', 'search_google'],
            ['android-app://com.google.android.googlequicksearchbox/', 'search_google'],
            ['https://www.bing.com/search?q=x', 'search_bing'],
            ['https://copilot.microsoft.com/', 'search_bing'],
            ['https://duckduckgo.com/', 'search_other'],
            ['https://uk.search.yahoo.com/', 'search_other'],
            ['https://yandex.ru/search/', 'search_other'],
            ['https://www.reddit.com/r/AirReps/comments/x', 'community'],
            ['https://out.reddit.com/t3_x', 'community'],
            ['https://discord.com/channels/1/2', 'community'],
            ['https://m.youtube.com/watch?v=x', 'social'],
            ['https://www.tiktok.com/@towy', 'social'],
            ['https://x.com/someone/status/1', 'social'],
            ['https://t.co/abc', 'social'],
            ['', 'direct'],
            ['https://airpodsreplicas.com/links/pro', 'direct'],
            ['https://www.airpodsreplicas.com/', 'direct'],
            ['https://example.com/blog', 'other'],
        ];
        for (const [referrer, source] of cases) {
            expect([referrer, classifyReferrer(referrer)]).toEqual([referrer, source]);
        }
    });

    test('does not let look-alike domains borrow a category', () => {
        for (const referrer of [
            'https://evil-chatgpt.com/',
            'https://chatgpt.com.evil.net/',
            'https://notchatgpt.com/',
            'https://fakeclaude.ai/',
            'https://claude.ai.example.org/',
            'https://google.com.evil.net/',
            'https://notgoogle.com/',
            'https://www.google.evil.com/',
            'https://mail.google.com/',
            'https://grok.com.example.net/',
            'https://myreddit.com/',
            'https://bing.com.example/',
            'https://x.com.evil.net/i/grok',
            'https://airpodsreplicas.com.evil.net/',
            'javascript:alert(1)',
            'not a url',
        ]) {
            expect([referrer, classifyReferrer(referrer)]).toEqual([referrer, 'other']);
        }
        // Only X's Grok path is Grok; similar paths stay social.
        expect(classifyReferrer('https://x.com/i/grokking')).toBe('social');
        expect(classifyReferrer('https://x.com/grok')).toBe('social');
    });

    test('a recognised utm_source fills in when the referrer is empty or unknown', () => {
        expect(classifySource('?utm_source=chatgpt.com', '')).toBe('ai_chatgpt');
        expect(classifySource('?utm_source=ChatGPT.com&utm_medium=x', '')).toBe('ai_chatgpt');
        expect(classifySource('?utm_source=perplexity', 'https://example.com/')).toBe(
            'ai_perplexity'
        );
        // A known referrer is the actual channel and wins over a pasted tag.
        expect(classifySource('?utm_source=chatgpt.com', 'https://www.reddit.com/')).toBe(
            'community'
        );
    });

    test('unknown or oversized utm_source values fall back to the referrer', () => {
        expect(classifySource('?utm_source=newsletter', '')).toBe('direct');
        expect(classifySource('?utm_source=evil-chatgpt.com', 'https://www.google.com/')).toBe(
            'search_google'
        );
        expect(classifySource('?utm_source=spam', 'https://example.com/')).toBe('other');
        expect(classifySource(`?utm_source=${'a'.repeat(70)}chatgpt.com`, '')).toBe('direct');
        expect(classifySource('?utm_source=%E0%A4%A', '')).toBe('direct');
    });

    test('only ever yields one of the endpoint categories, never referrer text', () => {
        const referrers = [
            'https://www.google.com/search?q=secret+query&oq=private',
            'https://chatgpt.com/c/very-private-conversation-id',
            'https://example.com/path?email=me@example.com',
            'android-app://com.example.unknown/',
            'https://192.168.0.1/',
            'data:text/html,hi',
        ];
        for (const referrer of referrers) {
            for (const search of ['', '?utm_source=chatgpt.com', '?utm_source=<script>']) {
                expect(SOURCES).toContain(classifySource(search, referrer));
            }
        }
    });
});

describe('privacy signals', () => {
    test('Do Not Track in any spelling and Global Privacy Control opt out', () => {
        expect(prefersNoTracking({ doNotTrack: '1' })).toBe(true);
        expect(prefersNoTracking({ doNotTrack: 'yes' })).toBe(true);
        expect(prefersNoTracking({ msDoNotTrack: '1' })).toBe(true);
        expect(prefersNoTracking({}, { doNotTrack: '1' })).toBe(true);
        expect(prefersNoTracking({ globalPrivacyControl: true })).toBe(true);
    });

    test('unset or negative signals do not opt out', () => {
        expect(prefersNoTracking({})).toBe(false);
        expect(prefersNoTracking(undefined)).toBe(false);
        expect(prefersNoTracking({ doNotTrack: '0', globalPrivacyControl: false })).toBe(false);
        expect(prefersNoTracking({ doNotTrack: 'unspecified' }, { doNotTrack: null })).toBe(false);
    });
});

describe('canonical routes', () => {
    test('derives clean URLs from page sources like the sitemap does', () => {
        const cases: [string, string][] = [
            ['index.md', '/'],
            ['da/index.md', '/da/'],
            ['articles/index.md', '/articles/'],
            ['tr/articles/index.md', '/tr/articles/'],
            ['links/info.md', '/links/info'],
            ['privacy.md', '/privacy'],
            ['ru/privacy.md', '/ru/privacy'],
            [
                'troubleshooting/AirReps-Incompatibility-with-iCloud.md',
                '/troubleshooting/AirReps-Incompatibility-with-iCloud',
            ],
        ];
        for (const [relativePath, route] of cases) {
            expect(guideRoute({ relativePath })).toBe(route);
        }
    });

    test('folds generation pages into their family route without the fragment', () => {
        expect(guideRoute({ relativePath: 'links/airpods-pro-2.md' })).toBe('/links/pro');
        expect(guideRoute({ relativePath: 'da/version-info/airpods-4.md' })).toBe(
            '/da/version-info/airpods'
        );
        expect(guideRoute({ relativePath: 'version-info/airpods-max.md' })).toBe(
            '/version-info/airpods-max'
        );
    });

    test('rejects the 404 page and anything that is not a plain page path', () => {
        expect(guideRoute({ isNotFound: true, relativePath: 'links/info.md' })).toBeNull();
        for (const relativePath of [
            '',
            'links/info',
            'links/info.html',
            'links/info.md?x=1',
            'links/info#x.md',
            '../secret.md',
            'links/../info.md',
            'links/in%20fo.md',
            'links/in fo.md',
            '/links/info.md',
            'links//info.md',
            `${'a/'.repeat(100)}b.md`,
        ]) {
            expect([relativePath, guideRoute({ relativePath })]).toEqual([relativePath, null]);
        }
    });

    test('route validation never admits queries, fragments, dots or escapes', () => {
        for (const route of [
            '/',
            '/da/',
            '/links/pro',
            '/troubleshooting/macOS-volume-slider-fixup',
        ]) {
            expect(isGuideRoute(route)).toBe(true);
        }
        for (const route of [
            '',
            'links/pro',
            '/links/pro?utm_source=x',
            '/links/pro#airpods-pro-2',
            '/links/pro.html',
            '//evil.com',
            '/links//pro',
            '/links/%2e%2e',
            '/a b',
            `/${'a'.repeat(180)}`,
        ]) {
            expect([route, isGuideRoute(route)]).toEqual([route, false]);
        }
    });

    test('every docs page maps to a route the endpoint accepts, and nothing else is allowed', () => {
        const pages: string[] = [];
        const walk = (dir: string) => {
            for (const entry of readdirSync(dir, { withFileTypes: true })) {
                if (['.vitepress', 'public', 'node_modules'].includes(entry.name)) {
                    continue;
                }
                const full = path.join(dir, entry.name);
                if (entry.isDirectory()) {
                    walk(full);
                } else if (entry.name.endsWith('.md')) {
                    pages.push(path.relative('docs', full).split(path.sep).join('/'));
                }
            }
        };
        walk('docs');
        const routes = new Set(pages.map((relativePath) => guideRoute({ relativePath })));
        expect(routes.has(null)).toBe(false);
        // If this fails after adding or removing pages: build, then run
        // `bun run analytics:routes` (see scripts/guide-analytics/README.md).
        expect([...routes].sort()).toEqual([...ALLOWED_ROUTES].sort());
    });
});

describe('outbound targets', () => {
    test('recognises seller shortlinks by seller prefix and product code', () => {
        const cases: [string, string][] = [
            ['https://airreps.link/eprov54hl', 'earhive'],
            ['https://airreps.link/e4v2tb', 'earhive'],
            ['https://airreps.link/emaxv25', 'earhive'],
            ['https://airreps.link/e2v3e', 'earhive'],
            ['https://airreps.link/eprov53hr2', 'earhive'],
            ['https://airreps.link/jprov7hl', 'jenny'],
            ['https://airreps.link/jpro3se', 'jenny'],
            ['https://airreps.link/jprov52hr', 'jenny'],
            ['https://airreps.link/jmaxv3p/', 'jenny'],
            ['https://airreps.link/hcprov6tb', 'hicity'],
            ['https://airreps.link/hcgen2v3e', 'hicity'],
            ['https://airreps.link/hcmaxv3tb', 'hicity'],
            ['https://airreps.link/earhivew', 'earhive'],
            ['https://airreps.link/jennyw', 'jenny'],
            ['https://airreps.link/hicityw', 'hicity'],
            ['https://airreps.link/kakobuy', 'kakobuy'],
            ['https://airreps.link/discord', 'discord'],
            ['https://airreps.link/reddit', 'reddit'],
        ];
        for (const [href, target] of cases) {
            expect([href, outboundTarget(href)]).toEqual([href, target]);
        }
    });

    test('recognises store, agent and community hosts directly', () => {
        const cases: [string, string][] = [
            ['https://hicitypods.com/product/pro-3-v7-tb/', 'hicity'],
            ['https://www.hicitypods.com', 'hicity'],
            ['https://jenny.airreps.info/product/max-v3-tb/', 'jenny'],
            ['https://earhive.com', 'earhive'],
            ['https://replicute.com/', 'replicute'],
            ['https://www.kakobuy.com/item/details', 'kakobuy'],
            ['https://kakoguide.com/guides/is-kakobuy-legit', 'kakoguide'],
            ['https://discord.gg/airreps', 'discord'],
            ['https://discord.com/invite/airreps', 'discord'],
            ['https://reddit.com/r/airreps', 'reddit'],
            ['https://www.reddit.com/r/AirReps/search?q=v7&restrict_sr=1', 'reddit'],
        ];
        for (const [href, target] of cases) {
            expect([href, outboundTarget(href)]).toEqual([href, target]);
        }
    });

    test('ignores app downloads, unrelated aliases, look-alikes and other sites', () => {
        for (const href of [
            'https://airreps.link/wise',
            'https://airreps.link/flycc',
            'https://airreps.link/iflycc',
            'https://airreps.link/kkx',
            'https://airreps.link/cloudcc',
            'https://airreps.link/hbluetooth',
            'https://airreps.link/bullsuperhr',
            'https://airreps.link/e',
            'https://airreps.link/jevil',
            'https://airreps.link/everything',
            'https://airreps.link/hcprov54hl/extra',
            'https://airreps.link/EPROV54HL',
            'https://airreps.link/',
            'https://airreps.info/aboutsection',
            'https://discord.com/privacy',
            'https://discord.com/terms',
            'https://www.reddit.com/r/airpods',
            'https://hicitypods.com.evil.net/',
            'https://evilhicitypods.com/',
            'https://jenny.airreps.info.evil.net/',
            'https://github.com/AirPodsReplicas/AirReps/blob/main/README.md',
            'https://www.17track.net/',
            'https://airpodsreplicas.com/links/pro',
            'ftp://hicitypods.com/',
            'mailto:staff@example.com',
            'javascript:void(0)',
            'not a url',
        ]) {
            expect([href, outboundTarget(href)]).toEqual([href, null]);
        }
    });

    test('every airreps.link alias used in the guide is either counted or deliberately not', () => {
        const NOT_COUNTED = new Set([
            'airoha156x',
            'bullsuperhr',
            'cloudcc',
            'flycc',
            'gnlink',
            'hbluetooth',
            'iflycc',
            'istarfun',
            'kkx',
            'starfun',
            'wise',
        ]);
        const slugs = new Set<string>();
        const scan = (dir: string) => {
            for (const entry of readdirSync(dir, { withFileTypes: true })) {
                const full = path.join(dir, entry.name);
                if (entry.isDirectory()) {
                    if (
                        !['public', 'node_modules', 'cache', 'dist', '.temp'].includes(entry.name)
                    ) {
                        scan(full);
                    }
                } else if (/\.(?:md|vue)$/.test(entry.name)) {
                    const text = readFileSync(full, 'utf8');
                    for (const [, slug] of text.matchAll(/airreps\.link\/([A-Za-z0-9]+)/g)) {
                        slugs.add(slug);
                    }
                }
            }
        };
        scan('docs');
        expect(slugs.size).toBeGreaterThan(40);
        for (const slug of slugs) {
            const target = outboundTarget(`https://airreps.link/${slug}`);
            expect([slug, NOT_COUNTED.has(slug) ? target === null : target !== null]).toEqual([
                slug,
                true,
            ]);
        }
    });
});

type Listener = (event: Record<string, unknown>) => void;

function fakeBrowser(
    overrides: {
        hostname?: string;
        protocol?: string;
        search?: string;
        referrer?: string;
        readyState?: string;
        navigator?: Record<string, unknown>;
        windowDnt?: string;
        beacon?: (url: string, body: string) => boolean;
    } = {}
) {
    const beacons: Array<{ url: string; body: string }> = [];
    const fetches: Array<{ url: string; init: RequestInit }> = [];
    const documentListeners = new Map<string, Array<{ fn: Listener; options?: unknown }>>();
    const windowListeners = new Map<string, Array<{ fn: Listener; options?: unknown }>>();
    const scripts: Array<{ type: string; src: string; attributes: Record<string, string> }> = [];
    const deferred: Array<() => void> = [];
    const document = {
        addEventListener: (type: string, fn: Listener, options?: unknown) => {
            documentListeners.set(type, [...(documentListeners.get(type) ?? []), { fn, options }]);
        },
        createElement: () => {
            const attributes: Record<string, string> = {};
            return {
                attributes,
                setAttribute(name: string, value: string) {
                    attributes[name] = value;
                },
                src: '',
                type: '',
            };
        },
        head: {
            appendChild: (node: (typeof scripts)[number]) => scripts.push(node),
        },
        querySelector: (selector: string) =>
            selector === 'script[data-cf-beacon]'
                ? (scripts.find((s) => 'data-cf-beacon' in s.attributes) ?? null)
                : null,
        readyState: overrides.readyState ?? 'complete',
        referrer: overrides.referrer ?? '',
    };
    const env = {
        defer: (callback: () => void) => deferred.push(callback),
        document,
        fetch: (url: string, init: RequestInit) => {
            fetches.push({ init, url });
            return Promise.resolve();
        },
        location: {
            hostname: overrides.hostname ?? 'airpodsreplicas.com',
            protocol: overrides.protocol ?? 'https:',
            search: overrides.search ?? '',
        },
        navigator: {
            sendBeacon:
                overrides.beacon ??
                ((url: string, body: string) => {
                    beacons.push({ body, url });
                    return true;
                }),
            ...overrides.navigator,
        },
        window: {
            addEventListener: (type: string, fn: Listener, options?: unknown) => {
                windowListeners.set(type, [...(windowListeners.get(type) ?? []), { fn, options }]);
            },
            doNotTrack: overrides.windowDnt,
        },
    } as unknown as MetricsEnv;

    const sent = () => [...beacons.map((b) => b.body), ...fetches.map((f) => f.init.body)];
    return {
        beacons,
        /** Simulates a trusted click on an element inside the given link. */
        click(href: unknown, event: Record<string, unknown> = {}) {
            const full = {
                button: 0,
                isTrusted: true,
                preventDefault: () => {
                    throw new Error('preventDefault must never be called');
                },
                target: {
                    closest: (selector: string) => (selector === 'a[href]' ? { href } : null),
                },
                type: 'click',
                ...event,
            };
            for (const { fn } of documentListeners.get(String(full.type)) ?? []) {
                fn(full);
            }
        },
        documentListeners,
        env,
        events: () => sent().map((body) => JSON.parse(String(body))),
        fetches,
        flush() {
            for (const callback of deferred.splice(0)) {
                callback();
            }
        },
        scripts,
        sent,
        windowListeners,
    };
}

describe('measurement runtime', () => {
    beforeEach(() => {
        resetGuideMetricsForTests();
    });

    test('stays completely off under Do Not Track or Global Privacy Control', () => {
        for (const overrides of [
            { navigator: { doNotTrack: '1' } },
            { navigator: { msDoNotTrack: '1' } },
            { windowDnt: '1' },
            { navigator: { globalPrivacyControl: true } },
        ]) {
            resetGuideMetricsForTests();
            const browser = fakeBrowser(overrides);
            expect(startGuideMetrics(browser.env)).toBeNull();
            expect(browser.scripts).toHaveLength(0);
            expect(browser.documentListeners.size).toBe(0);
            expect(browser.windowListeners.size).toBe(0);
            browser.click('https://airreps.link/jennyw');
            browser.flush();
            expect(browser.sent()).toHaveLength(0);
        }
    });

    test('never runs on local, preview or non-HTTPS hosts', () => {
        for (const overrides of [
            { hostname: 'localhost' },
            { hostname: '127.0.0.1' },
            { hostname: 'airpodsreplicas.github.io' },
            { hostname: 'preview.airpodsreplicas.com' },
            { hostname: 'airpodsreplicas.com', protocol: 'http:' },
        ]) {
            const browser = fakeBrowser(overrides);
            expect(startGuideMetrics(browser.env)).toBeNull();
            expect(browser.scripts).toHaveLength(0);
            expect(browser.documentListeners.size).toBe(0);
        }
    });

    test('loads the Cloudflare beacon once, after the page has loaded', () => {
        const browser = fakeBrowser({ readyState: 'loading' });
        expect(startGuideMetrics(browser.env)).not.toBeNull();
        expect(browser.scripts).toHaveLength(0);
        const [load] = browser.windowListeners.get('load') ?? [];
        expect(load.options).toEqual({ once: true });
        load.fn({});
        expect(
            browser.scripts.map(({ attributes, src, type }) => ({ attributes, src, type }))
        ).toEqual([
            {
                attributes: { 'data-cf-beacon': JSON.stringify({ token: CF_BEACON_TOKEN }) },
                src: CF_BEACON_SRC,
                type: 'module',
            },
        ]);
        // A second start (e.g. a re-run enhanceApp) adds nothing.
        expect(startGuideMetrics(browser.env)).toBeNull();
        load.fn({});
        expect(browser.scripts).toHaveLength(1);
    });

    test('sends one view per rendered page and ignores hash/query-only changes', () => {
        const browser = fakeBrowser({ referrer: 'https://chatgpt.com/' });
        const metrics = startGuideMetrics(browser.env)!;

        metrics.pageChanged({ relativePath: 'links/info.md' });
        // Not sent until VitePress has rendered.
        expect(browser.sent()).toHaveLength(0);
        browser.flush();
        // Same page again: #hash or ?query navigation, or a repeated hook.
        metrics.pageChanged({ relativePath: 'links/info.md' });
        browser.flush();
        metrics.pageChanged({ relativePath: 'links/pro.md' });
        // Back/forward to an old generation URL resolves to the same family page.
        metrics.pageChanged({ relativePath: 'links/airpods-pro-2.md' });
        browser.flush();
        // Genuine navigation back to the first page is a new view.
        metrics.pageChanged({ relativePath: 'links/info.md' });
        browser.flush();

        expect(browser.events()).toEqual([
            { event: 'view', route: '/links/info', source: 'ai_chatgpt', target: '' },
            { event: 'view', route: '/links/pro', source: 'ai_chatgpt', target: '' },
            { event: 'view', route: '/links/info', source: 'ai_chatgpt', target: '' },
        ]);
    });

    test('skips the 404 page and counts the next real page', () => {
        const browser = fakeBrowser();
        const metrics = startGuideMetrics(browser.env)!;
        metrics.pageChanged({ relativePath: 'quiz.md' });
        metrics.pageChanged({ isNotFound: true, relativePath: 'made-up/path?x=1.md' });
        browser.click('https://airreps.link/jennyw');
        metrics.pageChanged({ relativePath: 'quiz.md' });
        browser.flush();
        expect(browser.events().map((e) => e.route)).toEqual(['/quiz', '/quiz']);
    });

    test('keeps the first source for the whole tab, in memory only', () => {
        const browser = fakeBrowser({ search: '?utm_source=chatgpt.com' });
        const metrics = startGuideMetrics(browser.env)!;
        // Later address-bar or referrer changes don't re-classify the visit.
        browser.env.location.search = '?utm_source=reddit';
        (browser.env.document as { referrer: string }).referrer = 'https://www.google.com/';
        metrics.pageChanged({ relativePath: 'index.md' });
        metrics.pageChanged({ relativePath: 'da/index.md' });
        browser.flush();
        expect(browser.events().map((e) => e.source)).toEqual(['ai_chatgpt', 'ai_chatgpt']);
    });

    test('posts the exact contract as a text/plain beacon, never a test flag', () => {
        const browser = fakeBrowser();
        startGuideMetrics(browser.env)!.pageChanged({ relativePath: 'version-info/pro.md' });
        browser.flush();
        expect(browser.beacons).toEqual([
            {
                body: '{"event":"view","route":"/version-info/pro","source":"direct","target":""}',
                url: METRICS_ENDPOINT,
            },
        ]);
        expect(browser.beacons[0].body.length).toBeLessThanOrEqual(1024);
    });

    test('falls back to a credential-less keepalive fetch when the beacon is refused', () => {
        for (const beacon of [
            () => false,
            () => {
                throw new TypeError('beacon unavailable');
            },
        ]) {
            resetGuideMetricsForTests();
            const browser = fakeBrowser({ beacon });
            startGuideMetrics(browser.env)!.pageChanged({ relativePath: 'index.md' });
            browser.flush();
            expect(browser.fetches).toEqual([
                {
                    init: {
                        body: '{"event":"view","route":"/","source":"direct","target":""}',
                        credentials: 'omit',
                        headers: { 'Content-Type': 'text/plain' },
                        keepalive: true,
                        method: 'POST',
                        mode: 'cors',
                    },
                    url: METRICS_ENDPOINT,
                },
            ]);
        }
    });

    test('counts primary and middle clicks on known links once, without interfering', () => {
        const browser = fakeBrowser({ referrer: 'https://www.google.com/' });
        const metrics = startGuideMetrics(browser.env)!;
        for (const type of ['click', 'auxclick']) {
            expect(browser.documentListeners.get(type)?.map((l) => l.options)).toEqual([
                { capture: true, passive: true },
            ]);
        }

        // Before any page is known there is no route to attribute the click to.
        browser.click('https://airreps.link/jennyw');
        metrics.pageChanged({ relativePath: 'links/pro.md' });
        browser.flush();

        browser.click('https://airreps.link/eprov54hl');
        browser.click('https://hicitypods.com/', { ctrlKey: true });
        browser.click('https://airreps.link/kakobuy', { button: 1, type: 'auxclick' });
        // Browsers that also fire `click` for the middle button must not double count.
        browser.click('https://airreps.link/kakobuy', { button: 1, type: 'click' });
        // Right clicks, synthetic clicks, SVG links and unrelated links are ignored.
        browser.click('https://airreps.link/discord', { button: 2, type: 'auxclick' });
        browser.click('https://airreps.link/discord', { isTrusted: false });
        browser.click({ baseVal: 'https://airreps.link/discord' });
        browser.click('https://airreps.link/flycc');
        browser.click('https://github.com/AirPodsReplicas/AirReps');
        browser.click(undefined);

        expect(browser.events()).toEqual([
            { event: 'view', route: '/links/pro', source: 'search_google', target: '' },
            { event: 'outbound', route: '/links/pro', source: 'search_google', target: 'earhive' },
            { event: 'outbound', route: '/links/pro', source: 'search_google', target: 'hicity' },
            { event: 'outbound', route: '/links/pro', source: 'search_google', target: 'kakobuy' },
        ]);
    });
});

describe('allowed-routes generator', () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
<url><loc>https://airpodsreplicas.com/links/pro</loc><xhtml:link rel="alternate" hreflang="da" href="https://airpodsreplicas.com/da/links/pro"/><image:image><image:loc>https://airpodsreplicas.com/og/links/pro.png</image:loc></image:image></url>
<url><loc>https://airpodsreplicas.com/</loc></url>
<url><loc>https://airpodsreplicas.com/da/articles/</loc></url>
<url><loc>https://airpodsreplicas.com/links/pro</loc></url>
</urlset>`;

    test('takes only page <loc> paths, de-duplicated and sorted', () => {
        expect(routesFromSitemap(sitemap)).toEqual(['/', '/da/articles/', '/links/pro']);
        expect(serializeRoutes(['/', '/links/pro'])).toBe('[\n  "/",\n  "/links/pro"\n]\n');
    });

    test('refuses foreign hosts, queries and malformed paths instead of shipping them', () => {
        for (const loc of [
            'https://example.com/links/pro',
            'https://airpodsreplicas.com/links/pro?x=1',
            'https://airpodsreplicas.com/links/pro.html',
        ]) {
            expect(() => routesFromSitemap(`<url><loc>${loc}</loc></url>`)).toThrow();
        }
        expect(() => routesFromSitemap('<urlset></urlset>')).toThrow();
    });

    const builtSitemap = 'docs/.vitepress/dist/sitemap.xml';
    test.skipIf(!existsSync(builtSitemap))('committed allowlist matches the last build', () => {
        expect(serializeRoutes(routesFromSitemap(readFileSync(builtSitemap, 'utf8')))).toBe(
            readFileSync('scripts/guide-analytics/allowed-routes.json', 'utf8')
        );
    });
});
