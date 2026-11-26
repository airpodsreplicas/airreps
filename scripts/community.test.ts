import { describe, expect, test } from 'bun:test';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import {
    COMMUNITY_COPY,
    COMMUNITY_LINKS,
    communityPath,
    membersLabel,
    statsLine,
} from '../docs/.vitepress/community';
import config from '../docs/.vitepress/config';
import { outboundTarget } from '../docs/.vitepress/theme/guide-metrics';

const LOCALES = ['da', 'de', 'es', 'fr', 'pl', 'pt', 'ru', 'tr'];
const ALL = ['en', ...LOCALES];
const VARIANTS = ['stuck', 'unit', 'apps', 'ask', 'eq', 'join'];
const docPath = (locale: string, rel: string) =>
    locale === 'en' ? `docs/${rel}` : `docs/${locale}/${rel}`;

// Help and troubleshooting pages and the "Still stuck?" blocks they carry, in
// page order. The same blocks sit at the same place in every translation.
const HELP_PAGES: Record<string, string[]> = {
    'articles/airpods-replicas-on-android.md': ['ask', 'apps'],
    'articles/fake-airpods-on-mac.md': ['ask', 'stuck'],
    'articles/fake-airpods-wont-connect.md': ['stuck', 'unit'],
    'articles/flycc-app-guide.md': ['apps', 'stuck'],
    'articles/how-to-reset-fake-airpods.md': ['stuck', 'unit'],
    'articles/how-to-update-fake-airpods-firmware.md': ['apps', 'stuck'],
    'introduction/connectivity.md': ['stuck'],
    'introduction/sound-quality.md': ['eq'],
    'troubleshooting/AirReps-Incompatibility-with-iCloud.md': ['stuck'],
    'troubleshooting/macOS-volume-slider-fixup.md': ['stuck'],
    'troubleshooting/other-common-bugs.md': ['stuck', 'unit'],
    'useful-apps.md': ['apps'],
};

const blocks = (text: string) =>
    [...text.matchAll(/<CommunityCta(?: variant="([a-z]+)")? \/>/g)].map((m) => m[1] ?? 'stuck');

function markdownFiles(dir: string): string[] {
    return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            return ['.vitepress', 'public'].includes(entry.name) ? [] : markdownFiles(full);
        }
        return entry.name.endsWith('.md') ? [full] : [];
    });
}

describe('community links', () => {
    test('every placement has its own Discord short link, counted as Discord', () => {
        const discord = Object.entries(COMMUNITY_LINKS).filter(([key]) => key !== 'reddit');
        const slugs = discord.map(([, url]) => url.replace('https://airreps.link/', ''));
        expect(slugs.sort()).toEqual(['dgcomm', 'dghelp', 'dghome', 'dgnav', 'dgquiz']);
        for (const [, url] of discord) {
            expect([url, outboundTarget(url)]).toEqual([url, 'discord']);
        }
        expect(outboundTarget(COMMUNITY_LINKS.reddit)).toBe('reddit');
    });

    test('the quiz result line uses the quiz link once, in every language', () => {
        const quiz = readFileSync('docs/.vitepress/components/Quiz.vue', 'utf8');
        expect(quiz.split(COMMUNITY_LINKS.quiz).length - 1).toBe(1);
        expect(quiz.match(/\n {8}askOwners:/g)).toHaveLength(9);
    });

    test('the home hero links its button and line to the home invite', () => {
        for (const locale of ALL) {
            const home = readFileSync(docPath(locale, 'index.md'), 'utf8');
            expect(home).toMatch(
                new RegExp(`link: ['"]?${COMMUNITY_LINKS.home.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]?\\n`)
            );
            // The helpers card leads to the locale's community page.
            expect(home).toContain(`link: ${communityPath(locale)}\n`);
        }
        const layout = readFileSync('docs/.vitepress/theme/Layout.vue', 'utf8');
        expect(layout).toContain('<template #home-hero-actions-after><HomeCommunity /></template>');
        expect(layout).toContain(
            '<template #nav-bar-content-after><CommunityNavPill /></template>'
        );
    });

    test('the nav and sidebar list the community page in every language', () => {
        expect(config.themeConfig?.socialLinks?.[0]?.link).toBe(COMMUNITY_LINKS.nav);
        for (const locale of ALL) {
            const key = locale === 'en' ? 'root' : locale;
            const theme = config.locales?.[key]?.themeConfig;
            const nav = JSON.stringify(theme?.nav);
            const sidebar = JSON.stringify(theme?.sidebar);
            expect(nav).toContain(`"link":"${communityPath(locale)}"`);
            expect(sidebar).toContain(`"link":"${communityPath(locale)}"`);
        }
    });
});

describe('community copy', () => {
    test('every language has every variant and dated counts', () => {
        for (const locale of ALL) {
            const copy = COMMUNITY_COPY[locale];
            expect(copy).toBeTruthy();
            for (const variant of VARIANTS) {
                const block = copy.variants[variant as keyof typeof copy.variants];
                expect([locale, variant, Boolean(block?.title && block.body)]).toEqual([
                    locale,
                    variant,
                    true,
                ]);
            }
            expect(copy.asOf).toContain('2026');
            expect(membersLabel(locale, 73_722)).toContain('73');
            expect(membersLabel(locale, 73_722)).not.toContain('{k}');
            expect(statsLine(locale)).not.toMatch(/[{}]/);
        }
    });

    test('names the right channels and never promises fast human replies', () => {
        for (const locale of ALL) {
            const { variants } = COMMUNITY_COPY[locale];
            for (const variant of ['stuck', 'apps', 'ask']) {
                const body = variants[variant as keyof typeof variants].body;
                expect(body).toContain('#help-and-advice');
                expect(body).toContain('#ai-assistant');
            }
        }
        expect(JSON.stringify(COMMUNITY_COPY.en)).not.toMatch(/helpers? (?:reply|answer)/i);
    });
});

describe('help pages', () => {
    test('carry their blocks in the same places in all nine languages', () => {
        for (const [rel, expected] of Object.entries(HELP_PAGES)) {
            for (const locale of ALL) {
                const file = docPath(locale, rel);
                expect([file, blocks(readFileSync(file, 'utf8'))]).toEqual([file, expected]);
            }
        }
    });

    test('use known variants and at most two blocks per page', () => {
        for (const file of markdownFiles('docs')) {
            const found = blocks(readFileSync(file, 'utf8'));
            expect([file, found.length <= 2]).toEqual([file, true]);
            for (const variant of found) {
                expect([file, VARIANTS.includes(variant)]).toEqual([file, true]);
            }
        }
    });
});

describe('community page', () => {
    test('exists in every language with its join block and FAQ', () => {
        for (const locale of ALL) {
            const file = docPath(locale, 'community.md');
            expect(existsSync(file)).toBe(true);
            const text = readFileSync(file, 'utf8');
            expect(blocks(text)).toEqual(['join']);
            // `::: details Question?` blocks become FAQPage JSON-LD (config.ts).
            expect(text.match(/^::: details .+\?$/gm)?.length).toBe(5);
            expect(text).toMatch(/2026/);
            for (const link of text.matchAll(/\]\((\/[^)]+)\)/g)) {
                const prefix = locale === 'en' ? '/' : `/${locale}/`;
                expect([file, link[1].startsWith(prefix)]).toEqual([file, true]);
            }
        }
    });
});
