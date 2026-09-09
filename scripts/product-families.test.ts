import { describe, expect, test } from 'bun:test';
import { createMarkdownRenderer } from 'vitepress';
import { productFamiliesPlugin } from '../docs/.vitepress/plugins/product-families';
import {
    PRODUCT_FAMILIES,
    productDestination,
    productRedirectScript,
} from '../docs/.vitepress/product-routes';

const md = await createMarkdownRenderer(process.cwd(), { config: productFamiliesPlugin });

describe('product family pages', () => {
    test('gives included generations unique anchors below one page title', async () => {
        const html = await md.renderAsync(`<!-- product-family -->

# AirPods Pro

# Buy AirPods Pro 3 Replicas

## Versions and Sellers

<span id="se-overview"></span>

# Buy AirPods Pro 2 Replicas

## Versions and Sellers

# AirPods Pro

## Versions and Sellers
`);

        expect(html.match(/<h1\b/g)).toHaveLength(1);
        expect(html.match(/<h2\b/g)).toHaveLength(3);
        expect(html.match(/<h3\b/g)).toHaveLength(3);
        for (const id of ['product-family', 'airpods-pro-3', 'airpods-pro-2', 'airpods-pro']) {
            expect(html).toContain(`id="${id}"`);
        }
        for (const id of [
            'airpods-pro-3-versions-and-sellers',
            'airpods-pro-2-versions-and-sellers',
            'airpods-pro-3-se-overview',
        ]) {
            expect(html).toContain(`id="${id}"`);
        }
        const ids = [...html.matchAll(/ id="([^"]+)"/g)].map((match) => match[1]);
        expect(new Set(ids).size).toBe(ids.length);
    });

    test('keeps links in the right language and family, preserving detail anchors', async () => {
        const html = await md.renderAsync(`<!-- product-family -->

# AirPods

[Sellers](/da/links/airpods-4)
[Versions](/version-info/airpods-pro-3#se-overview)
[Max](/links/airpods-max)
[Seller](https://airreps.link/jenny)
[Details](#airpods-5)
`);

        expect(html).toMatch(/href="\/da\/links\/airpods(?:\.html)?#airpods-4"/);
        expect(html).toMatch(/href="\/version-info\/pro(?:\.html)?#airpods-pro-3-se-overview"/);
        expect(html).toMatch(/href="\/links\/airpods-max(?:\.html)?"/);
        expect(html).toContain('href="https://airreps.link/jenny"');
        expect(html).toContain('href="#airpods-5"');
    });

    test('preserves standalone headings while updating outgoing links', async () => {
        const html = await md.renderAsync(`# AirPods Pro 3

[Sellers](/links/airpods-pro-3)

## SE Overview
`);

        expect(html).toContain('<h1 id="airpods-pro-3"');
        expect(html).toContain('<h2 id="se-overview"');
        expect(html).toMatch(/href="\/links\/pro(?:\.html)?#airpods-pro-3"/);
        expect(html).not.toContain('product-family');
    });
});

describe('generation redirects', () => {
    test('maps every locale and generation, including old HTML and directory URLs', () => {
        for (const locale of ['', '/da', '/de', '/es', '/fr', '/pl', '/pt', '/ru', '/tr']) {
            for (const section of ['links', 'version-info']) {
                for (const [model, family] of Object.entries(PRODUCT_FAMILIES)) {
                    for (const suffix of ['', '.html', '.md', '/', '/index.html']) {
                        expect(productDestination(`${locale}/${section}/${model}${suffix}`)).toBe(
                            `${locale}/${section}/${family}#${model}`
                        );
                    }
                }
            }
        }
    });

    test('preserves queries and distinguishes duplicate subsection headings', () => {
        expect(productDestination('/da/links/airpods-pro-2?ref=quiz#versions-and-sellers')).toBe(
            '/da/links/pro?ref=quiz#airpods-pro-2-versions-and-sellers'
        );
        expect(productDestination('/links/airpods-pro-2#airpods-pro-2')).toBe(
            '/links/pro#airpods-pro-2'
        );
        expect(productDestination('/ru/version-info/airpods-pro-3#se-overview')).toBe(
            '/ru/version-info/pro#airpods-pro-3-se-overview'
        );
    });

    test('leaves current families, Max, unrelated URLs and malformed URLs alone', () => {
        for (const url of [
            '/links/pro#airpods-pro-2',
            '/version-info/airpods',
            '/links/airpods-max',
            '/quiz',
            '/links/toString',
            'https://example.com/links/airpods-2',
            'http://[invalid',
        ]) {
            expect(productDestination(url)).toBeNull();
        }
    });

    test('direct-load script retains the incoming query and bookmark', () => {
        const targets: string[] = [];
        const location = {
            hash: '#v5-3-version-differences',
            origin: 'https://airpodsreplicas.com',
            replace: (url: string) => targets.push(url),
            search: '?ref=bookmark',
        };
        new Function('location', productRedirectScript('/version-info/airpods-pro-2'))(location);
        expect(targets).toEqual([
            'https://airpodsreplicas.com/version-info/pro?ref=bookmark#airpods-pro-2-v5-3-version-differences',
        ]);
    });
});
