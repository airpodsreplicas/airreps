// Shopping links that can earn AirReps a commission: the trusted sellers'
// product shortlinks and Weidian store aliases on airreps.link, the KakoBuy
// signup alias, and product/home pages on the sellers' own stores. Google asks
// for paid links like these to carry rel="sponsored":
// https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links
//
// Everything else stays an ordinary link: seller support pages (/go/whatsapp/),
// app downloads, Discord/Reddit, other airreps.link aliases and lookalike
// domains. Shared by the markdown plugin (static pages) and the Quiz (client-
// rendered results), so both qualify exactly the same links.

const SHORTLINK_HOSTS = new Set(['airreps.link', 'www.airreps.link']);

// Seller Weidian store pages and the KakoBuy signup referral.
const SHOPPING_ALIASES = new Set(['earhivew', 'hicityw', 'jennyw', 'kakobuy']);

// Seller product shortlinks: seller prefix (e = Earhive, j = Jenny, hc = HiCity)
// followed by a product code such as prov7hl, 4v2tb, maxv3p, gen2v3e or pro3se.
// App downloads (flycc, kkx, …) and other aliases (discord, wise, …) don't fit.
const SELLER_PRODUCT =
    /^(?:e|j|hc)(?:(?:gen)?2v\d{1,2}e?|4v\d{1,2}(?:tb|hl)|maxv\d{1,2}(?:p|tb)?|pro3se|prov\d{1,2}(?:tb|hl|hr\d?)?)$/;

const SELLER_STORES = new Set([
    'earhive.com',
    'www.earhive.com',
    'hicitypods.com',
    'www.hicitypods.com',
    'jenny.airreps.info',
]);
const KAKOBUY_HOSTS = new Set(['kakobuy.com', 'www.kakobuy.com']);

function parseLink(href: string | null | undefined): URL | null {
    if (!href) {
        return null;
    }
    try {
        const url = new URL(href.trim());
        return url.protocol === 'https:' || url.protocol === 'http:' ? url : null;
    } catch {
        // Relative, protocol-relative and malformed hrefs are never purchase links.
        return null;
    }
}

const hostOf = (url: URL): string => url.hostname.replace(/\.$/, '');

/** Whether an href is a commission-earning seller or KakoBuy purchase link. */
export function isCompensatedPurchaseLink(href: string | null | undefined): boolean {
    const url = parseLink(href);
    if (!url) {
        return false;
    }
    const host = hostOf(url);
    const path = url.pathname;
    if (SHORTLINK_HOSTS.has(host)) {
        const slug = path.match(/^\/([A-Za-z0-9]+)\/?$/)?.[1];
        return slug !== undefined && (SHOPPING_ALIASES.has(slug) || SELLER_PRODUCT.test(slug));
    }
    if (SELLER_STORES.has(host)) {
        // Store home, shop and product pages; not support or account pages.
        return ['', '/', '/store', '/store/'].includes(path) || path.startsWith('/product/');
    }
    if (KAKOBUY_HOSTS.has(host)) {
        return ['', '/'].includes(path) || /^\/(?:item\/|index\/user\/register)/.test(path);
    }
    return false;
}

/** `rel` with the given tokens appended when missing; existing tokens are kept as written. */
export function relWith(rel: string | null | undefined, ...tokens: string[]): string {
    const current = (rel ?? '').split(/\s+/).filter(Boolean);
    const present = new Set(current.map((token) => token.toLowerCase()));
    const missing = tokens.filter((token) => !present.has(token));
    return missing.length ? [...current, ...missing].join(' ') : (rel ?? '');
}

/** `rel` for a link: adds "sponsored" to compensated purchase links only. */
export function purchaseLinkRel(href: string | null | undefined, rel = ''): string {
    return isCompensatedPurchaseLink(href) ? relWith(rel, 'sponsored') : rel;
}

// --- Raw HTML anchors ------------------------------------------------------

// An opening <a> tag; quoted attribute values may contain `>`.
export const ANCHOR_TAG = /<a(?=[\s>])(?:[^>"']|"[^"]*"|'[^']*')*>/gi;
const ATTRIBUTE = /([^\s"'>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;

interface Attribute {
    name: string;
    value: string;
    quote: string;
    start: number;
    end: number;
}

function attributesOf(tag: string): Attribute[] {
    const attributes: Attribute[] = [];
    const body = tag.slice(2, -1);
    for (const match of body.matchAll(ATTRIBUTE)) {
        const [, name, double, single, bare] = match;
        const start = 2 + (match.index ?? 0);
        attributes.push({
            end: start + match[0].length,
            name: name.toLowerCase(),
            quote: double === undefined ? (single === undefined ? '' : "'") : '"',
            start,
            value: double ?? single ?? bare ?? '',
        });
    }
    return attributes;
}

/**
 * Adds `rel` tokens to one opening <a> tag without touching its other bytes;
 * an existing rel attribute is extended in place, never duplicated. `newTab`
 * adds target="_blank" with noopener, unless the tag already has a target.
 */
export function withAnchorAttributes(
    tag: string,
    { newTab = false, rel = [] }: { newTab?: boolean; rel?: string[] }
): string {
    const attributes = attributesOf(tag);
    const relAttribute = attributes.find((attribute) => attribute.name === 'rel');
    const addTarget = newTab && !attributes.some((attribute) => attribute.name === 'target');
    const tokens = addTarget ? ['noopener', ...rel] : rel;
    let edited = tag;
    if (relAttribute) {
        const value = relWith(relAttribute.value, ...tokens);
        if (value !== relAttribute.value) {
            const quote = relAttribute.quote || '"';
            edited = `${tag.slice(0, relAttribute.start)}rel=${quote}${value}${quote}${tag.slice(relAttribute.end)}`;
        }
    }
    const added = [
        addTarget ? ' target="_blank"' : '',
        tokens.length && !relAttribute ? ` rel="${relWith('', ...tokens)}"` : '',
    ].join('');
    return added ? `<a${added}${edited.slice(2)}` : edited;
}

/** The literal href of an opening <a> tag, with `&amp;` decoded. */
export function anchorHref(tag: string): string | null {
    const href = attributesOf(tag).find((attribute) => attribute.name === 'href');
    return href ? href.value.replace(/&amp;/gi, '&') : null;
}

/** Whether an href points at the airreps.link shortener. */
export function isShortlink(href: string | null | undefined): boolean {
    const url = parseLink(href);
    return url !== null && SHORTLINK_HOSTS.has(hostOf(url));
}

/**
 * Qualifies the purchase anchors in a chunk of raw HTML (the seller tables).
 * Seller shortlinks without a target also open in a new tab with noopener, as
 * those table links always have on a direct page load.
 */
export function qualifyRawPurchaseAnchors(html: string): string {
    return html.replace(ANCHOR_TAG, (tag) => {
        const href = anchorHref(tag);
        return isCompensatedPurchaseLink(href)
            ? withAnchorAttributes(tag, { newTab: isShortlink(href), rel: ['sponsored'] })
            : tag;
    });
}
