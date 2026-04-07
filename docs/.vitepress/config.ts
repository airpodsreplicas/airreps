import { type DefaultTheme, defineConfig } from 'vitepress';
import { redirectPlugin } from './plugins/redirect';

// Shared sidebar structure - used to generate locale-specific sidebars
function getSidebar(lang: string): DefaultTheme.SidebarItem[] {
    const t = translations[lang] || translations.en;

    return [
        {
            text: t.sidebar.ultimateGuide,
            collapsed: false,
            items: [
                {
                    text: t.sidebar.overview,
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/overview`,
                },
                {
                    text: t.sidebar.sellers,
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/sellers`,
                },
                {
                    text: t.sidebar.packaging,
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/packaging`,
                },
                {
                    text: t.sidebar.connectivity,
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/connectivity`,
                },
                {
                    text: t.sidebar.batteryLife,
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/battery-life`,
                },
                {
                    text: t.sidebar.features,
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/features`,
                },
                {
                    text: t.sidebar.ancExplained,
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/anc-explained`,
                },
                {
                    text: t.sidebar.buildQuality,
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/build-quality`,
                },
                {
                    text: t.sidebar.soundQuality,
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/sound-quality`,
                },
                {
                    text: t.sidebar.dictionary,
                    link: `${lang === 'en' ? '' : `/${lang}`}/introduction/dictionary`,
                },
            ],
        },
        {
            text: t.sidebar.versionInfo,
            collapsed: true,
            items: [
                {
                    text: t.sidebar.general,
                    link: `${lang === 'en' ? '' : `/${lang}`}/version-info/general`,
                },
                {
                    text: 'AirPods 2',
                    link: `${lang === 'en' ? '' : `/${lang}`}/version-info/airpods-2`,
                },
                {
                    text: 'AirPods 3',
                    link: `${lang === 'en' ? '' : `/${lang}`}/version-info/airpods-3`,
                },
                {
                    text: 'AirPods 4',
                    link: `${lang === 'en' ? '' : `/${lang}`}/version-info/airpods-4`,
                },
                {
                    text: 'AirPods Pro',
                    link: `${lang === 'en' ? '' : `/${lang}`}/version-info/airpods-pro`,
                },
                {
                    text: 'AirPods Pro 2',
                    link: `${lang === 'en' ? '' : `/${lang}`}/version-info/airpods-pro-2`,
                },
                {
                    text: 'AirPods Pro 3',
                    link: `${lang === 'en' ? '' : `/${lang}`}/version-info/airpods-pro-3`,
                },
                {
                    text: 'AirPods Max',
                    link: `${lang === 'en' ? '' : `/${lang}`}/version-info/airpods-max`,
                },
            ],
        },
        {
            text: t.sidebar.ordering,
            collapsed: true,
            items: [
                {
                    text: t.sidebar.howToBuy,
                    link: `${lang === 'en' ? '' : `/${lang}`}/ordering/how-to-buy`,
                },
                { text: t.sidebar.qcLc, link: `${lang === 'en' ? '' : `/${lang}`}/ordering/qc-lc` },
            ],
        },
        {
            text: t.sidebar.links,
            collapsed: false,
            items: [
                { text: t.sidebar.info, link: `${lang === 'en' ? '' : `/${lang}`}/links/info` },
                { text: 'AirPods 2', link: `${lang === 'en' ? '' : `/${lang}`}/links/airpods-2` },
                { text: 'AirPods 3', link: `${lang === 'en' ? '' : `/${lang}`}/links/airpods-3` },
                { text: 'AirPods 4', link: `${lang === 'en' ? '' : `/${lang}`}/links/airpods-4` },
                {
                    text: 'AirPods Pro',
                    link: `${lang === 'en' ? '' : `/${lang}`}/links/airpods-pro`,
                },
                {
                    text: 'AirPods Pro 2',
                    link: `${lang === 'en' ? '' : `/${lang}`}/links/airpods-pro-2`,
                },
                {
                    text: 'AirPods Pro 3',
                    link: `${lang === 'en' ? '' : `/${lang}`}/links/airpods-pro-3`,
                },
                {
                    text: 'AirPods Max',
                    link: `${lang === 'en' ? '' : `/${lang}`}/links/airpods-max`,
                },
            ],
        },
        {
            text: t.sidebar.troubleshooting,
            collapsed: true,
            items: [
                {
                    text: t.sidebar.icloudIncompatibility,
                    link: `${lang === 'en' ? '' : `/${lang}`}/troubleshooting/AirReps-Incompatibility-with-iCloud`,
                },
                {
                    text: t.sidebar.otherBugs,
                    link: `${lang === 'en' ? '' : `/${lang}`}/troubleshooting/other-common-bugs`,
                },
                {
                    text: t.sidebar.macosVolume,
                    link: `${lang === 'en' ? '' : `/${lang}`}/troubleshooting/macOS-volume-slider-fixup`,
                },
            ],
        },
        {
            items: [
                {
                    text: t.sidebar.usefulApps,
                    link: `${lang === 'en' ? '' : `/${lang}`}/useful-apps`,
                },
            ],
        },
        {
            items: [
                {
                    text: t.sidebar.contributing,
                    link: `${lang === 'en' ? '' : `/${lang}`}/contributing`,
                },
            ],
        },
    ];
}

function getNav(lang: string): DefaultTheme.NavItem[] {
    const t = translations[lang] || translations.en;
    const prefix = lang === 'en' ? '' : `/${lang}`;

    return [
        { text: t.nav.home, link: `${prefix}/` },
        { text: t.nav.ultimateGuide, link: `${prefix}/introduction/overview` },
        { text: t.nav.quiz, link: `${prefix}/quiz` },
        { text: t.nav.links, link: `${prefix}/links/info` },
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
    en: {
        nav: { home: 'Home', ultimateGuide: 'Ultimate Guide', links: 'Links', quiz: 'Quiz' },
        sidebar: {
            ultimateGuide: 'Ultimate Guide',
            overview: 'Overview',
            sellers: 'Sellers',
            packaging: 'Packaging',
            connectivity: 'Connectivity',
            batteryLife: 'Battery Life',
            features: 'Features',
            ancExplained: 'ANC Explained',
            buildQuality: 'Build Quality',
            soundQuality: 'Sound Quality',
            dictionary: 'Dictionary',
            versionInfo: 'Version Info',
            general: 'General',
            ordering: 'Ordering',
            howToBuy: 'How to buy',
            qcLc: 'QC & LC',
            links: 'Links',
            info: 'Info',
            troubleshooting: 'Troubleshooting',
            icloudIncompatibility: 'AirReps Incompatibility with iCloud',
            otherBugs: 'Other Common Bugs',
            macosVolume: 'Volume Slider is Ineffective on MacOS',
            usefulApps: 'Useful Apps',
            contributing: 'Contributing',
        },
        footer: {
            message: 'Released under the GPLv3 License.',
            copyright: `© Copyright ${new Date().getFullYear()} AirReps. All Rights Reserved.`,
        },
        editLink: 'Edit this page on GitHub',
    },
    pt: {
        nav: { home: 'Início', ultimateGuide: 'Guia Definitivo', links: 'Links', quiz: 'Quiz' },
        sidebar: {
            ultimateGuide: 'Guia Definitivo',
            overview: 'Visão Geral',
            sellers: 'Vendedores',
            packaging: 'Embalagem',
            connectivity: 'Conectividade',
            batteryLife: 'Duração da Bateria',
            features: 'Recursos',
            ancExplained: 'ANC Explicado',
            buildQuality: 'Qualidade de Construção',
            soundQuality: 'Qualidade de Som',
            dictionary: 'Dicionário',
            versionInfo: 'Info de Versão',
            general: 'Geral',
            ordering: 'Pedidos',
            howToBuy: 'Como Comprar',
            qcLc: 'QC & LC',
            links: 'Links',
            info: 'Info',
            troubleshooting: 'Solução de Problemas',
            icloudIncompatibility: 'Incompatibilidade com iCloud',
            otherBugs: 'Outros Bugs Comuns',
            macosVolume: 'Controle de Volume no MacOS',
            usefulApps: 'Apps Úteis',
            contributing: 'Contribuir',
        },
        footer: {
            message: 'Lançado sob a Licença GPLv3.',
            copyright: `© Copyright ${new Date().getFullYear()} AirReps. Todos os Direitos Reservados.`,
        },
        editLink: 'Editar esta página no GitHub',
    },
    es: {
        nav: { home: 'Inicio', ultimateGuide: 'Guía Definitiva', links: 'Enlaces', quiz: 'Quiz' },
        sidebar: {
            ultimateGuide: 'Guía Definitiva',
            overview: 'Descripción General',
            sellers: 'Vendedores',
            packaging: 'Embalaje',
            connectivity: 'Conectividad',
            batteryLife: 'Duración de Batería',
            features: 'Características',
            ancExplained: 'ANC Explicado',
            buildQuality: 'Calidad de Construcción',
            soundQuality: 'Calidad de Sonido',
            dictionary: 'Diccionario',
            versionInfo: 'Info de Versión',
            general: 'General',
            ordering: 'Pedidos',
            howToBuy: 'Cómo Comprar',
            qcLc: 'QC & LC',
            links: 'Enlaces',
            info: 'Info',
            troubleshooting: 'Solución de Problemas',
            icloudIncompatibility: 'Incompatibilidad con iCloud',
            otherBugs: 'Otros Errores Comunes',
            macosVolume: 'Control de Volumen en MacOS',
            usefulApps: 'Apps Útiles',
            contributing: 'Contribuir',
        },
        footer: {
            message: 'Publicado bajo la Licencia GPLv3.',
            copyright: `© Copyright ${new Date().getFullYear()} AirReps. Todos los Derechos Reservados.`,
        },
        editLink: 'Editar esta página en GitHub',
    },
    da: {
        nav: { home: 'Hjem', ultimateGuide: 'Ultimativ Guide', links: 'Links', quiz: 'Quiz' },
        sidebar: {
            ultimateGuide: 'Ultimativ Guide',
            overview: 'Oversigt',
            sellers: 'Sælgere',
            packaging: 'Emballage',
            connectivity: 'Forbindelse',
            batteryLife: 'Batterilevetid',
            features: 'Funktioner',
            ancExplained: 'ANC Forklaret',
            buildQuality: 'Byggekvalitet',
            soundQuality: 'Lydkvalitet',
            dictionary: 'Ordbog',
            versionInfo: 'Versionsinfo',
            general: 'Generelt',
            ordering: 'Bestilling',
            howToBuy: 'Sådan Køber Du',
            qcLc: 'QC & LC',
            links: 'Links',
            info: 'Info',
            troubleshooting: 'Fejlfinding',
            icloudIncompatibility: 'iCloud Inkompatibilitet',
            otherBugs: 'Andre Almindelige Fejl',
            macosVolume: 'Lydstyrke på MacOS',
            usefulApps: 'Nyttige Apps',
            contributing: 'Bidrag',
        },
        footer: {
            message: 'Udgivet under GPLv3 Licensen.',
            copyright: `© Copyright ${new Date().getFullYear()} AirReps. Alle Rettigheder Forbeholdes.`,
        },
        editLink: 'Rediger denne side på GitHub',
    },
    fr: {
        nav: { home: 'Accueil', ultimateGuide: 'Guide Ultime', links: 'Liens', quiz: 'Quiz' },
        sidebar: {
            ultimateGuide: 'Guide Ultime',
            overview: 'Aperçu',
            sellers: 'Vendeurs',
            packaging: 'Emballage',
            connectivity: 'Connectivité',
            batteryLife: 'Autonomie',
            features: 'Fonctionnalités',
            ancExplained: 'ANC Expliqué',
            buildQuality: 'Qualité de Fabrication',
            soundQuality: 'Qualité Audio',
            dictionary: 'Dictionnaire',
            versionInfo: 'Info Version',
            general: 'Général',
            ordering: 'Commandes',
            howToBuy: 'Comment Acheter',
            qcLc: 'QC & LC',
            links: 'Liens',
            info: 'Info',
            troubleshooting: 'Dépannage',
            icloudIncompatibility: 'Incompatibilité avec iCloud',
            otherBugs: 'Autres Bugs Courants',
            macosVolume: 'Volume sur MacOS',
            usefulApps: 'Apps Utiles',
            contributing: 'Contribuer',
        },
        footer: {
            message: 'Publié sous Licence GPLv3.',
            copyright: `© Copyright ${new Date().getFullYear()} AirReps. Tous Droits Réservés.`,
        },
        editLink: 'Modifier cette page sur GitHub',
    },
    pl: {
        nav: {
            home: 'Strona główna',
            ultimateGuide: 'Kompletny Przewodnik',
            links: 'Linki',
            quiz: 'Quiz',
        },
        sidebar: {
            ultimateGuide: 'Kompletny Przewodnik',
            overview: 'Przegląd',
            sellers: 'Sprzedawcy',
            packaging: 'Opakowanie',
            connectivity: 'Łączność',
            batteryLife: 'Żywotność Baterii',
            features: 'Funkcje',
            ancExplained: 'ANC Wyjaśnione',
            buildQuality: 'Jakość Wykonania',
            soundQuality: 'Jakość Dźwięku',
            dictionary: 'Słownik',
            versionInfo: 'Info o Wersjach',
            general: 'Ogólne',
            ordering: 'Zamawianie',
            howToBuy: 'Jak Kupić',
            qcLc: 'QC & LC',
            links: 'Linki',
            info: 'Info',
            troubleshooting: 'Rozwiązywanie Problemów',
            icloudIncompatibility: 'Niekompatybilność z iCloud',
            otherBugs: 'Inne Częste Błędy',
            macosVolume: 'Głośność na MacOS',
            usefulApps: 'Przydatne Aplikacje',
            contributing: 'Współtworzenie',
        },
        footer: {
            message: 'Wydane na licencji GPLv3.',
            copyright: `© Copyright ${new Date().getFullYear()} AirReps. Wszelkie Prawa Zastrzeżone.`,
        },
        editLink: 'Edytuj tę stronę na GitHub',
    },
    de: {
        nav: {
            home: 'Startseite',
            ultimateGuide: 'Ultimativer Leitfaden',
            links: 'Links',
            quiz: 'Quiz',
        },
        sidebar: {
            ultimateGuide: 'Ultimativer Leitfaden',
            overview: 'Überblick',
            sellers: 'Verkäufer',
            packaging: 'Verpackung',
            connectivity: 'Konnektivität',
            batteryLife: 'Akkulaufzeit',
            features: 'Funktionen',
            ancExplained: 'ANC Erklärt',
            buildQuality: 'Verarbeitungsqualität',
            soundQuality: 'Klangqualität',
            dictionary: 'Wörterbuch',
            versionInfo: 'Versionsinfo',
            general: 'Allgemein',
            ordering: 'Bestellung',
            howToBuy: 'Wie man kauft',
            qcLc: 'QC & LC',
            links: 'Links',
            info: 'Info',
            troubleshooting: 'Fehlerbehebung',
            icloudIncompatibility: 'iCloud-Inkompatibilität',
            otherBugs: 'Andere häufige Fehler',
            macosVolume: 'Lautstärkeregler auf MacOS',
            usefulApps: 'Nützliche Apps',
            contributing: 'Mitwirken',
        },
        footer: {
            message: 'Veröffentlicht unter der GPLv3-Lizenz.',
            copyright: `© Copyright ${new Date().getFullYear()} AirReps. Alle Rechte vorbehalten.`,
        },
        editLink: 'Diese Seite auf GitHub bearbeiten',
    },
    tr: {
        nav: {
            home: 'Ana Sayfa',
            ultimateGuide: 'Kapsamlı Rehber',
            links: 'Bağlantılar',
            quiz: 'Test',
        },
        sidebar: {
            ultimateGuide: 'Kapsamlı Rehber',
            overview: 'Genel Bakış',
            sellers: 'Satıcılar',
            packaging: 'Paketleme',
            connectivity: 'Bağlantı',
            batteryLife: 'Pil Ömrü',
            features: 'Özellikler',
            ancExplained: 'ANC Açıklaması',
            buildQuality: 'Yapı Kalitesi',
            soundQuality: 'Ses Kalitesi',
            dictionary: 'Sözlük',
            versionInfo: 'Sürüm Bilgisi',
            general: 'Genel',
            ordering: 'Sipariş',
            howToBuy: 'Nasıl Satın Alınır',
            qcLc: 'QC & LC',
            links: 'Bağlantılar',
            info: 'Bilgi',
            troubleshooting: 'Sorun Giderme',
            icloudIncompatibility: 'iCloud Uyumsuzluğu',
            otherBugs: 'Diğer Yaygın Hatalar',
            macosVolume: 'MacOS Ses Kontrolü',
            usefulApps: 'Faydalı Uygulamalar',
            contributing: 'Katkıda Bulunma',
        },
        footer: {
            message: 'GPLv3 Lisansı altında yayınlanmıştır.',
            copyright: `© Telif Hakkı ${new Date().getFullYear()} AirReps. Tüm Hakları Saklıdır.`,
        },
        editLink: "Bu sayfayı GitHub'da düzenle",
    },
    ru: {
        nav: {
            home: 'Главная',
            ultimateGuide: 'Полное Руководство',
            links: 'Ссылки',
            quiz: 'Тест',
        },
        sidebar: {
            ultimateGuide: 'Полное Руководство',
            overview: 'Обзор',
            sellers: 'Продавцы',
            packaging: 'Упаковка',
            connectivity: 'Подключение',
            batteryLife: 'Время Работы Батареи',
            features: 'Функции',
            ancExplained: 'ANC Объяснение',
            buildQuality: 'Качество Сборки',
            soundQuality: 'Качество Звука',
            dictionary: 'Словарь',
            versionInfo: 'Информация о Версиях',
            general: 'Общее',
            ordering: 'Заказ',
            howToBuy: 'Как Купить',
            qcLc: 'QC и LC',
            links: 'Ссылки',
            info: 'Информация',
            troubleshooting: 'Устранение Неполадок',
            icloudIncompatibility: 'Несовместимость с iCloud',
            otherBugs: 'Другие Частые Ошибки',
            macosVolume: 'Громкость на MacOS',
            usefulApps: 'Полезные Приложения',
            contributing: 'Участие',
        },
        footer: {
            message: 'Выпущено под лицензией GPLv3.',
            copyright: `© Copyright ${new Date().getFullYear()} AirReps. Все Права Защищены.`,
        },
        editLink: 'Редактировать на GitHub',
    },
};

// Reddit SVG icon
const redditIcon =
    '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Reddit</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/',
    title: 'AirReps',
    description: 'A community for the discussion and exploration of AirPods clones.',

    lastUpdated: true,
    cleanUrls: true,

    // Auto-generate sitemap with all locales for SEO
    sitemap: {
        hostname: 'https://airpodsreplicas.com',
        transformItems: (items) => {
            // Add locale alternates (hreflang) for each page
            const locales = ['es', 'pt', 'da', 'fr', 'ru', 'pl', 'de', 'tr'];
            const host = 'https://airpodsreplicas.com';

            return items.map((item) => {
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

                return {
                    ...item,
                    links,
                };
            });
        },
    },

    vite: {
        plugins: [redirectPlugin()],
    },

    head: [
        ['link', { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: '' }],
        ['link', { rel: 'icon', sizes: 'any', href: '/favicon.ico' }],
        ['meta', { name: 'theme-color', content: '#EC645D' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['meta', { name: 'apple-mobile-web-app-title', content: 'AirReps Ultimate Guide' }],
        ['meta', { name: 'application-name', content: 'AirReps Ultimate Guide' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
        ['meta', { property: 'owner', content: 'AirReps' }],
        ['meta', { property: 'author', content: 'AirReps' }],
    ],

    // Dynamically inject hreflang tags, localized OG meta, and JSON-LD into every page
    transformHead: ({ pageData }) => {
        const { relativePath, frontmatter } = pageData;
        // Remove locale prefix from path to get base path
        let basePath = relativePath.replace(/\.md$/, '');
        if (basePath === 'index') {
            basePath = '';
        }

        // Detect current locale
        let currentLocale = 'en';
        const locales = ['es', 'pt', 'da', 'fr', 'pl', 'ru', 'de', 'tr'];
        for (const locale of locales) {
            if (basePath.startsWith(`${locale}/`)) {
                currentLocale = locale;
                basePath = basePath.replace(`${locale}/`, '');
                break;
            }
        }

        // Flag emojis for each locale
        const localeFlags: Record<string, string> = {
            en: '🎧',
            es: '🇪🇸',
            pt: '🇧🇷',
            da: '🇩🇰',
            fr: '🇫🇷',
            pl: '🇵🇱',
            ru: '🇷🇺',
            de: '🇩🇪',
            tr: '🇹🇷',
        };

        // Default OG metadata with flag emojis (used as fallback)
        const ogMetaDefaults: Record<string, { title: string; description: string }> = {
            en: {
                title: 'AirReps | Ultimate Guide',
                description:
                    'A community for the discussion and exploration of AirPods clones. Discover affordable alternatives and check out our Ultimate Guide for detailed insights. Start exploring the world of AirPods clones today!',
            },
            es: {
                title: 'AirReps | Guía Definitiva',
                description:
                    'Una comunidad para la discusión y exploración de clones de AirPods. Descubre alternativas asequibles y consulta nuestra Guía Definitiva para información detallada. ¡Comienza a explorar el mundo de los clones de AirPods hoy!',
            },
            pt: {
                title: 'AirReps | Guia Definitivo',
                description:
                    'Uma comunidade para discussão e exploração de clones de AirPods. Descubra alternativas acessíveis e confira nosso Guia Definitivo para insights detalhados. Comece a explorar o mundo dos clones de AirPods hoje!',
            },
            da: {
                title: 'AirReps | Ultimativ Guide',
                description:
                    'Et fællesskab for diskussion og udforskning af AirPods-kloner. Opdag overkommelige alternativer og tjek vores Ultimative Guide for detaljerede indsigter. Begynd at udforske verden af AirPods-kloner i dag!',
            },
            fr: {
                title: 'AirReps | Guide Ultime',
                description:
                    "Une communauté pour la discussion et l'exploration des clones AirPods. Découvrez des alternatives abordables et consultez notre Guide Ultime pour des informations détaillées. Commencez à explorer le monde des clones AirPods dès aujourd'hui!",
            },
            pl: {
                title: 'AirReps | Kompletny Przewodnik',
                description:
                    'Społeczność do dyskusji i odkrywania klonów AirPods. Odkryj przystępne cenowo alternatywy i sprawdź nasz Kompletny Przewodnik po szczegółowe informacje. Zacznij odkrywać świat klonów AirPods już dziś!',
            },
            ru: {
                title: 'AirReps | Полное Руководство',
                description:
                    'Сообщество для обсуждения и изучения клонов AirPods. Откройте для себя доступные альтернативы и ознакомьтесь с нашим Полным Руководством для подробной информации. Начните исследовать мир клонов AirPods уже сегодня!',
            },
            de: {
                title: 'AirReps | Ultimativer Leitfaden',
                description:
                    'Eine Community für die Diskussion und Erkundung von AirPods-Klonen. Entdecke erschwingliche Alternativen und lies unseren Ultimativen Leitfaden für detaillierte Einblicke. Entdecke noch heute die Welt der AirPods-Klone!',
            },
            tr: {
                title: 'AirReps | Kapsamlı Rehber',
                description:
                    'AirPods klonlarının tartışılması ve keşfedilmesi için bir topluluk. Uygun fiyatlı alternatifleri keşfedin ve detaylı bilgiler için Kapsamlı Rehberimize göz atın. AirPods klonlarının dünyasını bugün keşfetmeye başlayın!',
            },
        };

        const defaults = ogMetaDefaults[currentLocale] || ogMetaDefaults.en;
        const flag = localeFlags[currentLocale] || '🎧';

        // Use page-specific frontmatter if available, otherwise fall back to locale defaults
        const pageTitle =
            frontmatter.title && frontmatter.title !== 'AirReps'
                ? `${flag} ${frontmatter.title} | AirReps`
                : `${flag} ${defaults.title}`;
        const pageDescription = frontmatter.description || defaults.description;

        const canonicalBase = basePath ? `/${basePath}` : '';
        const localePrefix = currentLocale === 'en' ? '' : `/${currentLocale}`;
        const pageUrl = `https://airpodsreplicas.com${localePrefix}${canonicalBase}`;

        // OG Image Path
        // Use the generated OG image for the specific page
        const ogImageSlug = relativePath.replace(/\.md$/, '');
        const ogImageUrl = `https://airpodsreplicas.com/og/${ogImageSlug}.png`;

        // JSON-LD Schema
        const schema = {
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'WebSite',
                    '@id': 'https://airpodsreplicas.com/#website',
                    url: 'https://airpodsreplicas.com',
                    name: 'AirReps',
                    description: defaults.description,
                    publisher: {
                        '@type': 'Organization',
                        name: 'AirReps',
                        logo: {
                            '@type': 'ImageObject',
                            url: 'https://airpodsreplicas.com/logo.webp',
                        },
                    },
                },
                {
                    '@type': 'BreadcrumbList',
                    '@id': `${pageUrl}/#breadcrumb`,
                    itemListElement: [
                        {
                            '@type': 'ListItem',
                            position: 1,
                            name: 'Home',
                            item: `https://airpodsreplicas.com${localePrefix}/`,
                        },
                        {
                            '@type': 'ListItem',
                            position: 2,
                            name: frontmatter.title || 'Page',
                            item: pageUrl,
                        },
                    ],
                },
                {
                    '@type': 'Article',
                    '@id': `${pageUrl}/#article`,
                    headline: pageTitle,
                    description: pageDescription,
                    image: ogImageUrl,
                    author: {
                        '@type': 'Organization',
                        name: 'AirReps',
                    },
                    publisher: {
                        '@type': 'Organization',
                        name: 'AirReps',
                        logo: {
                            '@type': 'ImageObject',
                            url: 'https://airpodsreplicas.com/logo.webp',
                        },
                    },
                    datePublished: pageData.lastUpdated
                        ? new Date(pageData.lastUpdated).toISOString()
                        : new Date().toISOString(),
                    dateModified: pageData.lastUpdated
                        ? new Date(pageData.lastUpdated).toISOString()
                        : new Date().toISOString(),
                },
            ],
        };

        return [
            // Hreflang tags for SEO
            [
                'link',
                {
                    rel: 'alternate',
                    hreflang: 'en',
                    href: `https://airpodsreplicas.com${canonicalBase}`,
                },
            ],
            [
                'link',
                {
                    rel: 'alternate',
                    hreflang: 'es',
                    href: `https://airpodsreplicas.com/es${canonicalBase}`,
                },
            ],
            [
                'link',
                {
                    rel: 'alternate',
                    hreflang: 'pt',
                    href: `https://airpodsreplicas.com/pt${canonicalBase}`,
                },
            ],
            [
                'link',
                {
                    rel: 'alternate',
                    hreflang: 'da',
                    href: `https://airpodsreplicas.com/da${canonicalBase}`,
                },
            ],
            [
                'link',
                {
                    rel: 'alternate',
                    hreflang: 'fr',
                    href: `https://airpodsreplicas.com/fr${canonicalBase}`,
                },
            ],
            [
                'link',
                {
                    rel: 'alternate',
                    hreflang: 'pl',
                    href: `https://airpodsreplicas.com/pl${canonicalBase}`,
                },
            ],
            [
                'link',
                {
                    rel: 'alternate',
                    hreflang: 'ru',
                    href: `https://airpodsreplicas.com/ru${canonicalBase}`,
                },
            ],
            [
                'link',
                {
                    rel: 'alternate',
                    hreflang: 'de',
                    href: `https://airpodsreplicas.com/de${canonicalBase}`,
                },
            ],
            [
                'link',
                {
                    rel: 'alternate',
                    hreflang: 'tr',
                    href: `https://airpodsreplicas.com/tr${canonicalBase}`,
                },
            ],
            [
                'link',
                {
                    rel: 'alternate',
                    hreflang: 'x-default',
                    href: `https://airpodsreplicas.com${canonicalBase}`,
                },
            ],
            ['link', { rel: 'canonical', href: pageUrl }],
            // Localized Open Graph meta tags
            ['meta', { property: 'og:site_name', content: 'AirReps' }],
            ['meta', { property: 'og:title', content: pageTitle }],
            ['meta', { property: 'og:type', content: basePath === '' || basePath === 'index' ? 'website' : 'article' }],
            ['meta', { property: 'og:url', content: pageUrl }],
            ['meta', { property: 'og:description', content: pageDescription }],
            ['meta', { property: 'og:image', content: ogImageUrl }],
            ['meta', { property: 'og:image:width', content: '1200' }],
            ['meta', { property: 'og:image:height', content: '630' }],
            ['meta', { property: 'og:image:alt', content: pageTitle }],
            ['meta', { property: 'og:image:type', content: 'image/png' }],
            [
                'meta',
                {
                    property: 'og:locale',
                    content:
                        ({
                            en: 'en_US',
                            pt: 'pt_BR',
                            es: 'es_ES',
                            da: 'da_DK',
                            pl: 'pl_PL',
                            ru: 'ru_RU',
                            fr: 'fr_FR',
                            de: 'de_DE',
                            tr: 'tr_TR',
                        })[currentLocale] || 'en_US',
                },
            ],
            // Localized Twitter meta tags
            ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
            ['meta', { property: 'twitter:url', content: pageUrl }],
            ['meta', { property: 'twitter:title', content: pageTitle }],
            ['meta', { property: 'twitter:description', content: pageDescription }],
            ['meta', { property: 'twitter:image', content: ogImageUrl }],
            ['meta', { property: 'twitter:image:alt', content: pageTitle }],
            // JSON-LD
            ['script', { type: 'application/ld+json' }, JSON.stringify(schema)],
        ];
    },

    // Locale configuration for i18n
    locales: {
        root: {
            label: 'English',
            lang: 'en-US',
            themeConfig: {
                nav: getNav('en'),
                sidebar: getSidebar('en'),
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.en.editLink,
                },
                footer: {
                    message: translations.en.footer.message,
                    copyright: translations.en.footer.copyright,
                },
                docFooter: { prev: 'Previous page', next: 'Next page' },
                outline: { label: 'On this page' },
            },
        },
        pt: {
            label: 'Português',
            lang: 'pt-BR',
            description: 'Uma comunidade para discussão e exploração de clones de AirPods.',
            themeConfig: {
                nav: getNav('pt'),
                sidebar: getSidebar('pt'),
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.pt.editLink,
                },
                footer: {
                    message: translations.pt.footer.message,
                    copyright: translations.pt.footer.copyright,
                },
                docFooter: { prev: 'Página anterior', next: 'Próxima página' },
                outline: { label: 'Nesta página' },
                returnToTopLabel: 'Voltar ao topo',
            },
        },
        es: {
            label: 'Español',
            lang: 'es-ES',
            description: 'Una comunidad para la discusión y exploración de clones de AirPods.',
            themeConfig: {
                nav: getNav('es'),
                sidebar: getSidebar('es'),
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.es.editLink,
                },
                footer: {
                    message: translations.es.footer.message,
                    copyright: translations.es.footer.copyright,
                },
                docFooter: { prev: 'Página anterior', next: 'Página siguiente' },
                outline: { label: 'En esta página' },
                returnToTopLabel: 'Volver arriba',
            },
        },
        da: {
            label: 'Dansk',
            lang: 'da-DK',
            description: 'Et fællesskab for diskussion og udforskning af AirPods-kloner.',
            themeConfig: {
                nav: getNav('da'),
                sidebar: getSidebar('da'),
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.da.editLink,
                },
                footer: {
                    message: translations.da.footer.message,
                    copyright: translations.da.footer.copyright,
                },
                docFooter: { prev: 'Forrige side', next: 'Næste side' },
                outline: { label: 'På denne side' },
                returnToTopLabel: 'Tilbage til toppen',
            },
        },
        fr: {
            label: 'Français',
            lang: 'fr-FR',
            description: "Une communauté pour la discussion et l'exploration des clones d'AirPods.",
            themeConfig: {
                nav: getNav('fr'),
                sidebar: getSidebar('fr'),
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.fr.editLink,
                },
                footer: {
                    message: translations.fr.footer.message,
                    copyright: translations.fr.footer.copyright,
                },
                docFooter: { prev: 'Page précédente', next: 'Page suivante' },
                outline: { label: 'Sur cette page' },
                returnToTopLabel: 'Retour en haut',
            },
        },
        pl: {
            label: 'Polski',
            lang: 'pl-PL',
            description: 'Społeczność do dyskusji i odkrywania klonów AirPods.',
            themeConfig: {
                nav: getNav('pl'),
                sidebar: getSidebar('pl'),
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.pl.editLink,
                },
                footer: {
                    message: translations.pl.footer.message,
                    copyright: translations.pl.footer.copyright,
                },
                docFooter: { prev: 'Poprzednia strona', next: 'Następna strona' },
                outline: { label: 'Na tej stronie' },
                returnToTopLabel: 'Powrót na górę',
            },
        },
        ru: {
            label: 'Русский',
            lang: 'ru-RU',
            description: 'Сообщество для обсуждения и изучения клонов AirPods.',
            themeConfig: {
                nav: getNav('ru'),
                sidebar: getSidebar('ru'),
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.ru.editLink,
                },
                footer: {
                    message: translations.ru.footer.message,
                    copyright: translations.ru.footer.copyright,
                },
                docFooter: { prev: 'Предыдущая страница', next: 'Следующая страница' },
                outline: { label: 'На этой странице' },
                returnToTopLabel: 'Вернуться наверх',
            },
        },
        de: {
            label: 'Deutsch',
            lang: 'de-DE',
            description: 'Eine Community für die Diskussion und Erkundung von AirPods-Klonen.',
            themeConfig: {
                nav: getNav('de'),
                sidebar: getSidebar('de'),
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.de.editLink,
                },
                footer: {
                    message: translations.de.footer.message,
                    copyright: translations.de.footer.copyright,
                },
                docFooter: { prev: 'Vorherige Seite', next: 'Nächste Seite' },
                outline: { label: 'Auf dieser Seite' },
                returnToTopLabel: 'Zurück nach oben',
            },
        },
        tr: {
            label: 'Türkçe',
            lang: 'tr-TR',
            description: 'AirPods klonlarının tartışılması ve keşfedilmesi için bir topluluk.',
            themeConfig: {
                nav: getNav('tr'),
                sidebar: getSidebar('tr'),
                editLink: {
                    pattern: 'https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path',
                    text: translations.tr.editLink,
                },
                footer: {
                    message: translations.tr.footer.message,
                    copyright: translations.tr.footer.copyright,
                },
                docFooter: { prev: 'Önceki sayfa', next: 'Sonraki sayfa' },
                outline: { label: 'Bu sayfada' },
                returnToTopLabel: 'Başa dön',
            },
        },
    },

    themeConfig: {
        logo: '/logo.webp',

        outline: [2, 3],

        socialLinks: [
            { icon: 'discord', link: 'https://discord.gg/airreps' },
            {
                icon: { svg: redditIcon },
                link: 'https://reddit.com/r/airreps',
                ariaLabel: 'Reddit',
            },
            { icon: 'youtube', link: 'https://www.youtube.com/@AirReps' },
        ],

        search: {
            provider: 'algolia',
            options: {
                appId: process.env.APP_ID as string,
                apiKey: process.env.API_KEY as string,
                indexName: process.env.INDEX_NAME as string,
                askAi: {
                    assistantId: process.env.ASSISTANT_ID as string,
                    indexName: process.env.ASSISTANT_INDEX_NAME as string,
                },
                locales: {
                    pt: {
                        placeholder: 'Pesquisar',
                        translations: { button: { buttonText: 'Pesquisar' } },
                    },
                    es: {
                        placeholder: 'Buscar',
                        translations: { button: { buttonText: 'Buscar' } },
                    },
                    da: { placeholder: 'Søg', translations: { button: { buttonText: 'Søg' } } },
                    fr: {
                        placeholder: 'Rechercher',
                        translations: { button: { buttonText: 'Rechercher' } },
                    },
                    pl: {
                        placeholder: 'Szukaj',
                        translations: { button: { buttonText: 'Szukaj' } },
                    },
                    ru: { placeholder: 'Поиск', translations: { button: { buttonText: 'Поиск' } } },
                    de: { placeholder: 'Suchen', translations: { button: { buttonText: 'Suchen' } } },
                    tr: { placeholder: 'Ara', translations: { button: { buttonText: 'Ara' } } },
                },
            },
        },
    },
});
