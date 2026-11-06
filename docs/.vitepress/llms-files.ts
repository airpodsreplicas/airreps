import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

// llms.txt and llms-full.txt are hand-edited, and their "Last updated:" line
// was not: llms-full.txt said 2026-07-07 while its tables were edited in
// November. Assistants read that line as the freshness of every fact in the
// file, so the build writes the date of the file's newest commit instead.
export const LLMS_FILES = ['llms.txt', 'llms-full.txt'];

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

/** Stamp the copies VitePress placed in the build output. */
export function stampLlmsFiles(outDir: string, repoRoot: string): void {
    for (const name of LLMS_FILES) {
        const built = path.join(outDir, name);
        if (!fs.existsSync(built)) {
            continue;
        }
        const day = lastCommitDay(repoRoot, path.join('docs', 'public', name));
        const text = fs.readFileSync(built, 'utf-8');
        const stamped = stampLastUpdated(text, day);
        if (stamped !== text) {
            fs.writeFileSync(built, stamped);
        }
    }
}
