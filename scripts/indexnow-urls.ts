// Canonical URLs whose rendered page changed between two commits, one per
// line, for the IndexNow ping in .github/workflows/deploy.yml:
//
//   bun scripts/indexnow-urls.ts <before-sha> <after-sha>
//
// Uses only Node builtins plus the dependency-free route/include helpers, so
// the workflow can run it without installing packages.
//
// Only page content counts. Config, theme and component changes under
// docs/.vitepress can touch metadata on every page, but pinging all ~430 URLs
// for a template tweak is noise; crawlers pick those up on their normal
// recrawl. Static files in docs/public are not pages.
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { createIncludeResolver } from '../docs/.vitepress/page-dates';
import { productDestination } from '../docs/.vitepress/product-routes';

const ORIGIN = 'https://airpodsreplicas.com';

// Markdown files VitePress builds into pages (repo-relative paths).
export function isPage(file: string): boolean {
    if (!(file.startsWith('docs/') && file.endsWith('.md'))) {
        return false;
    }
    const segments = file.split('/').slice(1);
    return segments[0] !== 'public' && !segments.some((segment) => segment.startsWith('.'));
}

// Sitemap-style canonical URL: index.md is its directory with a trailing slash,
// other pages drop .md, and generation pages (noindex redirect stubs) resolve
// to their family page without the section fragment or any query.
export function pageUrl(file: string): string {
    const route = `/${file
        .slice('docs/'.length)
        .replace(/(^|\/)index\.md$/, '$1')
        .replace(/\.md$/, '')}`;
    const destination = productDestination(route);
    return new URL(destination ? destination.replace(/[?#].*$/, '') : route, ORIGIN).href;
}

// Changed pages (deleted ones too, so engines recrawl the 404 and drop them)
// plus every current page that includes a changed file at any depth.
export function changedPageUrls(
    changed: string[],
    pages: string[],
    includesOf: (page: string) => string[]
): string[] {
    const changedFiles = new Set(changed);
    const urls = new Set(changed.filter(isPage).map(pageUrl));
    for (const page of pages) {
        if (includesOf(page).some((file) => changedFiles.has(file))) {
            urls.add(pageUrl(page));
        }
    }
    return [...urls].sort();
}

// Force pushes and new branches report a null/unknown before SHA; fall back to
// the head commit's own changes.
export function diffBase(before: string, after: string, exists: (rev: string) => boolean): string {
    return before && exists(before) ? before : `${after}^`;
}

export function collectChangedUrls(repoRoot: string, before: string, after: string): string[] {
    const git = (...args: string[]) =>
        execFileSync('git', args, {
            cwd: repoRoot,
            encoding: 'utf-8',
            maxBuffer: 64 * 1024 * 1024,
        });
    const exists = (rev: string) => {
        try {
            execFileSync('git', ['cat-file', '-e', `${rev}^{commit}`], {
                cwd: repoRoot,
                stdio: 'ignore',
            });
            return true;
        } catch {
            return false;
        }
    };
    const list = (output: string) => output.split('\0').filter(Boolean);
    // --no-renames reports a rename as delete + add, so the old URL is submitted.
    const changed = list(
        git(
            'diff',
            '--name-only',
            '--no-renames',
            '-z',
            diffBase(before, after, exists),
            after,
            '--',
            'docs/'
        )
    );
    // Current pages and their includes come from the checked-out tree (the
    // workflow checks out <after>).
    const pages = list(git('ls-files', '-z', '--', 'docs/')).filter(isPage);
    const resolveIncludes = createIncludeResolver(path.join(repoRoot, 'docs'));
    const includesOf = (page: string) =>
        resolveIncludes(path.join(repoRoot, page)).map((file) =>
            path.relative(repoRoot, file).split(path.sep).join('/')
        );
    return changedPageUrls(changed, pages, includesOf);
}

if (import.meta.main) {
    const [before = '', after = 'HEAD'] = process.argv.slice(2);
    const urls = collectChangedUrls(path.resolve(import.meta.dir, '..'), before, after);
    for (const url of urls) {
        console.log(url);
    }
}
