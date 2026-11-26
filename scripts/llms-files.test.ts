import { describe, expect, test } from 'bun:test';
import { readdirSync, readFileSync } from 'node:fs';
import {
    ALL_LLMS_FILES,
    LOCALE_LLMS_FILES,
    lastCommitDay,
    newestDay,
    stampLastUpdated,
} from '../docs/.vitepress/llms-files';

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

    test('all source llms files (English and 8 locales) carry the line the build rewrites', () => {
        expect(LOCALE_LLMS_FILES).toHaveLength(8);
        for (const name of ALL_LLMS_FILES) {
            expect(readFileSync(`docs/public/${name}`, 'utf8')).toMatch(
                /^Last updated: \d{4}-\d{2}-\d{2}$/m
            );
        }
    });

    test('stamps both files with the newer day of the pair', () => {
        expect(newestDay(['2026-11-06', '2026-11-18'])).toBe('2026-11-18');
        expect(newestDay(['2026-11-18', null])).toBe('2026-11-18');
        expect(newestDay([null, null])).toBeNull();
    });

    test('all llms source files carry the same hand-written date', () => {
        const dates = ALL_LLMS_FILES.map(
            (name) =>
                readFileSync(`docs/public/${name}`, 'utf8').match(
                    /^Last updated: (\d{4}-\d{2}-\d{2})$/m
                )?.[1]
        );
        expect(new Set(dates).size).toBe(1);
    });

    test('reads a UTC day from git history', () => {
        expect(lastCommitDay(process.cwd(), 'docs/public/llms-full.txt')).toMatch(
            /^\d{4}-\d{2}-\d{2}$/
        );
    });
});

// llms.txt and llms-full.txt are hand-maintained and can drift from the pages
// they summarise. These checks catch mechanical drift automatically.
describe('llms.txt and llms-full.txt match the guide pages', () => {
    const index = readFileSync('docs/public/llms.txt', 'utf8');
    const full = readFileSync('docs/public/llms-full.txt', 'utf8');
    const read = (dir: string) =>
        readdirSync(dir)
            .filter((file) => file.endsWith('.md'))
            .map((file) => ({ file, text: readFileSync(`${dir}/${file}`, 'utf8') }));

    test('llms.txt links to llms-full.txt and covers every English article', () => {
        expect(index).toContain('https://airpodsreplicas.com/llms-full.txt');
        const slugs = readdirSync('docs/articles')
            .filter((file) => file.endsWith('.md') && file !== 'index.md')
            .map((file) => file.slice(0, -'.md'.length));
        expect(slugs.length).toBeGreaterThanOrEqual(22);
        for (const slug of slugs) {
            const url = `https://airpodsreplicas.com/articles/${slug}`;
            expect(index).toContain(url);
            expect(full).toContain(url);
        }
    });

    test('llms-full.txt uses canonical family links rather than noindex redirect stubs', () => {
        for (const stub of [
            'https://airpodsreplicas.com/links/airpods-pro-2',
            'https://airpodsreplicas.com/links/airpods-pro-3',
            'https://airpodsreplicas.com/links/airpods-4',
        ]) {
            expect(full).not.toContain(stub);
        }
    });

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
