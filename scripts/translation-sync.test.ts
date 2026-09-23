import { describe, expect, test } from 'bun:test';
import {
    collectTranslatableStrings,
    restoreBodyUrls,
    runPool,
    translateBody,
} from '../.github/scripts/translate-docs.mjs';

describe('translation sync', () => {
    test('rejects duplicated, reordered, or missing URL placeholders', () => {
        const urls = ['/useful-apps', '/links/info'];
        expect(() => restoreBodyUrls('U0 U0', urls, 'tr')).toThrow();
        expect(() => restoreBodyUrls('U1 U0', urls, 'tr')).toThrow();
        expect(() => restoreBodyUrls('U0', urls, 'tr')).toThrow();
        expect(restoreBodyUrls('U0 U1', urls, 'tr')).toBe('/tr/useful-apps /tr/links/info');
    });

    test('retries a translation when the model duplicates a URL placeholder', async () => {
        let calls = 0;
        const openai = {
            chat: {
                completions: {
                    create: () => {
                        calls += 1;
                        return Promise.resolve({
                            choices: [
                                {
                                    message: {
                                        content:
                                            calls === 1
                                                ? '[Uygulama](U0) [Tekrar](U0)'
                                                : '[Uygulama](U0)',
                                    },
                                },
                            ],
                        });
                    },
                },
            },
        };
        expect(await translateBody(openai, '[App](/useful-apps)', 'tr', 'Turkish')).toBe(
            '[Uygulama](/tr/useful-apps)'
        );
        expect(calls).toBe(2);
    });

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
