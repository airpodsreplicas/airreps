import type { ArticleSummary } from './articles';

// Guide pages → the articles that answer their natural follow-up questions.
// Keys are English page paths (no locale prefix, no .md); values are article
// slugs. Every locale shares this map, so translated pages link to their own
// translated articles without copying anything into 200 Markdown files.
// Articles keep their own hand-written "Related" sections and are not listed.
export const RELATED_GUIDES: Record<string, string[]> = {
    'introduction/anc-explained': ['airpods-pro-2-vs-airpods-pro-3', 'airpods-max-v3-vs-v3p'],
    'introduction/battery-life': ['airpods-replicas-vs-real', 'fake-airpods-vs-budget-earbuds'],
    'introduction/build-quality': ['can-people-tell-airpods-are-fake', 'airpods-max-v3-vs-v3p'],
    'introduction/connectivity': [
        'do-fake-airpods-work-with-new-iphone',
        'airpods-replicas-on-android',
        'fake-airpods-on-mac',
        'fake-airpods-wont-connect',
    ],
    'introduction/dictionary': ['how-to-spot-fake-airpods', 'airpods-pro-2-vs-airpods-pro-3'],
    'introduction/features': ['airpods-replicas-vs-real', 'airpods-pro-2-vs-airpods-pro-3'],
    'introduction/overview': [
        'best-airpods-replicas-under-50',
        'are-airpods-replicas-safe',
        'how-to-spot-fake-airpods',
    ],
    'introduction/packaging': [
        'airpods-replica-customs-and-vat',
        'can-people-tell-airpods-are-fake',
    ],
    'introduction/sellers': ['are-airpods-replicas-safe', 'airpods-replica-customs-and-vat'],
    'introduction/sound-quality': ['flycc-app-guide', 'airpods-replicas-vs-real'],
    'links/airpods': ['best-airpods-replicas-under-50', 'airpods-replicas-on-android'],
    'links/airpods-max': ['airpods-max-v3-vs-v3p', 'airpods-max-dupe'],
    'links/info': [
        'airpods-pro-2-vs-airpods-pro-3',
        'are-airpods-replicas-safe',
        'airpods-replica-customs-and-vat',
    ],
    'links/pro': ['airpods-pro-2-vs-airpods-pro-3', 'best-airpods-replicas-under-50'],
    'ordering/how-to-buy': ['airpods-replica-customs-and-vat', 'are-airpods-replicas-safe'],
    'ordering/kakobuy': ['airpods-replica-customs-and-vat', 'are-airpods-replicas-safe'],
    'ordering/qc-lc': ['how-to-spot-fake-airpods', 'can-people-tell-airpods-are-fake'],
    quiz: ['airpods-pro-2-vs-airpods-pro-3', 'best-airpods-replicas-under-50'],
    'troubleshooting/AirReps-Incompatibility-with-iCloud': [
        'fake-airpods-on-mac',
        'do-fake-airpods-work-with-new-iphone',
    ],
    'troubleshooting/macOS-volume-slider-fixup': ['fake-airpods-on-mac'],
    'troubleshooting/other-common-bugs': [
        'fake-airpods-wont-connect',
        'how-to-reset-fake-airpods',
        'how-to-update-fake-airpods-firmware',
    ],
    'useful-apps': [
        'flycc-app-guide',
        'how-to-update-fake-airpods-firmware',
        'airpods-replicas-on-android',
    ],
    'version-info/airpods': [
        'best-airpods-replicas-under-50',
        'airpods-replicas-on-android',
        'do-fake-airpods-work-with-new-iphone',
    ],
    'version-info/airpods-max': ['airpods-max-v3-vs-v3p', 'airpods-max-dupe'],
    'version-info/general': [
        'airpods-pro-2-vs-airpods-pro-3',
        'best-airpods-replicas-under-50',
        'airpods-replicas-vs-real',
    ],
    'version-info/pro': [
        'airpods-pro-2-vs-airpods-pro-3',
        'fake-airpods-on-mac',
        'how-to-update-fake-airpods-firmware',
    ],
};

export const RELATED_HEADINGS: Record<string, string> = {
    da: 'Relaterede guides',
    de: 'Passende Ratgeber',
    en: 'Related guides',
    es: 'Guías relacionadas',
    fr: 'Guides associés',
    pl: 'Powiązane poradniki',
    pt: 'Guias relacionados',
    ru: 'Полезные статьи',
    tr: 'İlgili rehberler',
};

const LOCALES = ['da', 'de', 'es', 'fr', 'pl', 'pt', 'ru', 'tr'];

/** Splits 'da/useful-apps.md' into its locale and English page path. */
export function pageKey(relativePath: string): { locale: string; key: string } {
    const path = relativePath.replace(/\.md$/, '');
    const [first, ...rest] = path.split('/');
    if (LOCALES.includes(first)) {
        return { key: rest.join('/'), locale: first };
    }
    return { key: path, locale: 'en' };
}

/**
 * The related articles for a page, in the map's order, using the page's own
 * translations. A slug without a translation in that locale is skipped rather
 * than linking a reader to another language.
 */
export function relatedGuides(relativePath: string, articles: ArticleSummary[]): ArticleSummary[] {
    const { locale, key } = pageKey(relativePath);
    const slugs = RELATED_GUIDES[key] ?? [];
    const prefix = locale === 'en' ? '/articles/' : `/${locale}/articles/`;
    return slugs.flatMap((slug) => {
        const article = articles.find((a) => a.url === `${prefix}${slug}`);
        return article ? [article] : [];
    });
}

export function relatedHeading(relativePath: string): string {
    return RELATED_HEADINGS[pageKey(relativePath).locale] ?? RELATED_HEADINGS.en;
}
