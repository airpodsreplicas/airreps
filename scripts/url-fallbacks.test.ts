import { describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import {
    fixMistypedPath,
    injectNotFoundFix,
    notFoundFixScript,
    pagesNeedingSlashStub,
    SECTION_START_PAGES,
    slashRedirectHtml,
    writeSectionRootRedirects,
    writeTrailingSlashRedirects,
} from '../docs/.vitepress/url-fallbacks';

function fakeDist(): string {
    const dir = mkdtempSync(path.join(tmpdir(), 'airreps-dist-'));
    const files = [
        '404.html',
        'index.html',
        'useful-apps.html',
        'introduction/overview.html',
        'da/index.html',
        'da/ordering/kakobuy.html',
        'articles/index.html',
        'version-info/airpods-pro-3.html',
        'version-info/airpods-pro-3/index.html',
        'assets/chunk.html',
    ];
    for (const file of files) {
        mkdirSync(path.dirname(path.join(dir, file)), { recursive: true });
        writeFileSync(
            path.join(dir, file),
            '<!doctype html><html><head></head><body></body></html>'
        );
    }
    return dir;
}

describe('trailing-slash stubs', () => {
    test('cover real pages only, never homes, indexes, 404, assets or existing stubs', () => {
        const dir = fakeDist();
        try {
            expect(pagesNeedingSlashStub(dir)).toEqual([
                '/da/ordering/kakobuy',
                '/introduction/overview',
                '/useful-apps',
            ]);
        } finally {
            rmSync(dir, { force: true, recursive: true });
        }
    });

    test('write a canonical forward that keeps query and hash', () => {
        const dir = fakeDist();
        try {
            writeTrailingSlashRedirects(dir);
            const stub = readFileSync(path.join(dir, 'useful-apps/index.html'), 'utf8');
            expect(stub).toBe(slashRedirectHtml('/useful-apps'));
            expect(stub).toContain(
                '<link rel="canonical" href="https://airpodsreplicas.com/useful-apps">'
            );
            expect(stub).toContain(
                'location.replace("/useful-apps"+location.search+location.hash)'
            );
            expect(stub).toContain('<meta http-equiv="refresh" content="0; url=/useful-apps">');
            // The real page next to the stub is untouched.
            expect(readFileSync(path.join(dir, 'useful-apps.html'), 'utf8')).not.toContain(
                'refresh'
            );
            // Running twice changes nothing: the new directories block a second stub.
            expect(pagesNeedingSlashStub(dir)).toEqual([]);
        } finally {
            rmSync(dir, { force: true, recursive: true });
        }
    });
});

describe('section root forwards', () => {
    test('forward each section folder to its start page, per locale, without clobbering', () => {
        const dir = mkdtempSync(path.join(tmpdir(), 'airreps-dist-'));
        try {
            const pages = [
                ...Object.values(SECTION_START_PAGES).map((p) => `${p}.html`),
                'de/links/info.html',
                'articles/index.html',
            ];
            for (const file of pages) {
                mkdirSync(path.dirname(path.join(dir, file)), { recursive: true });
                writeFileSync(path.join(dir, file), '<!doctype html>');
            }
            // An existing index page is never replaced.
            mkdirSync(path.join(dir, 'ordering'), { recursive: true });
            writeFileSync(path.join(dir, 'ordering/index.html'), 'real');

            expect(writeSectionRootRedirects(dir)).toEqual([
                '/introduction/',
                '/links/',
                '/troubleshooting/',
                '/version-info/',
                '/de/links/',
            ]);
            expect(readFileSync(path.join(dir, 'links/index.html'), 'utf8')).toBe(
                slashRedirectHtml('/links/info')
            );
            expect(readFileSync(path.join(dir, 'de/links/index.html'), 'utf8')).toBe(
                slashRedirectHtml('/de/links/info')
            );
            expect(readFileSync(path.join(dir, 'ordering/index.html'), 'utf8')).toBe('real');
            // No start page in that locale, no forward.
            expect(existsSync(path.join(dir, 'de/version-info/index.html'))).toBe(false);
            expect(writeSectionRootRedirects(dir)).toEqual([]);
        } finally {
            rmSync(dir, { force: true, recursive: true });
        }
    });
});

describe('404 fallback for mistyped URLs', () => {
    test('strips text glued after a closing parenthesis and .md suffixes', () => {
        expect(fixMistypedPath('/links/info)de')).toBe('/links/info');
        expect(fixMistypedPath('/links/info)./n')).toBe('/links/info');
        expect(fixMistypedPath('/links/info)tuy%E1%BB%83n')).toBe('/links/info');
        expect(fixMistypedPath('/index.md')).toBe('/');
        expect(fixMistypedPath('/ordering/how-to-buy.md')).toBe('/ordering/how-to-buy');
        expect(fixMistypedPath('/da/index.md')).toBe('/da/');
    });

    test('maps old /links/info/<page> relative-link leftovers to the links page', () => {
        expect(fixMistypedPath('/links/info/pro')).toBe('/links/pro');
        expect(fixMistypedPath('/de/links/info/pro')).toBe('/de/links/pro');
        expect(fixMistypedPath('/es/links/info/airpods-max/')).toBe('/es/links/airpods-max');
        expect(fixMistypedPath('/links/info/airpods-pro-2)de')).toBe('/links/airpods-pro-2');
        expect(fixMistypedPath(fixMistypedPath('/de/links/info/pro') ?? '')).toBeNull();
    });

    test('leaves everything else on the 404 page, so it can never loop', () => {
        for (const p of [
            '/',
            '/links/',
            '/troubleshooting',
            '/%E6%89%BE%E5%88%B0%E6%8C%87%E5%8D%97',
            '/links/info',
            '/%',
        ]) {
            expect(fixMistypedPath(p)).toBeNull();
        }
        for (const p of ['/links/info)de', '/index.md']) {
            expect(fixMistypedPath(fixMistypedPath(p) ?? '')).toBeNull();
        }
    });

    test('ships the same function in the 404 page head, once', () => {
        const dir = fakeDist();
        try {
            expect(injectNotFoundFix(dir)).toBe(true);
            expect(injectNotFoundFix(dir)).toBe(false);
            const html = readFileSync(path.join(dir, '404.html'), 'utf8');
            expect(html.startsWith('<!doctype html><html><head><script data-url-fix>')).toBe(true);
            expect(html).toContain(notFoundFixScript());
            expect(existsSync(path.join(dir, '404/index.html'))).toBe(false);
        } finally {
            rmSync(dir, { force: true, recursive: true });
        }
    });

    test('the inline script redirects in a browser-like scope', () => {
        const replaced: string[] = [];
        const location = {
            hash: '#faq',
            pathname: '/links/info)de',
            replace: (url: string) => replaced.push(url),
            search: '?a=1',
        };
        new Function('location', notFoundFixScript())(location);
        expect(replaced).toEqual(['/links/info?a=1#faq']);
    });
});
