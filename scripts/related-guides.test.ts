import { describe, expect, test } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import {
    pageKey,
    RELATED_GUIDES,
    RELATED_HEADINGS,
    relatedGuides,
    relatedHeading,
} from '../docs/.vitepress/related-guides';

const LOCALES = ['da', 'de', 'es', 'fr', 'pl', 'pt', 'ru', 'tr'];

describe('related guides map', () => {
    test('every key is a real English guide page and never an article', () => {
        for (const key of Object.keys(RELATED_GUIDES)) {
            expect(existsSync(`docs/${key}.md`)).toBe(true);
            expect(key.startsWith('articles/')).toBe(false);
        }
    });

    test('every linked article exists in English and all eight translations', () => {
        for (const slugs of Object.values(RELATED_GUIDES)) {
            expect(slugs.length).toBeGreaterThan(0);
            expect(new Set(slugs).size).toBe(slugs.length);
            for (const slug of slugs) {
                expect(existsSync(`docs/articles/${slug}.md`)).toBe(true);
                for (const locale of LOCALES) {
                    expect(existsSync(`docs/${locale}/articles/${slug}.md`)).toBe(true);
                }
            }
        }
    });

    test('has a heading for every locale', () => {
        for (const locale of ['en', ...LOCALES]) {
            expect(RELATED_HEADINGS[locale]).toBeTruthy();
        }
    });

    test('is mounted before the doc footer on every guide page', () => {
        const layout = readFileSync('docs/.vitepress/theme/Layout.vue', 'utf8');
        expect(layout).toContain('<template #doc-footer-before><RelatedGuides /></template>');
    });
});

describe('related guide lookup', () => {
    const articles = [
        { category: '', description: 'EN', title: 'FlyCC', url: '/articles/flycc-app-guide' },
        { category: '', description: 'DA', title: 'FlyCC da', url: '/da/articles/flycc-app-guide' },
        {
            category: '',
            description: 'DA',
            title: 'Firmware da',
            url: '/da/articles/how-to-update-fake-airpods-firmware',
        },
    ];

    test('splits locale prefixes from English page keys', () => {
        expect(pageKey('useful-apps.md')).toEqual({ key: 'useful-apps', locale: 'en' });
        expect(pageKey('da/version-info/pro.md')).toEqual({
            key: 'version-info/pro',
            locale: 'da',
        });
    });

    test('links translated pages to their own translated articles, in map order', () => {
        expect(relatedGuides('da/useful-apps.md', articles).map((a) => a.url)).toEqual([
            '/da/articles/flycc-app-guide',
            '/da/articles/how-to-update-fake-airpods-firmware',
        ]);
        expect(relatedHeading('da/useful-apps.md')).toBe('Relaterede guides');
    });

    test('skips missing translations instead of linking another language', () => {
        expect(relatedGuides('useful-apps.md', articles).map((a) => a.url)).toEqual([
            '/articles/flycc-app-guide',
        ]);
        expect(relatedGuides('fr/useful-apps.md', articles)).toEqual([]);
    });

    test('pages outside the map get nothing', () => {
        expect(relatedGuides('articles/flycc-app-guide.md', articles)).toEqual([]);
        expect(relatedGuides('index.md', articles)).toEqual([]);
    });
});
