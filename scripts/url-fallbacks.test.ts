import { describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import {
    fixMistypedPath,
    injectNotFoundFix,
    notFoundFixScript,
    pagesNeedingSlashStub,
    slashRedirectHtml,
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

describe('404 fallback for mistyped URLs', () => {
    test('strips text glued after a closing parenthesis and .md suffixes', () => {
        expect(fixMistypedPath('/links/info)de')).toBe('/links/info');
        expect(fixMistypedPath('/links/info)./n')).toBe('/links/info');
        expect(fixMistypedPath('/links/info)tuy%E1%BB%83n')).toBe('/links/info');
        expect(fixMistypedPath('/index.md')).toBe('/');
        expect(fixMistypedPath('/ordering/how-to-buy.md')).toBe('/ordering/how-to-buy');
        expect(fixMistypedPath('/da/index.md')).toBe('/da/');
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
