import { describe, expect, test } from 'bun:test';
import { collectTranslatableStrings, runPool } from '../.github/scripts/translate-docs.mjs';

describe('translation sync', () => {
    test('translates article labels while retaining machine-facing metadata', () => {
        const refs = collectTranslatableStrings({
            articlesAllLabel: 'All articles',
            articlesHeading: 'Guides & articles',
            articlesReadLabel: 'Read',
            articlesSubtitle: 'Community guides',
            category: 'Buying',
            hero: { actions: [{ link: '/introduction/overview', text: 'Read the guide' }] },
            layout: 'page',
            order: 1,
        });
        expect(Object.fromEntries(refs.map(({ path, value }) => [path.join('.'), value]))).toEqual({
            articlesAllLabel: 'All articles',
            articlesHeading: 'Guides & articles',
            articlesReadLabel: 'Read',
            articlesSubtitle: 'Community guides',
            category: 'Buying',
            'hero.actions.0.text': 'Read the guide',
        });
    });

    test('finishes other translations but rejects an incomplete batch', async () => {
        const completed: string[] = [];
        await expect(
            runPool(
                [
                    () => {
                        completed.push('da');
                        return Promise.resolve({ changed: true });
                    },
                    () => Promise.reject(new Error('translation unavailable')),
                    () => {
                        completed.push('de');
                        return Promise.resolve({ changed: true });
                    },
                ],
                2
            )
        ).rejects.toThrow('refusing to publish a partial sync');
        expect(completed.sort()).toEqual(['da', 'de']);
    });
});
