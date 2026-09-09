import { describe, expect, test } from 'bun:test';
import { createMarkdownRenderer } from 'vitepress';
import { productFamiliesPlugin } from '../docs/.vitepress/plugins/product-families';

const md = await createMarkdownRenderer(process.cwd(), { config: productFamiliesPlugin });

describe('product family pages', () => {
    test('gives included generations unique anchors below one page title', async () => {
        const html = await md.renderAsync(`<!-- product-family -->

# AirPods Pro

# Buy AirPods Pro 3 Replicas

## Versions and Sellers

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
        expect(html).toMatch(/href="\/version-info\/pro(?:\.html)?#se-overview"/);
        expect(html).toMatch(/href="\/links\/airpods-max(?:\.html)?"/);
        expect(html).toContain('href="https://airreps.link/jenny"');
        expect(html).toContain('href="#airpods-5"');
    });

    test('leaves standalone generation pages intact', async () => {
        const html = await md.renderAsync(`# AirPods Pro 3

[Sellers](/links/airpods-pro-3)

## SE Overview
`);

        expect(html).toContain('<h1 id="airpods-pro-3"');
        expect(html).toContain('<h2 id="se-overview"');
        expect(html).toMatch(/href="\/links\/airpods-pro-3(?:\.html)?"/);
        expect(html).not.toContain('product-family');
    });
});
