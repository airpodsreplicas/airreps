import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { imageSize } from 'image-size';
import { type DefaultTheme, defineConfig } from 'vitepress';
import { productFamiliesPlugin } from './plugins/product-families';
import { redirectPlugin, writeProductRedirects } from './plugins/redirect';
import { productDestination, productRedirectScript } from './product-routes';

const configDir = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(configDir, '..');
const repoRoot = path.resolve(docsDir, '..');
const ogImagesDir = path.join(docsDir, 'public', 'og');

// Intrinsic dimensions for content images, read once per file at build and
// cached. Injected into <img> tags that lack width/height so the browser can
// reserve layout space before the image loads (avoids CLS). Only local
// /public assets are resolved; remote URLs, data URIs, and missing files
// return null and are skipped.
const imgDimensionCache = new Map<string, { w: number; h: number } | null>();
function getImageDimensions(src: string): { w: number; h: number } | null {
    if (imgDimensionCache.has(src)) {
        return imgDimensionCache.get(src) ?? null;
    }
    let dims: { w: number; h: number } | null = null;
    if (src.startsWith('/') && !src.startsWith('//')) {
        const [withoutQuery] = src.split('?');
        const [clean] = withoutQuery.split('#');
        try {
            const { width, height } = imageSize(
                fs.readFileSync(path.join(docsDir, 'public', clean))
            );
            if (width && height) {
                dims = { h: height, w: width };
            }
        } catch {
            dims = null;
        }
    }
    imgDimensionCache.set(src, dims);
    return dims;
}

// First-commit dates per markdown file, used for Article.datePublished so it
// stops being equal to dateModified on every redeploy. Computed once at module
// load — single git call, then a lookup table keyed by repo-relative path.
function buildFirstCommitDates(): Map<string, string> {
    const map = new Map<string, string>();
    try {
        const output = execSync('git log --reverse --name-only --format="DATE %aI" -- docs/', {
            cwd: repoRoot,
            encoding: 'utf-8',
            maxBuffer: 64 * 1024 * 1024,
        });
        let currentDate = '';
        for (const rawLine of output.split('\n')) {
            const line = rawLine.trim();
            if (!line) {
                continue;
            }
            if (line.startsWith('DATE ')) {
                currentDate = line.slice(5);
            } else if (line.endsWith('.md') && !map.has(line)) {
                map.set(line, currentDate);
            }
        }
    } catch {
        // git unavailable (e.g. shallow clone with no history) — fall back silently
    }
    return map;
}
const firstCommitDates = buildFirstCommitDates();

// Family pages use VitePress includes to share the generation content. Read
// those same sources when extracting seller and FAQ metadata for the page.
function readPageContent(absPath: string): string {
    return fs
        .readFileSync(absPath, 'utf-8')
        .replace(/<!--\s*@include:\s*(\.\/[\w-]+\.md)\s*-->/g, (_, relative: string) =>
            fs.readFileSync(path.resolve(path.dirname(absPath), relative), 'utf-8')
        );
}

// Pull Q&A pairs out of `::: details Question?` blocks in a page's markdown
// source. Only blocks whose title ends with `?` count — that excludes the
// generic collapsible content (e.g. troubleshooting side-effect notes).
function extractFaqsFromMarkdown(absPath: string): Array<{ q: string; a: string }> {
    let content: string;
    try {
        content = readPageContent(absPath);
    } catch {
        return [];
    }
    content = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');

    const faqs: Array<{ q: string; a: string }> = [];
    const regex = /^:::+\s*details\s+(.+?)\r?\n([\s\S]*?)\r?\n:::+\s*$/gm;
    let match: RegExpExecArray | null = regex.exec(content);
    while (match !== null) {
        const title = match[1].trim();
        if (title.endsWith('?')) {
            const body = match[2]
                .replace(/^:::+.*$/gm, '')
                .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
                .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
                .replace(/\*\*([^*]+)\*\*/g, '$1')
                .replace(/\*([^*]+)\*/g, '$1')
                .replace(/`([^`]+)`/g, '$1')
                .replace(/<[^>]+>/g, '')
                .replace(/&amp;/g, '&')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/\s+/g, ' ')
                .trim();
            if (body) {
                faqs.push({ a: body, q: title });
            }
        }
        match = regex.exec(content);
    }
    return faqs;
}

// For /links/* pages: which trusted sellers actually have at least one link on
// the page. Drives the CollectionPage ItemList so it doesn't advertise a seller
// (e.g. HiCity on the AirPods 3 page, which lists none) that has no products
// there. A seller's slugs (product, Weidian, Alibaba) only appear in its column
// when that column has entries, so slug presence == seller present.
const LINKS_PAGE_SELLERS: Array<{ key: string; name: string; url: string }> = [
    { key: 'earhive', name: 'Earhive', url: 'https://earhive.com' },
    { key: 'hicity', name: 'HiCity', url: 'https://hicitypods.com' },
    { key: 'jenny', name: 'Jenny', url: 'https://jenny.airreps.info' },
];
function getSellersOnLinksPage(absPath: string): Array<{ name: string; url: string }> {
    let content: string;
    try {
        content = readPageContent(absPath);
    } catch {
        return [];
    }
    const present = new Set<string>();
    const matches = content.match(/airreps\.link\/([A-Za-z0-9_-]+)/g) ?? [];
    for (const raw of matches) {
        const slug = raw.slice('airreps.link/'.length);
        if (slug.startsWith('hc') || slug.startsWith('hicity')) {
            present.add('hicity');
        } else if (slug.startsWith('j')) {
            present.add('jenny');
        } else if (slug.startsWith('e')) {
            present.add('earhive');
        }
    }
    return LINKS_PAGE_SELLERS.filter((s) => present.has(s.key)).map(({ name, url }) => ({
        name,
        url,
    }));
}

// Shared sidebar structure - used to generate locale-specific sidebars
function getSidebar(lang: string): DefaultTheme.SidebarItem[] {
    const t = translations[lang] || translations.en;

    return [
        {
            collapsed: false,
            items: [
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/overview`,
                    text: t.sidebar.overview,
                },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/sellers`,
                    text: t.sidebar.sellers,
                },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/packaging`,
                    text: t.sidebar.packaging,
                },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/connectivity`,
                    text: t.sidebar.connectivity,
                },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/battery-life`,
                    text: t.sidebar.batteryLife,
                },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/features`,
                    text: t.sidebar.features,
                },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/anc-explained`,
                    text: t.sidebar.ancExplained,
                },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/build-quality`,
                    text: t.sidebar.buildQuality,
                },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/sound-quality`,
                    text: t.sidebar.soundQuality,
                },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/dictionary`,
                    text: t.sidebar.dictionary,
                },
            ],
            text: t.sidebar.ultimateGuide,
        },
        {
            collapsed: true,
            items: [
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/version-info/general`,
                    text: t.sidebar.general,
                },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/version-info/airpods`,
                    text: 'AirPods',
                },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/version-info/pro`,
                    text: 'AirPods Pro',
                },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/version-info/airpods-max`,
                    text: 'AirPods Max',
                },
            ],
            text: t.sidebar.versionInfo,
        },
        {
            collapsed: true,
            items: [
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/ordering/how-to-buy`,
                    text: t.sidebar.howToBuy,
                },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/ordering/kakobuy`,
                    text: t.sidebar.kakobuy,
                },
                { link: `${lang === 'en' ? '' : `/${lang}`}/ordering/qc-lc`, text: t.sidebar.qcLc },
            ],
            text: t.sidebar.ordering,
        },
        {
            collapsed: false,
            items: [
                { link: `${lang === 'en' ? '' : `/${lang}`}/links/info`, text: t.sidebar.info },
                { link: `${lang === 'en' ? '' : `/${lang}`}/links/airpods`, text: 'AirPods' },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/links/pro`,
                    text: 'AirPods Pro',
                },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/links/airpods-max`,
                    text: 'AirPods Max',
                },
            ],
            text: t.sidebar.links,
        },
        {
            collapsed: true,
            items: [
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/troubleshooting/AirReps-Incompatibility-with-iCloud`,
                    text: t.sidebar.icloudIncompatibility,
                },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/troubleshooting/other-common-bugs`,
                    text: t.sidebar.otherBugs,
                },
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/troubleshooting/macOS-volume-slider-fixup`,
                    text: t.sidebar.macosVolume,
                },
            ],
            text: t.sidebar.troubleshooting,
        },
        {
            items: [
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/useful-apps`,
                    text: t.sidebar.usefulApps,
                },
            ],
        },
        {
            items: [
                {
                    link: `${lang === 'en' ? '' : `/${lang}`}/contributing`,
                    text: t.sidebar.contributing,
                },
            ],
        },
    ];
}

function getNav(lang: string): DefaultTheme.NavItem[] {
    const t = translations[lang] || translations.en;
    const prefix = lang === 'en' ? '' : `/${lang}`;

    return [
        { link: `${prefix}/`, text: t.nav.home },
        { link: `${prefix}/introduction/overview`, text: t.nav.ultimateGuide },
        { link: `${prefix}/quiz`, text: t.nav.quiz },
        { link: `${prefix}/links/info`, text: t.nav.links },
    ];
}

// Translation strings for each locale
const translations: Record<
    string,
    {
        nav: { home: string; ultimateGuide: string; links: string; quiz: string };
        sidebar: {
            ultimateGuide: string;
            overview: string;
            sellers: string;
            packaging: string;
            connectivity: string;
            batteryLife: string;
            features: string;
            ancExplained: string;
            buildQuality: string;
            soundQuality: string;
            dictionary: string;
            versionInfo: string;
            general: string;
            ordering: string;
            howToBuy: string;
            kakobuy: string;
            qcLc: string;
            links: string;
            info: string;
            troubleshooting: string;
            icloudIncompatibility: string;
            otherBugs: string;
            macosVolume: string;
            usefulApps: string;
            contributing: string;
        };
        footer: { message: string; copyright: string };
        editLink: string;
    }
> = {
    da: {
        editLink: 'Rediger denne side på GitHub',
        footer: {
            copyright: `© Copyright ${new Date().getFullYear()} AirReps. Alle Rettigheder Forbeholdes.`,
            message: 'Udgivet under GPLv3 Licensen.',
        },
        nav: { home: 'Hjem', links: 'Links', quiz: 'Quiz', ultimateGuide: 'Ultimativ Guide' },
        sidebar: {
            ancExplained: 'ANC Forklaret',
            batteryLife: 'Batterilevetid',
            buildQuality: 'Byggekvalitet',
            connectivity: 'Forbindelse',
            contributing: 'Bidrag',
            dictionary: 'Ordbog',
            features: 'Funktioner',
            general: 'Generelt',
            howToBuy: 'Sådan Køber Du',
            icloudIncompatibility: 'iCloud Inkompatibilitet',
            info: 'Info',
            kakobuy: 'KakoBuy Guide',
            links: 'Links',
            macosVolume: 'Lydstyrke på MacOS',
            ordering: 'Bestilling',
            otherBugs: 'Andre Almindelige Fejl',
            overview: 'Oversigt',
            packaging: 'Emballage',
            qcLc: 'QC & LC',
            sellers: 'Sælgere',
            soundQuality: 'Lydkvalitet',
            troubleshooting: 'Fejlfinding',
            ultimateGuide: 'Ultimativ Guide',
            usefulApps: 'Nyttige Apps',
            versionInfo: 'Versionsinfo',
        },
    },
    de: {
        editLink: 'Diese Seite auf GitHub bearbeiten',
        footer: {
            copyright: `© Copyright ${new Date().getFullYear()} AirReps. Alle Rechte vorbehalten.`,
            message: 'Veröffentlicht unter der GPLv3-Lizenz.',
        },
        nav: {
            home: 'Startseite',
            links: 'Links',
            quiz: 'Quiz',
            ultimateGuide: 'Ultimativer Leitfaden',
        },
        sidebar: {
            ancExplained: 'ANC Erklärt',
            batteryLife: 'Akkulaufzeit',
            buildQuality: 'Verarbeitungsqualität',
            connectivity: 'Konnektivität',
            contributing: 'Mitwirken',
            dictionary: 'Wörterbuch',
            features: 'Funktionen',
            general: 'Allgemein',
            howToBuy: 'Wie man kauft',
            icloudIncompatibility: 'iCloud-Inkompatibilität',
            info: 'Info',
            kakobuy: 'KakoBuy Anleitung',
            links: 'Links',
            macosVolume: 'Lautstärkeregler auf MacOS',
            ordering: 'Bestellung',
            otherBugs: 'Andere häufige Fehler',
            overview: 'Überblick',
            packaging: 'Verpackung',
            qcLc: 'QC & LC',
            sellers: 'Verkäufer',
            soundQuality: 'Klangqualität',
            troubleshooting: 'Fehlerbehebung',
            ultimateGuide: 'Ultimativer Leitfaden',
            usefulApps: 'Nützliche Apps',
            versionInfo: 'Versionsinfo',
        },
    },
    en: {
        editLink: 'Edit this page on GitHub',
        footer: {
            copyright: `© Copyright ${new Date().getFullYear()} AirReps. All Rights Reserved.`,
            message: 'Released under the GPLv3 License.',
        },
        nav: { home: 'Home', links: 'Links', quiz: 'Quiz', ultimateGuide: 'Ultimate Guide' },
        sidebar: {
            ancExplained: 'ANC Explained',
            batteryLife: 'Battery Life',
            buildQuality: 'Build Quality',
            connectivity: 'Connectivity',
            contributing: 'Contributing',
            dictionary: 'Dictionary',
            features: 'Features',
            general: 'General',
            howToBuy: 'How to buy',
            icloudIncompatibility: 'AirReps Incompatibility with iCloud',
            info: 'Info',
            kakobuy: 'KakoBuy Guide',
            links: 'Links',
            macosVolume: 'Volume Slider is Ineffective on MacOS',
            ordering: 'Ordering',
            otherBugs: 'Other Common Bugs',
            overview: 'Overview',
            packaging: 'Packaging',
            qcLc: 'QC & LC',
            sellers: 'Sellers',
            soundQuality: 'Sound Quality',
            troubleshooting: 'Troubleshooting',
            ultimateGuide: 'Ultimate Guide',
            usefulApps: 'Useful Apps',
            versionInfo: 'Version Info',
        },
    },
    es: {
        editLink: 'Editar esta página en GitHub',
        footer: {
            copyright: `© Copyright ${new Date().getFullYear()} AirReps. Todos los Derechos Reservados.`,
            message: 'Publicado bajo la Licencia GPLv3.',
        },
        nav: { home: 'Inicio', links: 'Enlaces', quiz: 'Quiz', ultimateGuide: 'Guía Definitiva' },
        sidebar: {
            ancExplained: 'ANC Explicado',
            batteryLife: 'Duración de Batería',
            buildQuality: 'Calidad de Construcción',
            connectivity: 'Conectividad',
            contributing: 'Contribuir',
            dictionary: 'Diccionario',
            features: 'Características',
            general: 'General',
            howToBuy: 'Cómo Comprar',
            icloudIncompatibility: 'Incompatibilidad con iCloud',
            info: 'Info',
            kakobuy: 'Guía KakoBuy',
            links: 'Enlaces',
            macosVolume: 'Control de Volumen en MacOS',
            ordering: 'Pedidos',
            otherBugs: 'Otros Errores Comunes',
            overview: 'Descripción General',
            packaging: 'Embalaje',
            qcLc: 'QC & LC',
            sellers: 'Vendedores',
            soundQuality: 'Calidad de Sonido',
            troubleshooting: 'Solución de Problemas',
            ultimateGuide: 'Guía Definitiva',
            usefulApps: 'Apps Útiles',
            versionInfo: 'Info de Versión',
        },
    },
    fr: {
        editLink: 'Modifier cette page sur GitHub',
        footer: {
            copyright: `© Copyright ${new Date().getFullYear()} AirReps. Tous Droits Réservés.`,
            message: 'Publié sous Licence GPLv3.',
        },
        nav: { home: 'Accueil', links: 'Liens', quiz: 'Quiz', ultimateGuide: 'Guide Ultime' },
        sidebar: {
            ancExplained: 'ANC Expliqué',
            batteryLife: 'Autonomie',
            buildQuality: 'Qualité de Fabrication',
            connectivity: 'Connectivité',
            contributing: 'Contribuer',
            dictionary: 'Dictionnaire',
            features: 'Fonctionnalités',
            general: 'Général',
            howToBuy: 'Comment Acheter',
            icloudIncompatibility: 'Incompatibilité avec iCloud',
            info: 'Info',
            kakobuy: 'Guide KakoBuy',
            links: 'Liens',
            macosVolume: 'Volume sur MacOS',
            ordering: 'Commandes',
            otherBugs: 'Autres Bugs Courants',
            overview: 'Aperçu',
            packaging: 'Emballage',
            qcLc: 'QC & LC',
            sellers: 'Vendeurs',
            soundQuality: 'Qualité Audio',
            troubleshooting: 'Dépannage',
            ultimateGuide: 'Guide Ultime',
            usefulApps: 'Apps Utiles',
            versionInfo: 'Info Version',
        },
    },
    pl: {
        editLink: 'Edytuj tę stronę na GitHub',
        footer: {
            copyright: `© Copyright ${new Date().getFullYear()} AirReps. Wszelkie Prawa Zastrzeżone.`,
            message: 'Wydane na licencji GPLv3.',
        },
        nav: {
            home: 'Strona główna',
            links: 'Linki',
            quiz: 'Quiz',
            ultimateGuide: 'Kompletny Przewodnik',
        },
        sidebar: {
            ancExplained: 'ANC Wyjaśnione',
            batteryLife: 'Żywotność Baterii',
            buildQuality: 'Jakość Wykonania',
            connectivity: 'Łączność',
            contributing: 'Współtworzenie',
            dictionary: 'Słownik',
            features: 'Funkcje',
            general: 'Ogólne',
            howToBuy: 'Jak Kupić',
            icloudIncompatibility: 'Niekompatybilność z iCloud',
            info: 'Info',
            kakobuy: 'Poradnik KakoBuy',
            links: 'Linki',
            macosVolume: 'Głośność na MacOS',
            ordering: 'Zamawianie',
            otherBugs: 'Inne Częste Błędy',
            overview: 'Przegląd',
            packaging: 'Opakowanie',
            qcLc: 'QC & LC',
            sellers: 'Sprzedawcy',
            soundQuality: 'Jakość Dźwięku',
            troubleshooting: 'Rozwiązywanie Problemów',
            ultimateGuide: 'Kompletny Przewodnik',
            usefulApps: 'Przydatne Aplikacje',
            versionInfo: 'Info o Wersjach',
        },
    },
    pt: {
        editLink: 'Editar esta página no GitHub',
        footer: {
            copyright: `© Copyright ${new Date().getFullYear()} AirReps. Todos os Direitos Reservados.`,
            message: 'Lançado sob a Licença GPLv3.',
        },
        nav: { home: 'Início', links: 'Links', quiz: 'Quiz', ultimateGuide: 'Guia Definitivo' },
        sidebar: {
            ancExplained: 'ANC Explicado',
            batteryLife: 'Duração da Bateria',
            buildQuality: 'Qualidade de Construção',
            connectivity: 'Conectividade',
            contributing: 'Contribuir',
            dictionary: 'Dicionário',
            features: 'Recursos',
            general: 'Geral',
            howToBuy: 'Como Comprar',
            icloudIncompatibility: 'Incompatibilidade com iCloud',
            info: 'Info',
            kakobuy: 'Guia KakoBuy',
            links: 'Links',
            macosVolume: 'Controle de Volume no MacOS',
            ordering: 'Pedidos',
            otherBugs: 'Outros Bugs Comuns',
            overview: 'Visão Geral',
            packaging: 'Embalagem',
            qcLc: 'QC & LC',
            sellers: 'Vendedores',
            soundQuality: 'Qualidade de Som',
            troubleshooting: 'Solução de Problemas',
            ultimateGuide: 'Guia Definitivo',
            usefulApps: 'Apps Úteis',
            versionInfo: 'Info de Versão',
        },
    },
    ru: {
        editLink: 'Редактировать на GitHub',
        footer: {
            copyright: `© Copyright ${new Date().getFullYear()} AirReps. Все Права Защищены.`,
            message: 'Выпущено под лицензией GPLv3.',
        },
        nav: {
            home: 'Главная',
            links: 'Ссылки',
            quiz: 'Тест',
            ultimateGuide: 'Полное Руководство',
        },
        sidebar: {
            ancExplained: 'ANC Объяснение',
            batteryLife: 'Время Работы Батареи',
            buildQuality: 'Качество Сборки',
            connectivity: 'Подключение',
            contributing: 'Участие',
            dictionary: 'Словарь',
            features: 'Функции',
            general: 'Общее',
            howToBuy: 'Как Купить',
            icloudIncompatibility: 'Несовместимость с iCloud',
            info: 'Информация',
            kakobuy: 'Гид по KakoBuy',
            links: 'Ссылки',
            macosVolume: 'Громкость на MacOS',
            ordering: 'Заказ',
            otherBugs: 'Другие Частые Ошибки',
            overview: 'Обзор',
            packaging: 'Упаковка',
            qcLc: 'QC и LC',
            sellers: 'Продавцы',
            soundQuality: 'Качество Звука',
            troubleshooting: 'Устранение Неполадок',
            ultimateGuide: 'Полное Руководство',
            usefulApps: 'Полезные Приложения',
            versionInfo: 'Информация о Версиях',
        },
    },
    tr: {
        editLink: "Bu sayfayı GitHub'da düzenle",
        footer: {
            copyright: `© Telif Hakkı ${new Date().getFullYear()} AirReps. Tüm Hakları Saklıdır.`,
            message: 'GPLv3 Lisansı altında yayınlanmıştır.',
        },
        nav: {
            home: 'Ana Sayfa',
            links: 'Bağlantılar',
            quiz: 'Test',
            ultimateGuide: 'Kapsamlı Rehber',
        },
        sidebar: {
            ancExplained: 'ANC Açıklaması',
            batteryLife: 'Pil Ömrü',
            buildQuality: 'Yapı Kalitesi',
            connectivity: 'Bağlantı',
            contributing: 'Katkıda Bulunma',
            dictionary: 'Sözlük',
            features: 'Özellikler',
            general: 'Genel',
            howToBuy: 'Nasıl Satın Alınır',
            icloudIncompatibility: 'iCloud Uyumsuzluğu',
            info: 'Bilgi',
            kakobuy: 'KakoBuy Rehberi',
            links: 'Bağlantılar',
            macosVolume: 'MacOS Ses Kontrolü',
            ordering: 'Sipariş',
            otherBugs: 'Diğer Yaygın Hatalar',
            overview: 'Genel Bakış',
            packaging: 'Paketleme',
            qcLc: 'QC & LC',
            sellers: 'Satıcılar',
            soundQuality: 'Ses Kalitesi',
            troubleshooting: 'Sorun Giderme',
            ultimateGuide: 'Kapsamlı Rehber',
            usefulApps: 'Faydalı Uygulamalar',
            versionInfo: 'Sürüm Bilgisi',
        },
    },
};

// Locales that have a translated copy of the docs (root '/' is English).
// Used for sitemap hreflang and for stripping the locale prefix off paths
// in transformHead. Order is preserved where it shows up in user-facing
// outputs (sitemap, OG locale list).
const SUPPORTED_LOCALES = ['es', 'pt', 'da', 'fr', 'pl', 'ru', 'de', 'tr'] as const;

// Reddit SVG icon
const redditIcon =
    '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Reddit</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/',
    buildEnd: (site) => writeProductRedirects(site.outDir),
    cleanUrls: true,
    description: 'A community for the discussion and exploration of AirPods clones.',

    head: [
        ['link', { crossorigin: '', href: 'https://cdn.jsdelivr.net', rel: 'preconnect' }],
        ['link', { href: '/favicon.ico', rel: 'icon', sizes: 'any' }],
        ['link', { href: '/favicon-32x32.png', rel: 'icon', sizes: '32x32', type: 'image/png' }],
        ['link', { href: '/favicon-16x16.png', rel: 'icon', sizes: '16x16', type: 'image/png' }],
        ['link', { href: '/apple-touch-icon.png', rel: 'apple-touch-icon', sizes: '180x180' }],
        ['link', { href: '/site.webmanifest', rel: 'manifest' }],
        ['meta', { content: '#EC645D', name: 'theme-color' }],
        ['meta', { content: 'yes', name: 'mobile-web-app-capable' }],
        ['meta', { content: 'yes', name: 'apple-mobile-web-app-capable' }],
        ['meta', { content: 'black', name: 'apple-mobile-web-app-status-bar-style' }],
        ['meta', { content: 'AirReps Ultimate Guide', name: 'apple-mobile-web-app-title' }],
        ['meta', { content: 'AirReps Ultimate Guide', name: 'application-name' }],
        ['meta', { content: '#000000', name: 'msapplication-TileColor' }],
        ['meta', { content: 'width=device-width, initial-scale=1', name: 'viewport' }],
        ['meta', { content: 'AirReps', name: 'author' }],
    ],

    lastUpdated: true,

    // Locale configuration for i18n
    locales: {
        da: {
            description: 'Et fællesskab for diskussion og udforskning af AirPods-kloner.',
            label: 'Dansk',
            lang: 'da-DK',
            themeConfig: {
                docFooter: { next: 'Næste side', prev: 'Forrige side' },
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.da.editLink,
                },
                footer: {
                    copyright: translations.da.footer.copyright,
                    message: translations.da.footer.message,
                },
                nav: getNav('da'),
                outline: { label: 'På denne side' },
                returnToTopLabel: 'Tilbage til toppen',
                sidebar: getSidebar('da'),
            },
        },
        de: {
            description: 'Eine Community für die Diskussion und Erkundung von AirPods-Klonen.',
            label: 'Deutsch',
            lang: 'de-DE',
            themeConfig: {
                docFooter: { next: 'Nächste Seite', prev: 'Vorherige Seite' },
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.de.editLink,
                },
                footer: {
                    copyright: translations.de.footer.copyright,
                    message: translations.de.footer.message,
                },
                nav: getNav('de'),
                outline: { label: 'Auf dieser Seite' },
                returnToTopLabel: 'Zurück nach oben',
                sidebar: getSidebar('de'),
            },
        },
        es: {
            description: 'Una comunidad para la discusión y exploración de clones de AirPods.',
            label: 'Español',
            lang: 'es-ES',
            themeConfig: {
                docFooter: { next: 'Página siguiente', prev: 'Página anterior' },
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.es.editLink,
                },
                footer: {
                    copyright: translations.es.footer.copyright,
                    message: translations.es.footer.message,
                },
                nav: getNav('es'),
                outline: { label: 'En esta página' },
                returnToTopLabel: 'Volver arriba',
                sidebar: getSidebar('es'),
            },
        },
        fr: {
            description: "Une communauté pour la discussion et l'exploration des clones d'AirPods.",
            label: 'Français',
            lang: 'fr-FR',
            themeConfig: {
                docFooter: { next: 'Page suivante', prev: 'Page précédente' },
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.fr.editLink,
                },
                footer: {
                    copyright: translations.fr.footer.copyright,
                    message: translations.fr.footer.message,
                },
                nav: getNav('fr'),
                outline: { label: 'Sur cette page' },
                returnToTopLabel: 'Retour en haut',
                sidebar: getSidebar('fr'),
            },
        },
        pl: {
            description: 'Społeczność do dyskusji i odkrywania klonów AirPods.',
            label: 'Polski',
            lang: 'pl-PL',
            themeConfig: {
                docFooter: { next: 'Następna strona', prev: 'Poprzednia strona' },
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.pl.editLink,
                },
                footer: {
                    copyright: translations.pl.footer.copyright,
                    message: translations.pl.footer.message,
                },
                nav: getNav('pl'),
                outline: { label: 'Na tej stronie' },
                returnToTopLabel: 'Powrót na górę',
                sidebar: getSidebar('pl'),
            },
        },
        pt: {
            description: 'Uma comunidade para discussão e exploração de clones de AirPods.',
            label: 'Português',
            lang: 'pt-BR',
            themeConfig: {
                docFooter: { next: 'Próxima página', prev: 'Página anterior' },
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.pt.editLink,
                },
                footer: {
                    copyright: translations.pt.footer.copyright,
                    message: translations.pt.footer.message,
                },
                nav: getNav('pt'),
                outline: { label: 'Nesta página' },
                returnToTopLabel: 'Voltar ao topo',
                sidebar: getSidebar('pt'),
            },
        },
        root: {
            label: 'English',
            lang: 'en-US',
            themeConfig: {
                docFooter: { next: 'Next page', prev: 'Previous page' },
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.en.editLink,
                },
                footer: {
                    copyright: translations.en.footer.copyright,
                    message: translations.en.footer.message,
                },
                nav: getNav('en'),
                outline: { label: 'On this page' },
                sidebar: getSidebar('en'),
            },
        },
        ru: {
            description: 'Сообщество для обсуждения и изучения клонов AirPods.',
            label: 'Русский',
            lang: 'ru-RU',
            themeConfig: {
                docFooter: { next: 'Следующая страница', prev: 'Предыдущая страница' },
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.ru.editLink,
                },
                footer: {
                    copyright: translations.ru.footer.copyright,
                    message: translations.ru.footer.message,
                },
                nav: getNav('ru'),
                outline: { label: 'На этой странице' },
                returnToTopLabel: 'Вернуться наверх',
                sidebar: getSidebar('ru'),
            },
        },
        tr: {
            description: 'AirPods klonlarının tartışılması ve keşfedilmesi için bir topluluk.',
            label: 'Türkçe',
            lang: 'tr-TR',
            themeConfig: {
                docFooter: { next: 'Sonraki sayfa', prev: 'Önceki sayfa' },
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.tr.editLink,
                },
                footer: {
                    copyright: translations.tr.footer.copyright,
                    message: translations.tr.footer.message,
                },
                nav: getNav('tr'),
                outline: { label: 'Bu sayfada' },
                returnToTopLabel: 'Başa dön',
                sidebar: getSidebar('tr'),
            },
        },
    },
    markdown: {
        config: productFamiliesPlugin,
    },

    // Auto-generate sitemap with all locales for SEO + image sitemap entries
    sitemap: {
        hostname: 'https://airpodsreplicas.com',
        transformItems: (items) => {
            // Add locale alternates (hreflang) for each page
            const locales = SUPPORTED_LOCALES;
            const host = 'https://airpodsreplicas.com';

            return items
                .filter((item) => !productDestination(`/${item.url}`))
                .map((item) => {
                    // VitePress provides item.url without a leading slash (e.g. "contributing" or "da/contributing")
                    // Strip locale prefix to get the base path
                    let basePath = item.url;
                    for (const locale of locales) {
                        if (basePath.startsWith(`${locale}/`)) {
                            basePath = basePath.slice(locale.length + 1);
                            break;
                        }
                    }

                    // Add language alternates for SEO
                    const links = [
                        { lang: 'en', url: `${host}/${basePath}` },
                        { lang: 'es', url: `${host}/es/${basePath}` },
                        { lang: 'pt', url: `${host}/pt/${basePath}` },
                        { lang: 'da', url: `${host}/da/${basePath}` },
                        { lang: 'fr', url: `${host}/fr/${basePath}` },
                        { lang: 'ru', url: `${host}/ru/${basePath}` },
                        { lang: 'pl', url: `${host}/pl/${basePath}` },
                        { lang: 'de', url: `${host}/de/${basePath}` },
                        { lang: 'tr', url: `${host}/tr/${basePath}` },
                        { lang: 'x-default', url: `${host}/${basePath}` },
                    ];

                    // Image sitemap entry — point at this page's pre-generated OG image
                    // when it exists on disk. Locale homepages arrive as e.g. `da/`, so
                    // expand them to `da/index` to match the OG image filename.
                    let ogSlug = item.url || 'index';
                    if (ogSlug.endsWith('/')) {
                        ogSlug = `${ogSlug}index`;
                    }
                    const ogImageDiskPath = path.join(ogImagesDir, `${ogSlug}.png`);
                    const img = fs.existsSync(ogImageDiskPath)
                        ? [{ url: `${host}/og/${ogSlug}.png` }]
                        : undefined;

                    return {
                        ...item,
                        links,
                        ...(img ? { img } : {}),
                    };
                });
        },
    },

    themeConfig: {
        logo: { alt: 'AirReps', src: '/logo.webp' },

        outline: [2, 3],

        search: {
            options: {
                apiKey: process.env.API_KEY as string,
                appId: process.env.APP_ID as string,
                askAi: {
                    assistantId: process.env.ASSISTANT_ID as string,
                    indexName: process.env.ASSISTANT_INDEX_NAME as string,
                },
                indexName: process.env.INDEX_NAME as string,
                locales: {
                    da: { placeholder: 'Søg', translations: { button: { buttonText: 'Søg' } } },
                    de: {
                        placeholder: 'Suchen',
                        translations: { button: { buttonText: 'Suchen' } },
                    },
                    es: {
                        placeholder: 'Buscar',
                        translations: { button: { buttonText: 'Buscar' } },
                    },
                    fr: {
                        placeholder: 'Rechercher',
                        translations: { button: { buttonText: 'Rechercher' } },
                    },
                    pl: {
                        placeholder: 'Szukaj',
                        translations: { button: { buttonText: 'Szukaj' } },
                    },
                    pt: {
                        placeholder: 'Pesquisar',
                        translations: { button: { buttonText: 'Pesquisar' } },
                    },
                    ru: { placeholder: 'Поиск', translations: { button: { buttonText: 'Поиск' } } },
                    tr: { placeholder: 'Ara', translations: { button: { buttonText: 'Ara' } } },
                },
            },
            provider: 'algolia',
        },

        socialLinks: [
            { icon: 'discord', link: 'https://airreps.link/discord' },
            {
                ariaLabel: 'Reddit',
                icon: { svg: redditIcon },
                link: 'https://reddit.com/r/airreps',
            },
        ],
    },
    title: 'AirReps',

    // Dynamically inject hreflang tags, localized OG meta, and JSON-LD into every page
    transformHead: ({ pageData }) => {
        const { relativePath, frontmatter } = pageData;
        const oldPath = `/${relativePath.replace(/\.md$/, '')}`;
        const destination = productDestination(oldPath);
        if (destination) {
            return [
                ['meta', { content: 'noindex, follow', name: 'robots' }],
                [
                    'link',
                    {
                        href: `https://airpodsreplicas.com${destination.split('#')[0]}`,
                        rel: 'canonical',
                    },
                ],
                ['script', {}, productRedirectScript(oldPath)],
                ['meta', { content: `0; url=${destination}`, 'http-equiv': 'refresh' }],
            ];
        }
        // Remove locale prefix from path to get base path
        let basePath = relativePath.replace(/\.md$/, '');
        if (basePath === 'index') {
            basePath = '';
        }

        // Detect current locale
        let currentLocale = 'en';
        for (const locale of SUPPORTED_LOCALES) {
            if (basePath.startsWith(`${locale}/`)) {
                currentLocale = locale;
                basePath = basePath.replace(`${locale}/`, '');
                break;
            }
        }

        // Locale homepages end up as 'index' after stripping — normalize to ''
        if (basePath === 'index') {
            basePath = '';
        }

        // Flag emojis for each locale
        const localeFlags: Record<string, string> = {
            da: '🇩🇰',
            de: '🇩🇪',
            en: '🎧',
            es: '🇪🇸',
            fr: '🇫🇷',
            pl: '🇵🇱',
            pt: '🇧🇷',
            ru: '🇷🇺',
            tr: '🇹🇷',
        };

        // Default OG metadata with flag emojis (used as fallback)
        const ogMetaDefaults: Record<string, { title: string; description: string }> = {
            da: {
                description:
                    'Et fællesskab for diskussion og udforskning af AirPods-kloner. Opdag overkommelige alternativer og tjek vores Ultimative Guide for detaljerede indsigter. Begynd at udforske verden af AirPods-kloner i dag!',
                title: 'AirReps | Ultimativ Guide',
            },
            de: {
                description:
                    'Eine Community für die Diskussion und Erkundung von AirPods-Klonen. Entdecke erschwingliche Alternativen und lies unseren Ultimativen Leitfaden für detaillierte Einblicke. Entdecke noch heute die Welt der AirPods-Klone!',
                title: 'AirReps | Ultimativer Leitfaden',
            },
            en: {
                description:
                    'A community for the discussion and exploration of AirPods clones. Discover affordable alternatives and check out our Ultimate Guide for detailed insights. Start exploring the world of AirPods clones today!',
                title: 'AirReps | Ultimate Guide',
            },
            es: {
                description:
                    'Una comunidad para la discusión y exploración de clones de AirPods. Descubre alternativas asequibles y consulta nuestra Guía Definitiva para información detallada. ¡Comienza a explorar el mundo de los clones de AirPods hoy!',
                title: 'AirReps | Guía Definitiva',
            },
            fr: {
                description:
                    "Une communauté pour la discussion et l'exploration des clones AirPods. Découvrez des alternatives abordables et consultez notre Guide Ultime pour des informations détaillées. Commencez à explorer le monde des clones AirPods dès aujourd'hui!",
                title: 'AirReps | Guide Ultime',
            },
            pl: {
                description:
                    'Społeczność do dyskusji i odkrywania klonów AirPods. Odkryj przystępne cenowo alternatywy i sprawdź nasz Kompletny Przewodnik po szczegółowe informacje. Zacznij odkrywać świat klonów AirPods już dziś!',
                title: 'AirReps | Kompletny Przewodnik',
            },
            pt: {
                description:
                    'Uma comunidade para discussão e exploração de clones de AirPods. Descubra alternativas acessíveis e confira nosso Guia Definitivo para insights detalhados. Comece a explorar o mundo dos clones de AirPods hoje!',
                title: 'AirReps | Guia Definitivo',
            },
            ru: {
                description:
                    'Сообщество для обсуждения и изучения клонов AirPods. Откройте для себя доступные альтернативы и ознакомьтесь с нашим Полным Руководством для подробной информации. Начните исследовать мир клонов AirPods уже сегодня!',
                title: 'AirReps | Полное Руководство',
            },
            tr: {
                description:
                    'AirPods klonlarının tartışılması ve keşfedilmesi için bir topluluk. Uygun fiyatlı alternatifleri keşfedin ve detaylı bilgiler için Kapsamlı Rehberimize göz atın. AirPods klonlarının dünyasını bugün keşfetmeye başlayın!',
                title: 'AirReps | Kapsamlı Rehber',
            },
        };

        const defaults = ogMetaDefaults[currentLocale] || ogMetaDefaults.en;
        const flag = localeFlags[currentLocale] || '🎧';

        // Use page-specific title if available, otherwise fall back to locale defaults
        // pageData.title is auto-populated by VitePress from the H1 heading.
        // Two variants: clean (for <title>, JSON-LD, breadcrumbs — what Google reads)
        // and social (with flag emoji prefix, for og:title/twitter:title link previews).
        const title = frontmatter.title || pageData.title;
        const pageTitleClean = title && title !== 'AirReps' ? `${title} | AirReps` : defaults.title;
        const pageTitleSocial = `${flag} ${pageTitleClean}`;
        const pageDescription = frontmatter.description || defaults.description;

        // Root canonicals keep the trailing slash so they match the sitemap loc.
        const canonicalBase = basePath ? `/${basePath}` : '/';
        const localePrefix = currentLocale === 'en' ? '' : `/${currentLocale}`;
        const pageUrl = `https://airpodsreplicas.com${localePrefix}${canonicalBase}`;

        // OG Image Path — use the generated OG image for this page, falling back
        // to the homepage image if it hasn't been generated yet (e.g. a new page
        // added before the next `generate-og` run). Mirrors the sitemap's guard.
        const ogImageSlug = relativePath.replace(/\.md$/, '');
        const ogImageOnDisk = fs.existsSync(path.join(ogImagesDir, `${ogImageSlug}.png`));
        const ogImageUrl = `https://airpodsreplicas.com/og/${ogImageOnDisk ? ogImageSlug : 'index'}.png`;

        // Section detection — drives breadcrumbs and per-section schema @type
        const sectionMap: Record<string, string> = {
            introduction: 'Ultimate Guide',
            links: 'Purchase Links',
            ordering: 'Ordering',
            troubleshooting: 'Troubleshooting',
            'version-info': 'Version Info',
        };
        const pathSegments = basePath.split('/').filter(Boolean);
        const sectionSlug = pathSegments.length > 1 ? pathSegments[0] : null;
        const sectionName = sectionSlug ? sectionMap[sectionSlug] : null;
        // Map each section to its real hub page so the position-2 breadcrumb
        // links somewhere that exists — the bare `/links/`, `/troubleshooting/`
        // etc. section roots have no page and return 404.
        const sectionHubs: Record<string, string> = {
            introduction: 'introduction/overview',
            links: 'links/info',
            ordering: 'ordering/how-to-buy',
            troubleshooting: 'troubleshooting/other-common-bugs',
            'version-info': 'version-info/general',
        };
        const sectionUrl =
            sectionSlug && sectionHubs[sectionSlug]
                ? `https://airpodsreplicas.com${localePrefix}/${sectionHubs[sectionSlug]}`
                : null;

        const isHome = basePath === '';
        const isTroubleshooting = sectionSlug === 'troubleshooting';
        const isLinksPage = sectionSlug === 'links';

        // Multi-level breadcrumb (Home > Section > Page)
        const breadcrumbItems: Array<{
            '@type': 'ListItem';
            position: number;
            name: string;
            item: string;
        }> = [
            {
                '@type': 'ListItem',
                item: `https://airpodsreplicas.com${localePrefix}/`,
                name: 'Home',
                position: 1,
            },
        ];
        if (sectionName && sectionUrl) {
            breadcrumbItems.push({
                '@type': 'ListItem',
                item: sectionUrl,
                name: sectionName,
                position: 2,
            });
        }
        if (!isHome) {
            breadcrumbItems.push({
                '@type': 'ListItem',
                item: pageUrl,
                name: title || 'Page',
                position: breadcrumbItems.length + 1,
            });
        }

        const organizationNode = {
            '@id': 'https://airpodsreplicas.com/#organization',
            '@type': 'Organization',
            alternateName: ['AirPods Replicas', 'Fake AirPods', 'AirPods Clones', 'AirPods Dupes'],
            description:
                'AirReps is the largest community for AirPods replicas, covering which models to buy, trusted sellers, version comparisons, features, sound quality, and troubleshooting.',
            knowsAbout: [
                'AirPods replicas',
                'AirPods Pro 2 replicas',
                'AirPods Pro 3 replicas',
                'AirPods 4 replicas',
                'AirPods Max replicas',
                'replica earbuds',
                'AirPods clones',
            ],
            logo: {
                '@type': 'ImageObject',
                url: 'https://airpodsreplicas.com/logo.webp',
            },
            name: 'AirReps',
            sameAs: [
                'https://reddit.com/r/airreps',
                'https://airreps.link/discord',
                'https://github.com/AirPodsReplicas/AirReps',
            ],
            url: 'https://airpodsreplicas.com',
        };

        const dateModified = pageData.lastUpdated
            ? new Date(pageData.lastUpdated).toISOString()
            : new Date().toISOString();
        const datePublished = firstCommitDates.get(`docs/${relativePath}`) ?? dateModified;

        // JSON-LD graph nodes
        const websiteNode = {
            '@id': 'https://airpodsreplicas.com/#website',
            '@type': 'WebSite',
            alternateName: ['AirPods Replicas', 'Fake AirPods', 'AirPods Clones', 'AirPods Dupes'],
            description: defaults.description,
            inLanguage: ['en', ...SUPPORTED_LOCALES],
            name: 'AirReps',
            publisher: { '@id': 'https://airpodsreplicas.com/#organization' },
            url: 'https://airpodsreplicas.com',
        };

        const breadcrumbNode = {
            '@id': `${pageUrl}#breadcrumb`,
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbItems,
        };

        const homeNode = {
            '@id': `${pageUrl}#webpage`,
            '@type': 'WebPage',
            dateModified,
            description: pageDescription,
            inLanguage: currentLocale,
            isPartOf: { '@id': 'https://airpodsreplicas.com/#website' },
            name: pageTitleClean,
            url: pageUrl,
        };

        const articleNode = {
            '@id': `${pageUrl}#article`,
            '@type': isTroubleshooting ? 'TechArticle' : 'Article',
            breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
            description: pageDescription,
            headline: pageTitleClean,
            image: ogImageUrl,
            inLanguage: currentLocale,
            isPartOf: { '@id': 'https://airpodsreplicas.com/#website' },
            mainEntityOfPage: pageUrl,
            thumbnailUrl: ogImageUrl,
            url: pageUrl,
            ...(sectionName ? { articleSection: sectionName } : {}),
            author: { '@id': 'https://airpodsreplicas.com/#organization' },
            dateModified,
            datePublished,
            publisher: { '@id': 'https://airpodsreplicas.com/#organization' },
        };

        // /links/* pages are seller directories. CollectionPage + ItemList of
        // trusted-seller Organizations describes them more honestly than Article
        // and surfaces the commercial intent to search engines.
        const linksPageSellers = isLinksPage
            ? getSellersOnLinksPage(path.join(docsDir, relativePath))
            : [];
        const linksCollectionNode =
            isLinksPage && linksPageSellers.length
                ? {
                      '@id': `${pageUrl}#webpage`,
                      '@type': 'CollectionPage',
                      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
                      dateModified,
                      description: pageDescription,
                      inLanguage: currentLocale,
                      isPartOf: { '@id': 'https://airpodsreplicas.com/#website' },
                      mainEntity: {
                          '@type': 'ItemList',
                          itemListElement: linksPageSellers.map((seller, i) => ({
                              '@type': 'ListItem',
                              item: {
                                  '@type': 'Organization',
                                  name: seller.name,
                                  url: seller.url,
                              },
                              position: i + 1,
                          })),
                      },
                      name: pageTitleClean,
                      url: pageUrl,
                  }
                : null;

        const mainPageNode = isHome
            ? homeNode
            : linksCollectionNode
              ? linksCollectionNode
              : articleNode;

        const schema = {
            '@context': 'https://schema.org',
            '@graph': [organizationNode, websiteNode, breadcrumbNode, mainPageNode],
        };

        return [
            // Hreflang tags for SEO
            [
                'link',
                {
                    href: `https://airpodsreplicas.com${canonicalBase}`,
                    hreflang: 'en',
                    rel: 'alternate',
                },
            ],
            [
                'link',
                {
                    href: `https://airpodsreplicas.com/es${canonicalBase}`,
                    hreflang: 'es',
                    rel: 'alternate',
                },
            ],
            [
                'link',
                {
                    href: `https://airpodsreplicas.com/pt${canonicalBase}`,
                    hreflang: 'pt',
                    rel: 'alternate',
                },
            ],
            [
                'link',
                {
                    href: `https://airpodsreplicas.com/da${canonicalBase}`,
                    hreflang: 'da',
                    rel: 'alternate',
                },
            ],
            [
                'link',
                {
                    href: `https://airpodsreplicas.com/fr${canonicalBase}`,
                    hreflang: 'fr',
                    rel: 'alternate',
                },
            ],
            [
                'link',
                {
                    href: `https://airpodsreplicas.com/pl${canonicalBase}`,
                    hreflang: 'pl',
                    rel: 'alternate',
                },
            ],
            [
                'link',
                {
                    href: `https://airpodsreplicas.com/ru${canonicalBase}`,
                    hreflang: 'ru',
                    rel: 'alternate',
                },
            ],
            [
                'link',
                {
                    href: `https://airpodsreplicas.com/de${canonicalBase}`,
                    hreflang: 'de',
                    rel: 'alternate',
                },
            ],
            [
                'link',
                {
                    href: `https://airpodsreplicas.com/tr${canonicalBase}`,
                    hreflang: 'tr',
                    rel: 'alternate',
                },
            ],
            [
                'link',
                {
                    href: `https://airpodsreplicas.com${canonicalBase}`,
                    hreflang: 'x-default',
                    rel: 'alternate',
                },
            ],
            ['link', { href: pageUrl, rel: 'canonical' }],
            // Localized Open Graph meta tags — social previews keep the flag emoji.
            ['meta', { content: 'AirReps', property: 'og:site_name' }],
            ['meta', { content: pageTitleSocial, property: 'og:title' }],
            [
                'meta',
                {
                    content: isHome ? 'website' : 'article',
                    property: 'og:type',
                },
            ],
            ['meta', { content: pageUrl, property: 'og:url' }],
            ['meta', { content: pageDescription, property: 'og:description' }],
            ['meta', { content: ogImageUrl, property: 'og:image' }],
            ['meta', { content: '1200', property: 'og:image:width' }],
            ['meta', { content: '630', property: 'og:image:height' }],
            ['meta', { content: pageTitleSocial, property: 'og:image:alt' }],
            ['meta', { content: 'image/png', property: 'og:image:type' }],
            [
                'meta',
                {
                    content:
                        {
                            da: 'da_DK',
                            de: 'de_DE',
                            en: 'en_US',
                            es: 'es_ES',
                            fr: 'fr_FR',
                            pl: 'pl_PL',
                            pt: 'pt_BR',
                            ru: 'ru_RU',
                            tr: 'tr_TR',
                        }[currentLocale] || 'en_US',
                    property: 'og:locale',
                },
            ],
            // og:locale:alternate for every other supported locale.
            // `content` listed first so VitePress's mergeHead dedupe (which keys on the
            // first attribute) doesn't collapse these eight tags into one.
            ...(Object.entries({
                da: 'da_DK',
                de: 'de_DE',
                en: 'en_US',
                es: 'es_ES',
                fr: 'fr_FR',
                pl: 'pl_PL',
                pt: 'pt_BR',
                ru: 'ru_RU',
                tr: 'tr_TR',
            })
                .filter(([locale]) => locale !== currentLocale)
                .map(([, ogLocale]) => [
                    'meta',
                    { content: ogLocale, property: 'og:locale:alternate' },
                ]) as [string, Record<string, string>][]),
            // Twitter Card meta tags (Twitter spec uses name=, not property=)
            ['meta', { content: 'summary_large_image', name: 'twitter:card' }],
            ['meta', { content: pageUrl, name: 'twitter:url' }],
            ['meta', { content: pageTitleSocial, name: 'twitter:title' }],
            ['meta', { content: pageDescription, name: 'twitter:description' }],
            ['meta', { content: ogImageUrl, name: 'twitter:image' }],
            ['meta', { content: pageTitleSocial, name: 'twitter:image:alt' }],
            // JSON-LD
            ['script', { type: 'application/ld+json' }, JSON.stringify(schema)],
            // FAQ JSON-LD — manual `faq:` frontmatter wins; otherwise auto-extracted
            // from `::: details Question?` blocks in the source markdown
            ...(() => {
                const manualFaqs =
                    (frontmatter.faq as Array<{ q: string; a: string }> | undefined) ?? [];
                // Merge instead of either/or: manual `faq:` frontmatter entries
                // win, then append any auto-extracted `::: details Question?`
                // blocks not already covered (deduped case-insensitively on the
                // question) so hand-authored and inline FAQs both reach schema.
                const seenQuestions = new Set(manualFaqs.map((f) => f.q.trim().toLowerCase()));
                const faqs = [
                    ...manualFaqs,
                    ...extractFaqsFromMarkdown(path.join(docsDir, relativePath)).filter(
                        (f) => !seenQuestions.has(f.q.trim().toLowerCase())
                    ),
                ];
                if (!faqs.length) {
                    return [];
                }
                return [
                    [
                        'script',
                        { type: 'application/ld+json' },
                        JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            mainEntity: faqs.map((item) => ({
                                '@type': 'Question',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: item.a,
                                },
                                name: item.q,
                            })),
                        }),
                    ],
                ] as [string, Record<string, string>, string][];
            })(),
        ];
    },

    // Add loading="lazy" + decoding="async" to every <img> in rendered HTML
    // (markdown images and raw HTML <img>) unless already specified.
    // Also stamps role="main" on the home-layout content wrapper — VitePress
    // only renders a real <main> on doc layout, leaving home pages without a
    // main landmark (Lighthouse a11y).
    transformHtml: (code) =>
        code
            // Navbar logo: explicit size + eager so it doesn't trigger CLS
            // or compete for late LCP work. Must run before the generic
            // lazy-loading pass and include loading="eager" so the next
            // regex (which keys on absent `loading=`) skips it.
            .replace(
                /<img class="VPImage logo"([^>]*)>/g,
                '<img class="VPImage logo" loading="eager" fetchpriority="high" width="24" height="24"$1>'
            )
            .replace(/<img(?![^>]*\bloading=)([^>]*)>/g, '<img loading="lazy" decoding="async"$1>')
            // Stamp intrinsic width/height on content images that lack them so the
            // browser reserves layout space before the image loads (avoids CLS).
            // Paired with `.vp-doc img { height: auto }` so responsive scaling keeps
            // the aspect ratio. Images without resolvable local dimensions are left
            // untouched.
            .replace(
                /<img(?![^>]*\bwidth=)([^>]*?)\bsrc="([^"]+)"([^>]*)>/g,
                (match, pre, src, post) => {
                    const dims = getImageDimensions(src);
                    return dims
                        ? `<img${pre}src="${src}"${post} width="${dims.w}" height="${dims.h}">`
                        : match;
                }
            )
            // Outbound seller links (airreps.link) open in a new tab so readers
            // keep the comparison page they were on; rel="noopener" for safety.
            // These are plain links to public seller sites — deliberately NOT
            // marked rel="sponsored". Only raw-HTML table anchors match here;
            // markdown-rendered externals already carry target=.
            .replace(
                /<a(?![^>]*\btarget=)([^>]*\bhref="https:\/\/airreps\.link\/[^"]*"[^>]*)>/g,
                '<a target="_blank" rel="noopener"$1>'
            )
            .replace(
                /<div class="VPContent is-home"/g,
                '<div role="main" class="VPContent is-home"'
            ),

    vite: {
        plugins: [redirectPlugin()],
    },
});
