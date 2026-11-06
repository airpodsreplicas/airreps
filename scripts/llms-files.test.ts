import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { LLMS_FILES, lastCommitDay, stampLastUpdated } from '../docs/.vitepress/llms-files';

describe('llms.txt freshness line', () => {
    const text = '# AirReps\n\nLast updated: 2026-07-07\n\nBody\n';

    test('moves an older date forward to the newest commit day', () => {
        expect(stampLastUpdated(text, '2026-11-06')).toBe(
            '# AirReps\n\nLast updated: 2026-11-06\n\nBody\n'
        );
    });

    test('keeps a later hand-written date and the text around it', () => {
        expect(stampLastUpdated(text, '2026-07-01')).toBe(text);
        expect(stampLastUpdated(text, '2026-07-07')).toBe(text);
    });

    test('leaves text alone without git history or without the line', () => {
        expect(stampLastUpdated(text, null)).toBe(text);
        expect(stampLastUpdated('# AirReps\n', '2026-11-06')).toBe('# AirReps\n');
    });

    test('both source files carry the line the build rewrites', () => {
        for (const name of LLMS_FILES) {
            expect(readFileSync(`docs/public/${name}`, 'utf8')).toMatch(
                /^Last updated: \d{4}-\d{2}-\d{2}$/m
            );
        }
    });

    test('reads a UTC day from git history', () => {
        expect(lastCommitDay(process.cwd(), 'docs/public/llms-full.txt')).toMatch(
            /^\d{4}-\d{2}-\d{2}$/
        );
    });
});
