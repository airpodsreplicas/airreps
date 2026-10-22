import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

// Kept free of non-builtin imports: scripts/indexnow-urls.ts runs this in the
// deploy workflow without installing dependencies.

export interface GitDates {
    // Repo-relative markdown path → author date of the commit that added it.
    first: Map<string, string>;
    // Repo-relative markdown path → newest author timestamp (ms). Same source
    // VitePress uses for lastUpdated, so pages without includes are unchanged.
    last: Map<string, number>;
}

// Parse `git log --reverse --name-only --format="DATE %aI"`. Oldest commit
// first, so a path's first sighting is its creation and its last the newest
// edit.
export function parseGitLog(output: string): GitDates {
    const first = new Map<string, string>();
    const last = new Map<string, number>();
    let currentDate = '';
    for (const rawLine of output.split('\n')) {
        const line = rawLine.trim();
        if (!line) {
            continue;
        }
        if (line.startsWith('DATE ')) {
            currentDate = line.slice(5);
        } else if (line.endsWith('.md')) {
            if (!first.has(line)) {
                first.set(line, currentDate);
            }
            last.set(line, Date.parse(currentDate));
        }
    }
    return { first, last };
}

// Single git call for the whole build, then lookups by repo-relative path.
export function readGitDates(repoRoot: string): GitDates {
    try {
        return parseGitLog(
            execFileSync(
                'git',
                ['log', '--reverse', '--name-only', '--format=DATE %aI', '--', 'docs/'],
                { cwd: repoRoot, encoding: 'utf-8', maxBuffer: 64 * 1024 * 1024 }
            )
        );
    } catch {
        // git unavailable (e.g. shallow clone with no history) — fall back silently
        return { first: new Map(), last: new Map() };
    }
}

// VitePress include syntax: `<!-- @include: ./file.md -->`, optionally with a
// `#region` or `{start,end}` suffix; `@/` (or `@`) resolves from the docs root.
const INCLUDE_RE = /<!--\s*@include:\s*(.*?)\s*-->/g;
const RANGE_RE = /\{(\d*),(\d*)\}$/;
const REGION_RE = /#([^\s{]+)$/;
const MAX_INCLUDE_DEPTH = 8;

// Absolute path of an included markdown file, or null when it is not markdown
// or would resolve outside the docs root.
export function resolveInclude(spec: string, fromFile: string, srcDir: string): string | null {
    const target = spec.replace(RANGE_RE, '').replace(REGION_RE, '');
    if (!target) {
        return null;
    }
    const resolved = target.startsWith('@')
        ? path.join(srcDir, target.slice(/[\\/]/.test(target[1] ?? '') ? 2 : 1))
        : path.join(path.dirname(fromFile), target);
    const relative = path.relative(srcDir, resolved);
    const outside =
        !relative ||
        relative === '..' ||
        relative.startsWith(`..${path.sep}`) ||
        path.isAbsolute(relative);
    return outside || path.extname(resolved) !== '.md' ? null : resolved;
}

// Returns a memoized lookup of every markdown file a page pulls in through
// (nested) includes. Each file is read at most once; cycles and runaway nesting
// stop rather than recurse forever.
export function createIncludeResolver(
    srcDir: string,
    read: (file: string) => string = (file) => fs.readFileSync(file, 'utf-8')
): (file: string) => string[] {
    const direct = new Map<string, string[]>();
    const directIncludes = (file: string): string[] => {
        let includes = direct.get(file);
        if (!includes) {
            includes = [];
            try {
                for (const [, spec] of read(file).matchAll(INCLUDE_RE)) {
                    const target = resolveInclude(spec, file, srcDir);
                    if (target) {
                        includes.push(target);
                    }
                }
            } catch {
                // Missing include: VitePress reports it; it has no date to add.
            }
            direct.set(file, includes);
        }
        return includes;
    };

    return (file) => {
        const found = new Set<string>();
        const visit = (current: string, depth: number) => {
            if (depth >= MAX_INCLUDE_DEPTH) {
                return;
            }
            for (const target of directIncludes(current)) {
                if (target !== file && !found.has(target)) {
                    found.add(target);
                    visit(target, depth + 1);
                }
            }
        };
        visit(file, 0);
        return [...found];
    };
}

export function createPageDates(options: {
    repoRoot: string;
    srcDir: string;
    git?: GitDates;
    read?: (file: string) => string;
}) {
    const { repoRoot, srcDir } = options;
    const git = options.git ?? readGitDates(repoRoot);
    const includesOf = createIncludeResolver(srcDir, options.read);
    const repoPath = (file: string) => path.relative(repoRoot, file).split(path.sep).join('/');

    return {
        // Newest commit across the page (`own`, VitePress's timestamp for the
        // file itself) and everything it includes.
        lastUpdated: (file: string, own: number): number =>
            Math.max(
                own,
                ...includesOf(file).map((include) => git.last.get(repoPath(include)) ?? 0)
            ),
        // Article.datePublished: when the page's own file was first committed.
        published: (file: string): string | undefined => git.first.get(repoPath(file)),
    };
}
