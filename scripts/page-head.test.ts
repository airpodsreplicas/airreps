import { describe, expect, test } from 'bun:test';
import type { HeadConfig, PageData } from 'vitepress';
import config from '../docs/.vitepress/config';

async function page(relativePath: string, overrides: Partial<PageData> = {}) {
    const data: PageData = {
        description: 'Page description',
        filePath: relativePath,
        frontmatter: {},
        headers: [],
        relativePath,
        title: 'Page title',
        ...overrides,
    };
    const changed = await config.transformPageData?.(data, {} as never);
    if (changed) {
        Object.assign(data, changed);
    }
    return data;
}

function head(data: PageData): HeadConfig[] {
    return data.frontmatter.head ?? [];
}

function graph(data: PageData): Record<string, unknown>[] {
    return head(data)
        .filter(([tag, attrs]) => tag === 'script' && attrs.type === 'application/ld+json')
        .flatMap(([, , text]) => JSON.parse(text ?? '{}')['@graph'] ?? []);
}

describe('metadata available to direct loads and client navigation', () => {
    for (const locale of ['', 'da/', 'de/', 'es/', 'fr/', 'pl/', 'pt/', 'ru/', 'tr/']) {
        test(`${locale || 'en/'} page data carries its destination canonical and alternates`, async () => {
            // Pages without a lastUpdated value still need client-managed head tags.
            const data = await page(`${locale}privacy.md`);
            const canonical = head(data).filter(
                ([tag, attrs]) => tag === 'link' && attrs.rel === 'canonical'
            );
            expect(canonical).toEqual([
                [
                    'link',
                    { href: `https://airpodsreplicas.com/${locale}privacy`, rel: 'canonical' },
                ],
            ]);
            const alternates = head(data).filter(
                ([tag, attrs]) => tag === 'link' && attrs.hreflang
            );
            expect(alternates).toHaveLength(10);
            expect(alternates.every(([, attrs]) => attrs.href.endsWith('/privacy'))).toBe(true);
            expect(head(data)).toContainEqual([
                'meta',
                {
                    content: `https://airpodsreplicas.com/${locale}privacy`,
                    property: 'og:url',
                },
            ]);
        });
    }

    test('retains existing frontmatter entries and includes Article and FAQ data', async () => {
        const existing: HeadConfig = ['meta', { content: 'keep', name: 'custom-page-meta' }];
        const data = await page('articles/flycc-app-guide.md', {
            frontmatter: { head: [existing] },
        });
        expect(head(data)[0]).toEqual(existing);
        expect(graph(data).some((node) => node['@type'] === 'Article')).toBe(true);
        const faq = head(data)
            .filter(([tag, attrs]) => tag === 'script' && attrs.type === 'application/ld+json')
            .map(([, , text]) => JSON.parse(text ?? '{}'))
            .find((schema) => schema['@type'] === 'FAQPage');
        expect(faq?.mainEntity.length).toBeGreaterThan(0);
    });

    test('resolves include-aware modification dates before generating schema', async () => {
        const initial = Date.parse('2000-01-01T00:00:00Z');
        const data = await page('version-info/pro.md', { lastUpdated: initial });
        expect(data.lastUpdated).toBeGreaterThan(initial);
        const article = graph(data).find((node) => node['@type'] === 'Article');
        expect(article?.dateModified).toBe(new Date(data.lastUpdated!).toISOString());
    });

    test('preserves an explicit frontmatter date while still generating metadata', async () => {
        const explicit = new Date('2024-02-03T04:05:06Z');
        const data = await page('articles/flycc-app-guide.md', {
            frontmatter: { lastUpdated: explicit },
            lastUpdated: +explicit,
        });
        expect(data.lastUpdated).toBe(+explicit);
        const article = graph(data).find((node) => node['@type'] === 'Article');
        expect(article?.dateModified).toBe(explicit.toISOString());
    });

    test('keeps generation redirects noindex with the family canonical', async () => {
        const data = await page('da/links/airpods-pro-3.md');
        expect(head(data)).toContainEqual(['meta', { content: 'noindex, follow', name: 'robots' }]);
        expect(head(data)).toContainEqual([
            'link',
            { href: 'https://airpodsreplicas.com/da/links/pro', rel: 'canonical' },
        ]);
        expect(head(data).filter(([tag]) => tag === 'script')).toHaveLength(1);
    });

    test('preserves the synthetic 404 head without mutating the build context', async () => {
        // VitePress creates this page after Markdown transforms have finished.
        const data: PageData = {
            description: '',
            filePath: '',
            frontmatter: {},
            headers: [],
            isNotFound: true,
            relativePath: '404.md',
            title: '404',
        };
        const before = structuredClone(data);
        const generated = await config.transformHead?.({ pageData: data } as never);
        expect(data).toEqual(before);
        expect(generated).toEqual(config.themeConfig?.synthetic404Head);
        expect(generated).toContainEqual([
            'link',
            { href: 'https://airpodsreplicas.com/404', rel: 'canonical' },
        ]);
        expect(
            generated?.some(([tag, attrs]) => tag === 'meta' && attrs.property === 'og:url')
        ).toBe(true);
        expect(
            generated?.some(
                ([tag, attrs]) => tag === 'script' && attrs.type === 'application/ld+json'
            )
        ).toBe(true);
    });

    test('the build fallback does not duplicate a real page’s managed head', async () => {
        const data = await page('links/info.md');
        expect(await config.transformHead?.({ pageData: data } as never)).toEqual([]);
    });
});
