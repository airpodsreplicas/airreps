import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { articlesForLocale, transformArticles } from '../docs/.vitepress/articles';

describe('translated article indexes', () => {
    const articles = transformArticles([
        { frontmatter: { order: 1, title: 'First' }, url: '/articles/first' },
        { frontmatter: { order: 2, title: 'Anden' }, url: '/da/articles/second' },
        { frontmatter: { order: 1, title: 'Første' }, url: '/da/articles/first' },
        { frontmatter: { order: 1, title: 'Erste' }, url: '/de/articles/first' },
        { frontmatter: { title: 'Artikler' }, url: '/da/articles/' },
    ]);

    test('shows translated titles in order and preserves actual localized URLs', () => {
        expect(
            articlesForLocale(articles, '/da').map(({ title, url }) => ({ title, url }))
        ).toEqual([
            { title: 'Første', url: '/da/articles/first' },
            { title: 'Anden', url: '/da/articles/second' },
        ]);
        expect(articlesForLocale(articles, '').map((article) => article.title)).toEqual(['First']);
    });

    test('does not fabricate links when a translation is unavailable', () => {
        expect(articlesForLocale(articles, '/fr')).toEqual([]);
    });

    test('source landing pages can be translated without copying relative module imports', () => {
        for (const file of ['docs/index.md', 'docs/articles/index.md']) {
            const source = readFileSync(file, 'utf8');
            expect(source).toContain('<Articles variant=');
            expect(source).not.toContain('<script');
            expect(source).not.toContain('index.data');
        }
    });
});
