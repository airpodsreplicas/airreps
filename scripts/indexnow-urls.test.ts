import { describe, expect, test } from 'bun:test';
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { changedPageUrls, collectChangedUrls, diffBase, isPage, pageUrl } from './indexnow-urls';

const ORIGIN = 'https://airpodsreplicas.com';

// Flattened include graph, as createIncludeResolver returns it.
const INCLUDES: Record<string, string[]> = {
    'docs/articles/guide.md': [
        'docs/.vitepress/partials/intro.md',
        'docs/.vitepress/partials/legal.md',
    ],
    'docs/da/version-info/pro.md': [
        'docs/da/version-info/airpods-pro-3.md',
        'docs/da/version-info/airpods-pro-2.md',
    ],
    'docs/version-info/pro.md': [
        'docs/version-info/airpods-pro-3.md',
        'docs/version-info/airpods-pro-2.md',
    ],
};
const PAGES = [
    ...Object.keys(INCLUDES),
    ...Object.values(INCLUDES)
        .flat()
        .filter((file) => isPage(file)),
    'docs/index.md',
    'docs/introduction/overview.md',
];
const urls = (changed: string[]) =>
    changedPageUrls(changed, PAGES, (page) => INCLUDES[page] ?? []).map((url) =>
        url.slice(ORIGIN.length)
    );

describe('IndexNow URLs', () => {
    test('index pages become their directory URL, other pages their clean URL', () => {
        expect(pageUrl('docs/index.md')).toBe(`${ORIGIN}/`);
        expect(pageUrl('docs/da/index.md')).toBe(`${ORIGIN}/da/`);
        expect(pageUrl('docs/articles/index.md')).toBe(`${ORIGIN}/articles/`);
        expect(pageUrl('docs/introduction/overview.md')).toBe(`${ORIGIN}/introduction/overview`);
        expect(pageUrl('docs/links/airpods-max.md')).toBe(`${ORIGIN}/links/airpods-max`);
    });

    test('a generation page is submitted as its canonical family page', () => {
        expect(pageUrl('docs/version-info/airpods-pro-3.md')).toBe(`${ORIGIN}/version-info/pro`);
        expect(pageUrl('docs/ru/links/airpods-4.md')).toBe(`${ORIGIN}/ru/links/airpods`);
        expect(urls(['docs/version-info/airpods-pro-3.md'])).toEqual(['/version-info/pro']);
    });

    test('a translated include only refreshes that locale’s family page', () => {
        expect(urls(['docs/da/version-info/airpods-pro-2.md'])).toEqual(['/da/version-info/pro']);
    });

    test('changing any included file refreshes the pages that include it, deduped', () => {
        expect(
            urls([
                'docs/.vitepress/partials/legal.md',
                'docs/version-info/pro.md',
                'docs/version-info/airpods-pro-3.md',
                'docs/version-info/airpods-pro-2.md',
            ])
        ).toEqual(['/articles/guide', '/version-info/pro']);
    });

    test('deleted pages are submitted so engines can drop the 404', () => {
        expect(urls(['docs/articles/removed.md', 'docs/da/index.md'])).toEqual([
            '/articles/removed',
            '/da/',
        ]);
    });

    test('config, theme, static files and other repo files are not submitted', () => {
        const internals = [
            'docs/.vitepress/config.ts',
            'docs/.vitepress/theme/index.ts',
            'docs/.vitepress/components/Quiz.vue',
            'docs/public/llms-full.txt',
            'docs/public/notes.md',
            'README.md',
            'scripts/indexnow-urls.ts',
        ];
        expect(internals.filter(isPage)).toEqual([]);
        expect(urls(internals)).toEqual([]);
    });

    test('null or unknown before SHAs fall back to the head commit', () => {
        const known = (rev: string) => rev === 'abc123';
        expect(diffBase('abc123', 'def456', known)).toBe('abc123');
        expect(diffBase('', 'def456', known)).toBe('def456^');
        expect(diffBase('0000000000000000000000000000000000000000', 'def456', known)).toBe(
            'def456^'
        );
    });

    test('reads edits, renames and deletions from real git history', () => {
        const repo = mkdtempSync(path.join(tmpdir(), 'indexnow-'));
        const git = (...args: string[]) =>
            execFileSync(
                'git',
                [
                    '-c',
                    'user.name=test',
                    '-c',
                    'user.email=test@example.com',
                    '-c',
                    'commit.gpgsign=false',
                    ...args,
                ],
                { cwd: repo, encoding: 'utf-8' }
            ).trim();
        const write = (file: string, content: string) => {
            mkdirSync(path.dirname(path.join(repo, file)), { recursive: true });
            writeFileSync(path.join(repo, file), content);
        };
        try {
            git('init', '-q');
            write('docs/index.md', '# Home\n');
            write(
                'docs/version-info/pro.md',
                '# AirPods Pro\n\n<!-- @include: ./airpods-pro-3.md -->\n'
            );
            write('docs/version-info/airpods-pro-3.md', '# AirPods Pro 3\n');
            write('docs/articles/old-name.md', '# Article\n');
            write('docs/articles/retired.md', '# Retired\n');
            write('docs/.vitepress/config.ts', 'export default {};\n');
            write('docs/public/llms.txt', 'v1\n');
            git('add', '.');
            git('commit', '-qm', 'before');
            const before = git('rev-parse', 'HEAD');

            write('docs/version-info/airpods-pro-3.md', '# AirPods Pro 3\n\nUpdated.\n');
            git('mv', 'docs/articles/old-name.md', 'docs/articles/new-name.md');
            git('rm', '-q', 'docs/articles/retired.md');
            write('docs/.vitepress/config.ts', 'export default { title: "x" };\n');
            write('docs/public/llms.txt', 'v2\n');
            git('commit', '-qam', 'after');
            const after = git('rev-parse', 'HEAD');

            const expected = [
                '/articles/new-name',
                '/articles/old-name',
                '/articles/retired',
                '/version-info/pro',
            ].map((route) => `${ORIGIN}${route}`);
            expect(collectChangedUrls(repo, before, after)).toEqual(expected);
            // A new branch or force push reports a null before SHA.
            for (const unknown of ['0000000000000000000000000000000000000000', '']) {
                expect(collectChangedUrls(repo, unknown, after)).toEqual(expected);
            }
        } finally {
            rmSync(repo, { force: true, recursive: true });
        }
    });
});
