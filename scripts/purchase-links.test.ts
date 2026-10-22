import { afterAll, describe, expect, test } from 'bun:test';
import { fileURLToPath } from 'node:url';
import { createMarkdownRenderer, disposeMdItInstance } from 'vitepress';
import { sponsoredLinksPlugin } from '../docs/.vitepress/plugins/sponsored-links';
import {
    anchorHref,
    isCompensatedPurchaseLink,
    purchaseLinkRel,
    qualifyRawPurchaseAnchors,
} from '../docs/.vitepress/purchase-links';

// Representative current seller/referral destinations, with no network requests.
const paid = [
    'https://airreps.link/eprov53tb',
    'https://airreps.link/hcprov53tb',
    'https://airreps.link/jprov53tb',
    'https://airreps.link/e4v2tb',
    'https://airreps.link/hcmaxv3p',
    'https://airreps.link/jgen2v3e',
    'https://airreps.link/earhivew',
    'https://airreps.link/hicityw',
    'https://airreps.link/jennyw',
    'https://airreps.link/kakobuy',
    'https://earhive.com/product/pro-3-v6-tb/',
    'https://hicitypods.com/',
    'https://jenny.airreps.info/store/',
    'https://www.kakobuy.com/item/details?platform=WEIDIAN&id=123',
    'https://www.kakobuy.com/index/user/register?code=airreps',
];
const ordinary = [
    'https://airreps.link/discord',
    'https://airreps.link/flycc',
    'https://airreps.link/iflycc',
    'https://airreps.link/istarfun',
    'https://airreps.link/wise',
    'https://airreps.link/unknown-slug',
    'https://earhive.com/go/whatsapp/',
    'https://hicitypods.com/privacy-policy/',
    'https://jenny.airreps.info/my-account/',
    'https://kakoguide.com/taobao-companion',
    'https://www.kakobuy.com/tools/estimate',
    'https://www.kakobuy.com/index/user/register-help',
    'https://item.kakobuy.com/service/help/question?id=123',
    'https://airreps.link.evil.invalid/eprov53tb',
    'https://airreps.link@evil.invalid/eprov53tb',
    'https://not-hicitypods.com/product/pro-3-v6-tb/',
    '/links/pro',
    '#seller',
    'javascript:alert(1)',
];

describe('known paid destinations and ordinary support/editorial links', () => {
    test.each(paid)('qualifies %s', (href) => {
        expect(isCompensatedPurchaseLink(href)).toBe(true);
        expect(purchaseLinkRel(href, 'noopener noreferrer')).toBe('noopener noreferrer sponsored');
    });
    test.each(ordinary)('keeps %s ordinary', (href) => {
        expect(isCompensatedPurchaseLink(href)).toBe(false);
        expect(purchaseLinkRel(href, 'noopener')).toBe('noopener');
    });
});

describe('literal anchor and existing-token preservation', () => {
    test('preserves the exact href/query and other attributes, without adding noreferrer', () => {
        const input = '<a href="https://airreps.link/eprov53tb?ref=a&amp;other=b" title="a > b">';
        const output = qualifyRawPurchaseAnchors(input);
        expect(output).toContain('href="https://airreps.link/eprov53tb?ref=a&amp;other=b"');
        expect(output).toContain('title="a > b"');
        expect(output).toContain('target="_blank"');
        expect(output).toContain('rel="noopener sponsored"');
        expect(output).not.toContain('noreferrer');
        expect(qualifyRawPurchaseAnchors(output)).toBe(output);
    });
    test('preserves explicit targets and extends one existing rel', () => {
        const input =
            "<a HREF=https://airreps.link/jprov53tb target=frameA rel=nofollow title='a > b'>";
        const output = qualifyRawPurchaseAnchors(input);
        expect(output).toContain('HREF=https://airreps.link/jprov53tb');
        expect(output).toContain('target=frameA');
        expect(output).toContain('rel="nofollow sponsored"');
        expect(output.match(/\brel=/g)).toHaveLength(1);
        expect(qualifyRawPurchaseAnchors(output)).toBe(output);
    });
    test('does not duplicate existing case-insensitive rel tokens', () => {
        const input =
            '<a href="https://airreps.link/hcprov53tb" target="_blank" rel="NoOpEnEr noreferrer SPONSORED nofollow">';
        expect(qualifyRawPurchaseAnchors(input)).toBe(input);
        expect(purchaseLinkRel(paid[0], 'NoOpEnEr noreferrer SPONSORED nofollow')).toBe(
            'NoOpEnEr noreferrer SPONSORED nofollow'
        );
    });
    test('keeps ordinary raw links byte-identical and ignores URLs in data attributes', () => {
        const input = '<a data-href="https://airreps.link/eprov53tb" href="/links/pro">';
        expect(anchorHref(input)).toBe('/links/pro');
        expect(qualifyRawPurchaseAnchors(input)).toBe(input);
        for (const href of ordinary) {
            const tag = `<a href="${href}" target="_blank" rel="noopener">`;
            expect(qualifyRawPurchaseAnchors(tag)).toBe(tag);
        }
    });
});

// VitePress caches one renderer globally. Keep this suite's plugin configuration
// isolated from the product-family renderer tests in the same Bun process.
disposeMdItInstance();
const markdown = await createMarkdownRenderer(fileURLToPath(new URL('../docs/', import.meta.url)), {
    config: sponsoredLinksPlugin,
    highlight: (code) => code,
});
afterAll(disposeMdItInstance);
describe('actual VitePress Markdown rendering', () => {
    test('Markdown and raw purchase anchors receive sponsored, keeping their referrer policy', () => {
        const html = markdown.render(
            '[Buy](https://airreps.link/eprov53tb)\n\n<a href="https://airreps.link/hcprov53tb">Buy</a>'
        );
        const tags = html.match(/<a\b[^>]*>/g) ?? [];
        expect(tags).toHaveLength(2);
        expect(tags.every((tag) => /\bsponsored\b/.test(tag))).toBe(true);
        expect(tags[0]).toContain('noreferrer');
        expect(tags[1]).toContain('target="_blank"');
        expect(tags[1]).not.toContain('noreferrer');
    });
    test('keeps support, editorial and code examples ordinary', () => {
        const html = markdown.render(
            '[Help](https://earhive.com/go/whatsapp/)\n\n[Tool](https://kakoguide.com/taobao-companion)\n\n```html\n<a href="https://airreps.link/eprov53tb">Example</a>\n```'
        );
        expect(html).not.toContain('sponsored');
    });
    test('retains explicit Markdown target and nofollow without suppressing the referrer', () => {
        const html = markdown.render(
            '[Buy](https://airreps.link/eprov53tb){target="_self" rel="nofollow"}'
        );
        const tag = html.match(/<a\b[^>]*>/)?.[0] ?? '';
        expect(tag).toContain('target="_self"');
        expect(tag).toContain('nofollow');
        expect(tag).toContain('sponsored');
        expect(tag).not.toContain('noreferrer');
        expect(tag.match(/\brel=/g)).toHaveLength(1);
    });
});
