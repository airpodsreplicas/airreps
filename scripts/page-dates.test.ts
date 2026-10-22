import { describe, expect, test } from 'bun:test';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import {
    createIncludeResolver,
    createPageDates,
    parseGitLog,
    resolveInclude,
} from '../docs/.vitepress/page-dates';

const REPO = '/repo';
const SRC = '/repo/docs';
const LOCALES = ['', 'da/', 'de/', 'es/', 'fr/', 'pl/', 'pt/', 'ru/', 'tr/'];
const FAMILY_PAGES = ['version-info/pro', 'version-info/airpods', 'links/pro', 'links/airpods'];

// In-memory docs tree keyed by docs-relative path.
function readFrom(files: Record<string, string>) {
    return (file: string): string => {
        const source = files[path.relative(SRC, file)];
        if (source === undefined) {
            throw new Error(`ENOENT: ${file}`);
        }
        return source;
    };
}
const include = (spec: string) => `<!-- @include: ${spec} -->`;
const docs = (relative: string) => path.join(SRC, relative);
const ts = (iso: string) => Date.parse(iso);

describe('git dates', () => {
    test('reads each file’s first commit and newest commit from one oldest-first log', () => {
        const dates = parseGitLog(`DATE 2026-09-09T19:58:42+02:00

docs/version-info/pro.md
docs/version-info/airpods-pro-3.md
DATE 2026-10-21T10:51:42+02:00

docs/version-info/airpods-pro-3.md
docs/public/og/version-info/pro.png
`);
        expect(dates.first.get('docs/version-info/airpods-pro-3.md')).toBe(
            '2026-09-09T19:58:42+02:00'
        );
        expect(dates.last.get('docs/version-info/airpods-pro-3.md')).toBe(
            ts('2026-10-21T08:51:42Z')
        );
        expect(dates.last.get('docs/version-info/pro.md')).toBe(ts('2026-09-09T17:58:42Z'));
        expect(dates.last.has('docs/public/og/version-info/pro.png')).toBe(false);
    });
});

describe('include resolution', () => {
    const from = docs('da/version-info/pro.md');

    test('follows VitePress include syntax, including root-relative and partial includes', () => {
        expect(resolveInclude('./airpods-pro-3.md', from, SRC)).toBe(
            docs('da/version-info/airpods-pro-3.md')
        );
        expect(resolveInclude('../links/airpods-4.md', from, SRC)).toBe(
            docs('da/links/airpods-4.md')
        );
        expect(resolveInclude('@/shared/intro.md', from, SRC)).toBe(docs('shared/intro.md'));
        expect(resolveInclude('./part.md#overview', from, SRC)).toBe(
            docs('da/version-info/part.md')
        );
        expect(resolveInclude('./part.md{3,10}', from, SRC)).toBe(docs('da/version-info/part.md'));
    });

    test('ignores includes that escape the docs root or are not markdown', () => {
        for (const spec of ['../../../secrets.md', '@/../outside.md', './snippet.ts', '@', '']) {
            expect(resolveInclude(spec, from, SRC)).toBeNull();
        }
    });

    test('collects nested includes once and stops on cycles, missing files and deep chains', () => {
        const includesOf = createIncludeResolver(
            SRC,
            readFrom({
                'a.md': `${include('./b.md')}\n${include('./page.md')}`,
                'b.md': `${include('./a.md')}\n${include('./missing.md')}`,
                'page.md': `# Page\n\n${include('./a.md')}\n${include('../outside.md')}`,
                ...Object.fromEntries(
                    Array.from({ length: 20 }, (_, i) => [
                        `deep${i}.md`,
                        include(`./deep${i + 1}.md`),
                    ])
                ),
            })
        );
        expect(includesOf(docs('page.md')).sort()).toEqual(
            [docs('a.md'), docs('b.md'), docs('missing.md')].sort()
        );
        expect(includesOf(docs('deep0.md')).length).toBeLessThan(20);
    });
});

describe('include-aware lastUpdated', () => {
    const wrapper = `# AirPods Pro\n\n${include('./airpods-pro-3.md')}\n\n${include('./airpods-pro-2.md')}\n`;
    const dates = createPageDates({
        git: {
            first: new Map([
                ['docs/version-info/pro.md', '2026-09-09T19:58:42+02:00'],
                ['docs/version-info/airpods-pro-3.md', '2025-09-10T12:00:00+02:00'],
            ]),
            last: new Map([
                ['docs/version-info/pro.md', ts('2026-09-09T17:58:42Z')],
                ['docs/version-info/airpods-pro-3.md', ts('2026-10-21T08:51:42Z')],
                ['docs/version-info/airpods-pro-2.md', ts('2026-10-01T09:00:00Z')],
                ['docs/da/version-info/pro.md', ts('2026-09-09T17:58:42Z')],
                ['docs/da/version-info/airpods-pro-3.md', ts('2026-10-18T15:50:07Z')],
                ['docs/da/version-info/airpods-pro-2.md', ts('2026-09-20T09:00:00Z')],
                ['docs/introduction/overview.md', ts('2026-09-17T13:03:37Z')],
            ]),
        },
        read: readFrom({
            'da/version-info/pro.md': wrapper,
            'introduction/overview.md': '# Overview\n',
            'version-info/pro.md': wrapper,
        }),
        repoRoot: REPO,
        srcDir: SRC,
    });

    test('uses the newest included change, reading each locale’s own included files', () => {
        expect(dates.lastUpdated(docs('version-info/pro.md'), ts('2026-09-09T17:58:42Z'))).toBe(
            ts('2026-10-21T08:51:42Z')
        );
        expect(dates.lastUpdated(docs('da/version-info/pro.md'), ts('2026-09-09T17:58:42Z'))).toBe(
            ts('2026-10-18T15:50:07Z')
        );
    });

    test('keeps a newer wrapper date and leaves pages without includes unchanged', () => {
        expect(dates.lastUpdated(docs('version-info/pro.md'), ts('2026-11-01T00:00:00Z'))).toBe(
            ts('2026-11-01T00:00:00Z')
        );
        const own = ts('2026-09-17T13:03:37Z');
        expect(dates.lastUpdated(docs('introduction/overview.md'), own)).toBe(own);
        expect(dates.lastUpdated(docs('introduction/overview.md'), own)).toBe(own);
    });

    test('keeps the wrapper’s own first-publication date', () => {
        expect(dates.published(docs('version-info/pro.md'))).toBe('2026-09-09T19:58:42+02:00');
    });

    test('every real family page resolves its own locale’s generation files', () => {
        const docsDir = path.resolve(import.meta.dir, '../docs');
        const includesOf = createIncludeResolver(docsDir);
        for (const locale of LOCALES) {
            for (const page of FAMILY_PAGES) {
                const file = path.join(docsDir, `${locale}${page}.md`);
                const includes = includesOf(file);
                expect(includes.length).toBeGreaterThan(1);
                for (const included of includes) {
                    expect(path.dirname(included)).toBe(path.dirname(file));
                    expect(existsSync(included)).toBe(true);
                }
            }
        }
    });
});

// Checks the built site, so it runs after `bun run docs:build` (always in CI).
const repoRoot = path.resolve(import.meta.dir, '..');
const dist = path.join(repoRoot, 'docs/.vitepress/dist');
describe.skipIf(!(existsSync(path.join(dist, 'sitemap.xml')) || process.env.CI))(
    'built sitemap and Article dates',
    () => {
        const git = (...args: string[]) =>
            execFileSync('git', args, { cwd: repoRoot, encoding: 'utf-8' }).trim();
        const newestCommit = (...files: string[]) =>
            new Date(Number(git('log', '-1', '--format=%at', '--', ...files)) * 1000).toISOString();
        const lastmod = () =>
            new Map(
                [
                    ...readFileSync(path.join(dist, 'sitemap.xml'), 'utf-8').matchAll(
                        /<loc>https:\/\/airpodsreplicas\.com\/([^<]*)<\/loc><lastmod>([^<]+)<\/lastmod>/g
                    ),
                ].map(([, url, date]) => [url, date])
            );
        const mainNode = (page: string): Record<string, string> =>
            JSON.parse(
                readFileSync(path.join(dist, `${page}.html`), 'utf-8').match(
                    /<script type="application\/ld\+json">(\{"@context":"https:\/\/schema\.org","@graph".*?)<\/script>/
                )?.[1] ?? '{"@graph":[]}'
            )['@graph'].find((node: Record<string, string>) => node.dateModified);

        test('family pages carry their newest included change in every locale', () => {
            const sitemap = lastmod();
            const includesOf = createIncludeResolver(path.join(repoRoot, 'docs'));
            for (const locale of LOCALES) {
                for (const page of FAMILY_PAGES) {
                    const file = `docs/${locale}${page}.md`;
                    const includes = includesOf(path.join(repoRoot, file)).map((included) =>
                        path.relative(repoRoot, included)
                    );
                    const expected = newestCommit(file, ...includes);
                    const node = mainNode(`${locale}${page}`);
                    expect(sitemap.get(`${locale}${page}`)).toBe(expected);
                    expect(node.dateModified).toBe(expected);
                    if (node['@type'] === 'Article') {
                        expect(node.datePublished).toBe(
                            git('log', '--reverse', '--format=%aI', '--', file).split('\n')[0]
                        );
                    }
                }
            }
        });

        test('pages without includes keep their own commit date', () => {
            const sitemap = lastmod();
            for (const page of ['introduction/overview', 'da/introduction/overview', 'quiz']) {
                expect(sitemap.get(page)).toBe(newestCommit(`docs/${page}.md`));
            }
            expect(sitemap.get('articles/')).toBe(newestCommit('docs/articles/index.md'));
        });
    }
);
