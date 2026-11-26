import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

// llms.txt, llms-full.txt and the localized llms.txt files are hand-edited,
// and their "Last updated:" line was not always bumped on every edit.
// Assistants read that line as the freshness of every fact in the file, so the
// build writes the date of the newest commit touching the llms set instead.
export const LLMS_FILES = ['llms.txt', 'llms-full.txt'];
export const LOCALE_LLMS_FILES = ['da', 'de', 'es', 'fr', 'pl', 'pt', 'ru', 'tr'].map(
    (locale) => `${locale}/llms.txt`
);
export const ALL_LLMS_FILES = [...LLMS_FILES, ...LOCALE_LLMS_FILES];

const LAST_UPDATED_RE = /^Last updated: (\d{4}-\d{2}-\d{2})$/m;

/** UTC day of the newest commit touching `file`, or null without git history. */
export function lastCommitDay(repoRoot: string, file: string): string | null {
    try {
        const iso = execFileSync('git', ['log', '-1', '--format=%aI', '--', file], {
            cwd: repoRoot,
            encoding: 'utf-8',
        }).trim();
        return iso ? new Date(iso).toISOString().slice(0, 10) : null;
    } catch {
        return null;
    }
}

/**
 * Replace the first "Last updated: YYYY-MM-DD" line with `day`. A later date
 * written by hand wins, and text without the line is returned unchanged.
 */
export function stampLastUpdated(text: string, day: string | null): string {
    const match = text.match(LAST_UPDATED_RE);
    if (!(match && day) || match[1] >= day) {
        return text;
    }
    return text.replace(LAST_UPDATED_RE, `Last updated: ${day}`);
}

/** The latest of the given days (YYYY-MM-DD sorts as text), or null if none. */
export function newestDay(days: Array<string | null>): string | null {
    return days.reduce<string | null>(
        (newest, day) => (day && (!newest || day > newest) ? day : newest),
        null
    );
}

/**
 * Stamp the copies VitePress placed in the build output. Both files describe
 * the same site and llms.txt points to llms-full.txt, so both carry the newest
 * commit day of the pair: llms.txt said 2026-11-06 while llms-full.txt said
 * 2026-11-18.
 */
export function stampLlmsFiles(outDir: string, repoRoot: string): void {
    const day = newestDay(
        ALL_LLMS_FILES.map((name) => lastCommitDay(repoRoot, path.join('docs', 'public', name)))
    );
    for (const name of ALL_LLMS_FILES) {
        const built = path.join(outDir, name);
        if (!fs.existsSync(built)) {
            continue;
        }
        const text = fs.readFileSync(built, 'utf-8');
        const stamped = stampLastUpdated(text, day);
        if (stamped !== text) {
            fs.writeFileSync(built, stamped);
        }
    }
}
