import { describe, expect, test } from 'bun:test';
import { readdirSync, readFileSync } from 'node:fs';
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

// llms-full.txt is hand-maintained and had drifted from the pages it
// summarises (no Pro 3 SE, "iOS 26", a June price date). These checks catch the
// mechanical part of that drift; wording is still reviewed by hand.
describe('llms-full.txt matches the guide pages', () => {
    const full = readFileSync('docs/public/llms-full.txt', 'utf8');
    const read = (dir: string) =>
        readdirSync(dir)
            .filter((file) => file.endsWith('.md'))
            .map((file) => ({ file, text: readFileSync(`${dir}/${file}`, 'utf8') }));

    test('lists every seller website link from the links pages', () => {
        const missing: string[] = [];
        for (const { file, text } of read('docs/links')) {
            for (const [, url] of text.matchAll(/<a href="(https:\/\/[^"]+)">Website<\/a>/g)) {
                if (!full.includes(url)) {
                    missing.push(`${file}: ${url}`);
                }
            }
        }
        expect(missing).toEqual([]);
    });

    test('names the same iOS version as the version pages', () => {
        const versionPages = read('docs/version-info')
            .map(({ text }) => text)
            .join('\n');
        const onPages = new Set([...versionPages.matchAll(/\biOS (\d{2})\b/g)].map((m) => m[1]));
        const inLlms = new Set([...full.matchAll(/\biOS (\d{2})\b/g)].map((m) => m[1]));
        expect(onPages.size).toBe(1);
        expect([...inLlms]).toEqual([...onPages]);
    });

    test('dates its price list the day the version pages were priced', () => {
        const month = (name: string) =>
            String(new Date(`${name} 1, 2000`).getMonth() + 1).padStart(2, '0');
        const pricedOn = /charged on (\d{1,2}) ([A-Z][a-z]+) (\d{4})/g;
        const days = new Set<string>();
        for (const { text } of read('docs/version-info')) {
            for (const [, day, name, year] of text.matchAll(pricedOn)) {
                days.add(`${year}-${month(name)}-${day.padStart(2, '0')}`);
            }
        }
        expect(days.size).toBe(1);
        expect(full).toContain(`what the sellers charged on ${[...days][0]}`);
    });
});
