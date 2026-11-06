import fs from 'node:fs';
import path from 'node:path';

// Search Console (indexing report, 23 Oct 2026) listed 104 URLs as 404. About
// 45 are real pages with a trailing slash (/introduction/overview/,
// /ordering/kakobuy/, /useful-apps/ ...), and a dozen are links written in
// other languages with text glued on (/links/info)de, /links/info)tuyển).
// GitHub Pages serves `page.html` for /page and `page/index.html` for /page/
// when both exist (the product-family stubs already rely on this), so each
// page gets a slash stub that forwards to its canonical URL.

const SITE = 'https://airpodsreplicas.com';

export function slashRedirectHtml(target: string): string {
    const js = JSON.stringify(target);
    return `<!doctype html><html><head><meta charset="utf-8"><meta name="robots" content="noindex, follow"><link rel="canonical" href="${SITE}${target}"><script>location.replace(${js}+location.search+location.hash)</script><meta http-equiv="refresh" content="0; url=${target}"></head><body><a href="${target}">${target}</a></body></html>`;
}

/** Every built page `a/b.html` without an `a/b/` directory, as its clean URL `/a/b`. */
export function pagesNeedingSlashStub(outDir: string): string[] {
    const urls: string[] = [];
    const walk = (dir: string): void => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
            const full = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                if (entry.name !== 'assets') {
                    walk(full);
                }
                continue;
            }
            if (!entry.name.endsWith('.html') || entry.name === 'index.html') {
                continue;
            }
            if (path.relative(outDir, full) === '404.html') {
                continue;
            }
            if (fs.existsSync(full.slice(0, -'.html'.length))) {
                continue;
            }
            urls.push(
                `/${path.relative(outDir, full).slice(0, -'.html'.length).split(path.sep).join('/')}`
            );
        }
    };
    walk(outDir);
    return urls.sort();
}

export function writeTrailingSlashRedirects(outDir: string): string[] {
    const urls = pagesNeedingSlashStub(outDir);
    for (const url of urls) {
        const file = path.join(outDir, url.slice(1), 'index.html');
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, slashRedirectHtml(url));
    }
    return urls;
}

/**
 * Where a mistyped guide URL should go, or null to keep the 404. Only strips
 * text after a `)` and a `.md`/`index.md` suffix, so the result never matches
 * again and the 404 page cannot loop. Runs in the browser on the 404 page.
 */
export function fixMistypedPath(pathname: string): string | null {
    let p = pathname;
    try {
        p = decodeURIComponent(pathname);
    } catch {
        // Keep the raw path when it is not valid percent-encoding.
    }
    const fixed = p
        .replace(/\).*$/, '')
        .replace(/(^|\/)index\.md$/, '$1')
        .replace(/\.md$/, '');
    return fixed && fixed !== p ? fixed : null;
}

export function notFoundFixScript(): string {
    return `(function(){var f=(${fixMistypedPath.toString()})(location.pathname);if(f){location.replace(f+location.search+location.hash)}})()`;
}

/** Add the mistyped-URL fix to the start of the built 404 page's head. */
export function injectNotFoundFix(outDir: string): boolean {
    const file = path.join(outDir, '404.html');
    if (!fs.existsSync(file)) {
        return false;
    }
    const html = fs.readFileSync(file, 'utf-8');
    if (html.includes('data-url-fix')) {
        return false;
    }
    const tagged = html.replace(
        '<head>',
        `<head><script data-url-fix>${notFoundFixScript()}</script>`
    );
    fs.writeFileSync(file, tagged);
    return tagged !== html;
}
