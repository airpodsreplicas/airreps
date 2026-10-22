// Link to the guide's privacy page, shared by the site footer (config) and the
// small footer line under sidebar pages (theme), where VitePress hides the
// site footer.
const PRIVACY_LABELS: Record<string, string> = {
    da: 'Privatliv',
    de: 'Datenschutz',
    en: 'Privacy',
    es: 'Privacidad',
    fr: 'Confidentialité',
    pl: 'Prywatność',
    pt: 'Privacidade',
    ru: 'Конфиденциальность',
    tr: 'Gizlilik',
};

/** Accepts a locale key ('da') or VitePress's 'root' for English. */
export function privacyLink(locale: string): { link: string; text: string } {
    const key = Object.hasOwn(PRIVACY_LABELS, locale) ? locale : 'en';
    return {
        link: key === 'en' ? '/privacy' : `/${key}/privacy`,
        text: PRIVACY_LABELS[key],
    };
}
