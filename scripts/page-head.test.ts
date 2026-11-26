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

    test('retains existing frontmatter entries and merges TechArticle and FAQPage in @graph', async () => {
        const existing: HeadConfig = ['meta', { content: 'keep', name: 'custom-page-meta' }];
        const data = await page('articles/flycc-app-guide.md', {
            frontmatter: { head: [existing] },
            title: 'FlyCC APK Guide',
        });
        expect(head(data)[0]).toEqual(existing);
        const ldBlocks = head(data).filter(
            ([tag, attrs]) => tag === 'script' && attrs.type === 'application/ld+json'
        );
        expect(ldBlocks).toHaveLength(1);
        const article = graph(data).find((node) => node['@type'] === 'TechArticle');
        expect(article).toBeDefined();
        expect(article?.headline).toBe('FlyCC APK Guide');
        const faq = graph(data).find((node) => node['@type'] === 'FAQPage') as
            | { mainEntity: unknown[]; mainEntityOfPage: { '@id': string } }
            | undefined;
        expect(faq?.mainEntity.length).toBeGreaterThan(0);
        expect(faq?.mainEntityOfPage).toEqual({ '@id': article?.['@id'] });
    });

    test('localizes breadcrumbs and prevents English JSON-LD leakage on non-English locales', async () => {
        const home = await page('da/index.md', { title: 'AirPods-kopier' });
        const homeGraph = graph(home);
        const org = homeGraph.find((node) => node['@type'] === 'Organization');
        const site = homeGraph.find((node) => node['@type'] === 'WebSite');
        expect(site?.inLanguage).toBe('da');
        expect(site?.url).toBe('https://airpodsreplicas.com/da/');
        expect(site?.alternateName).toBeUndefined();
        expect(org?.alternateName).toBeUndefined();
        expect(org?.knowsAbout).toBeUndefined();
        expect(homeGraph.some((node) => node['@type'] === 'BreadcrumbList')).toBe(false);

        const article = await page('da/articles/starfun-app-guide.md', {
            title: 'StarFun APK-vejledning',
        });
        const crumb = graph(article).find((node) => node['@type'] === 'BreadcrumbList') as
            | { itemListElement: Array<{ item: string; name: string; position: number }> }
            | undefined;
        expect(crumb?.itemListElement).toEqual([
            {
                '@type': 'ListItem',
                item: 'https://airpodsreplicas.com/da/',
                name: 'Hjem',
                position: 1,
            },
            {
                '@type': 'ListItem',
                item: 'https://airpodsreplicas.com/da/articles/',
                name: 'Artikler',
                position: 2,
            },
            {
                '@type': 'ListItem',
                item: 'https://airpodsreplicas.com/da/articles/starfun-app-guide',
                name: 'StarFun APK-vejledning',
                position: 3,
            },
        ]);
    });

    test('does not duplicate the hub URL in BreadcrumbList on section start pages', async () => {
        const hubs = await Promise.all(
            [
                'introduction/overview.md',
                'links/info.md',
                'version-info/general.md',
                'ordering/how-to-buy.md',
                'troubleshooting/other-common-bugs.md',
                'da/introduction/overview.md',
            ].map((hub) => page(hub))
        );
        for (const data of hubs) {
            const crumb = graph(data).find((node) => node['@type'] === 'BreadcrumbList') as
                | { itemListElement: Array<{ item: string }> }
                | undefined;
            const urls = crumb?.itemListElement.map((entry) => entry.item) ?? [];
            expect(urls).toHaveLength(2);
            expect(new Set(urls).size).toBe(2);
        }
    });

    test('emits rich @types for articles index, useful-apps, quiz and utility pages', async () => {
        const articlesIndex = await page('articles/index.md', { title: 'Articles' });
        const articlesNode = graph(articlesIndex).find(
            (node) => node['@type'] === 'CollectionPage'
        ) as { mainEntity?: { itemListElement?: unknown[] } } | undefined;
        expect(articlesNode?.mainEntity?.itemListElement?.length).toBeGreaterThanOrEqual(20);

        const apps = await page('useful-apps.md', { title: 'Useful Apps' });
        const appsNode = graph(apps).find((node) => node['@type'] === 'CollectionPage') as
            | { mainEntity?: { itemListElement?: Array<{ item?: { '@type': string } }> } }
            | undefined;
        expect(
            appsNode?.mainEntity?.itemListElement?.every(
                (entry) => entry.item?.['@type'] === 'SoftwareApplication'
            )
        ).toBe(true);

        const quiz = await page('quiz.md', { title: 'Quiz' });
        expect(graph(quiz).some((node) => node['@type'] === 'WebApplication')).toBe(true);

        const utils = await Promise.all(
            ['privacy.md', 'contributing.md', 'bot/privacy.md', 'bot/terms.md'].map((util) =>
                page(util)
            )
        );
        for (const data of utils) {
            expect(graph(data).some((node) => node['@type'] === 'WebPage')).toBe(true);
            expect(graph(data).some((node) => node['@type'] === 'Article')).toBe(false);
        }
    });

    test('filters Discord bot legal pages out of sitemap.xml', () => {
        const items = [
            { url: '' },
            { url: 'privacy' },
            { url: 'bot/privacy' },
            { url: 'bot/terms' },
            { url: 'da/bot/privacy' },
            { url: 'tr/bot/terms' },
            { url: 'version-info/pro' },
        ];
        const filtered = config.sitemap?.transformItems?.(items) ?? [];
        expect(filtered.map((item) => item.url)).toEqual(['', 'privacy', 'version-info/pro']);
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
        const article = graph(data).find((node) => node['@type'] === 'TechArticle');
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

    test('marks the synthetic 404 noindex without canonical, hreflang, or JSON-LD', async () => {
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
        expect(generated).toEqual([['meta', { content: 'noindex, nofollow', name: 'robots' }]]);
    });

    test('the build fallback does not duplicate a real page’s managed head', async () => {
        const data = await page('links/info.md');
        expect(await config.transformHead?.({ pageData: data } as never)).toEqual([]);
    });
});
