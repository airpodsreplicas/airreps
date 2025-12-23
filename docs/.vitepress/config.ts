import { defineConfig, type DefaultTheme } from 'vitepress'
import { redirectPlugin } from './plugins/redirect'

// Shared sidebar structure - used to generate locale-specific sidebars
function getSidebar(lang: string): DefaultTheme.SidebarItem[] {
  const t = translations[lang] || translations.en

  return [
    {
      text: t.sidebar.ultimateGuide,
      collapsed: false,
      items: [
        { text: t.sidebar.overview, link: `${lang === 'en' ? '' : `/${lang}`}/introduction/overview` },
        { text: t.sidebar.sellers, link: `${lang === 'en' ? '' : `/${lang}`}/introduction/sellers` },
        { text: t.sidebar.packaging, link: `${lang === 'en' ? '' : `/${lang}`}/introduction/packaging` },
        { text: t.sidebar.connectivity, link: `${lang === 'en' ? '' : `/${lang}`}/introduction/connectivity` },
        { text: t.sidebar.batteryLife, link: `${lang === 'en' ? '' : `/${lang}`}/introduction/battery-life` },
        { text: t.sidebar.features, link: `${lang === 'en' ? '' : `/${lang}`}/introduction/features` },
        { text: t.sidebar.ancExplained, link: `${lang === 'en' ? '' : `/${lang}`}/introduction/anc-explained` },
        { text: t.sidebar.buildQuality, link: `${lang === 'en' ? '' : `/${lang}`}/introduction/build-quality` },
        { text: t.sidebar.soundQuality, link: `${lang === 'en' ? '' : `/${lang}`}/introduction/sound-quality` },
        { text: t.sidebar.dictionary, link: `${lang === 'en' ? '' : `/${lang}`}/introduction/dictionary` }
      ],
    },
    {
      text: t.sidebar.versionInfo,
      collapsed: true,
      items: [
        { text: t.sidebar.general, link: `${lang === 'en' ? '' : `/${lang}`}/version-info/general` },
        { text: 'AirPods 2', link: `${lang === 'en' ? '' : `/${lang}`}/version-info/airpods-2` },
        { text: 'AirPods 3', link: `${lang === 'en' ? '' : `/${lang}`}/version-info/airpods-3` },
        { text: 'AirPods 4', link: `${lang === 'en' ? '' : `/${lang}`}/version-info/airpods-4` },
        { text: 'AirPods Pro', link: `${lang === 'en' ? '' : `/${lang}`}/version-info/airpods-pro` },
        { text: 'AirPods Pro 2', link: `${lang === 'en' ? '' : `/${lang}`}/version-info/airpods-pro-2` },
        { text: 'AirPods Pro 3', link: `${lang === 'en' ? '' : `/${lang}`}/version-info/airpods-pro-3` },
        { text: 'AirPods Max', link: `${lang === 'en' ? '' : `/${lang}`}/version-info/airpods-max` }
      ]
    },
    {
      text: t.sidebar.ordering,
      collapsed: true,
      items: [
        { text: t.sidebar.howToBuy, link: `${lang === 'en' ? '' : `/${lang}`}/ordering/how-to-buy` },
        { text: t.sidebar.qcLc, link: `${lang === 'en' ? '' : `/${lang}`}/ordering/qc-lc` }
      ]
    },
    {
      text: t.sidebar.links,
      collapsed: false,
      items: [
        { text: t.sidebar.info, link: `${lang === 'en' ? '' : `/${lang}`}/links/info` },
        { text: 'AirPods 2', link: `${lang === 'en' ? '' : `/${lang}`}/links/airpods-2` },
        { text: 'AirPods 3', link: `${lang === 'en' ? '' : `/${lang}`}/links/airpods-3` },
        { text: 'AirPods 4', link: `${lang === 'en' ? '' : `/${lang}`}/links/airpods-4` },
        { text: 'AirPods Pro', link: `${lang === 'en' ? '' : `/${lang}`}/links/airpods-pro` },
        { text: 'AirPods Pro 2', link: `${lang === 'en' ? '' : `/${lang}`}/links/airpods-pro-2` },
        { text: 'AirPods Pro 3', link: `${lang === 'en' ? '' : `/${lang}`}/links/airpods-pro-3` },
        { text: 'AirPods Max', link: `${lang === 'en' ? '' : `/${lang}`}/links/airpods-max` }
      ]
    },
    {
      text: t.sidebar.troubleshooting,
      collapsed: true,
      items: [
        { text: t.sidebar.icloudIncompatibility, link: `${lang === 'en' ? '' : `/${lang}`}/troubleshooting/AirReps-Incompatibility-with-iCloud` },
        { text: t.sidebar.otherBugs, link: `${lang === 'en' ? '' : `/${lang}`}/troubleshooting/other-common-bugs` },
        { text: t.sidebar.macosVolume, link: `${lang === 'en' ? '' : `/${lang}`}/troubleshooting/macOS-volume-slider-fixup` },
      ]
    },
    {
      items: [
        { text: t.sidebar.usefulApps, link: `${lang === 'en' ? '' : `/${lang}`}/useful-apps` },
      ]
    },
    {
      items: [
        { text: t.sidebar.contributing, link: `${lang === 'en' ? '' : `/${lang}`}/contributing` }
      ]
    }
  ]
}

function getNav(lang: string): DefaultTheme.NavItem[] {
  const t = translations[lang] || translations.en
  const prefix = lang === 'en' ? '' : `/${lang}`

  return [
    { text: t.nav.home, link: `${prefix}/` },
    { text: t.nav.ultimateGuide, link: `${prefix}/introduction/overview` },
    { text: t.nav.links, link: `${prefix}/links/info` }
  ]
}

// Translation strings for each locale
const translations: Record<string, {
  nav: { home: string; ultimateGuide: string; links: string };
  sidebar: {
    ultimateGuide: string; overview: string; sellers: string; packaging: string;
    connectivity: string; batteryLife: string; features: string; ancExplained: string;
    buildQuality: string; soundQuality: string; dictionary: string; versionInfo: string;
    general: string; ordering: string; howToBuy: string; qcLc: string; links: string;
    info: string; troubleshooting: string; icloudIncompatibility: string;
    otherBugs: string; macosVolume: string; usefulApps: string; contributing: string;
  };
  footer: { message: string; copyright: string };
  editLink: string;
}> = {
  en: {
    nav: { home: 'Home', ultimateGuide: 'Ultimate Guide', links: 'Links' },
    sidebar: {
      ultimateGuide: 'Ultimate Guide', overview: 'Overview', sellers: 'Sellers',
      packaging: 'Packaging', connectivity: 'Connectivity', batteryLife: 'Battery Life',
      features: 'Features', ancExplained: 'ANC Explained', buildQuality: 'Build Quality',
      soundQuality: 'Sound Quality', dictionary: 'Dictionary', versionInfo: 'Version Info',
      general: 'General', ordering: 'Ordering', howToBuy: 'How to buy', qcLc: 'QC & LC',
      links: 'Links', info: 'Info', troubleshooting: 'Troubleshooting',
      icloudIncompatibility: 'AirReps Incompatibility with iCloud',
      otherBugs: 'Other Common Bugs', macosVolume: 'Volume Slider is Ineffective on MacOS',
      usefulApps: 'Useful Apps', contributing: 'Contributing'
    },
    footer: { message: 'Released under the GPLv3 License.', copyright: `© Copyright ${new Date().getFullYear()} AirReps. All Rights Reserved.` },
    editLink: 'Edit this page on GitHub'
  },
  pt: {
    nav: { home: 'Início', ultimateGuide: 'Guia Definitivo', links: 'Links' },
    sidebar: {
      ultimateGuide: 'Guia Definitivo', overview: 'Visão Geral', sellers: 'Vendedores',
      packaging: 'Embalagem', connectivity: 'Conectividade', batteryLife: 'Duração da Bateria',
      features: 'Recursos', ancExplained: 'ANC Explicado', buildQuality: 'Qualidade de Construção',
      soundQuality: 'Qualidade de Som', dictionary: 'Dicionário', versionInfo: 'Info de Versão',
      general: 'Geral', ordering: 'Pedidos', howToBuy: 'Como Comprar', qcLc: 'QC & LC',
      links: 'Links', info: 'Info', troubleshooting: 'Solução de Problemas',
      icloudIncompatibility: 'Incompatibilidade com iCloud',
      otherBugs: 'Outros Bugs Comuns', macosVolume: 'Controle de Volume no MacOS',
      usefulApps: 'Apps Úteis', contributing: 'Contribuir'
    },
    footer: { message: 'Lançado sob a Licença GPLv3.', copyright: `© Copyright ${new Date().getFullYear()} AirReps. Todos os Direitos Reservados.` },
    editLink: 'Editar esta página no GitHub'
  },
  es: {
    nav: { home: 'Inicio', ultimateGuide: 'Guía Definitiva', links: 'Enlaces' },
    sidebar: {
      ultimateGuide: 'Guía Definitiva', overview: 'Descripción General', sellers: 'Vendedores',
      packaging: 'Embalaje', connectivity: 'Conectividad', batteryLife: 'Duración de Batería',
      features: 'Características', ancExplained: 'ANC Explicado', buildQuality: 'Calidad de Construcción',
      soundQuality: 'Calidad de Sonido', dictionary: 'Diccionario', versionInfo: 'Info de Versión',
      general: 'General', ordering: 'Pedidos', howToBuy: 'Cómo Comprar', qcLc: 'QC & LC',
      links: 'Enlaces', info: 'Info', troubleshooting: 'Solución de Problemas',
      icloudIncompatibility: 'Incompatibilidad con iCloud',
      otherBugs: 'Otros Errores Comunes', macosVolume: 'Control de Volumen en MacOS',
      usefulApps: 'Apps Útiles', contributing: 'Contribuir'
    },
    footer: { message: 'Publicado bajo la Licencia GPLv3.', copyright: `© Copyright ${new Date().getFullYear()} AirReps. Todos los Derechos Reservados.` },
    editLink: 'Editar esta página en GitHub'
  },
  da: {
    nav: { home: 'Hjem', ultimateGuide: 'Ultimativ Guide', links: 'Links' },
    sidebar: {
      ultimateGuide: 'Ultimativ Guide', overview: 'Oversigt', sellers: 'Sælgere',
      packaging: 'Emballage', connectivity: 'Forbindelse', batteryLife: 'Batterilevetid',
      features: 'Funktioner', ancExplained: 'ANC Forklaret', buildQuality: 'Byggekvalitet',
      soundQuality: 'Lydkvalitet', dictionary: 'Ordbog', versionInfo: 'Versionsinfo',
      general: 'Generelt', ordering: 'Bestilling', howToBuy: 'Sådan Køber Du', qcLc: 'QC & LC',
      links: 'Links', info: 'Info', troubleshooting: 'Fejlfinding',
      icloudIncompatibility: 'iCloud Inkompatibilitet',
      otherBugs: 'Andre Almindelige Fejl', macosVolume: 'Lydstyrke på MacOS',
      usefulApps: 'Nyttige Apps', contributing: 'Bidrag'
    },
    footer: { message: 'Udgivet under GPLv3 Licensen.', copyright: `© Copyright ${new Date().getFullYear()} AirReps. Alle Rettigheder Forbeholdes.` },
    editLink: 'Rediger denne side på GitHub'
  },
  fr: {
    nav: { home: 'Accueil', ultimateGuide: 'Guide Ultime', links: 'Liens' },
    sidebar: {
      ultimateGuide: 'Guide Ultime', overview: 'Aperçu', sellers: 'Vendeurs',
      packaging: 'Emballage', connectivity: 'Connectivité', batteryLife: 'Autonomie',
      features: 'Fonctionnalités', ancExplained: 'ANC Expliqué', buildQuality: 'Qualité de Fabrication',
      soundQuality: 'Qualité Audio', dictionary: 'Dictionnaire', versionInfo: 'Info Version',
      general: 'Général', ordering: 'Commandes', howToBuy: 'Comment Acheter', qcLc: 'QC & LC',
      links: 'Liens', info: 'Info', troubleshooting: 'Dépannage',
      icloudIncompatibility: 'Incompatibilité avec iCloud',
      otherBugs: 'Autres Bugs Courants', macosVolume: 'Volume sur MacOS',
      usefulApps: 'Apps Utiles', contributing: 'Contribuer'
    },
    footer: { message: 'Publié sous Licence GPLv3.', copyright: `© Copyright ${new Date().getFullYear()} AirReps. Tous Droits Réservés.` },
    editLink: 'Modifier cette page sur GitHub'
  }
}

// Reddit SVG icon
const redditIcon = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Reddit</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "AirReps",
  description: "A community for the discussion and exploration of AirPods clones.",

  lastUpdated: true,
  cleanUrls: true,

  // Auto-generate sitemap with all locales for SEO
  sitemap: {
    hostname: 'https://airpodsreplicas.com',
    transformItems: (items) => {
      // Add locale alternates (hreflang) for each page
      return items.map(item => {
        // Determine if this is a locale page or root
        const locales = ['es', 'pt', 'da', 'fr']
        const isLocalePage = locales.some(l => item.url.startsWith(`/${l}/`))

        // Find the base path (without locale prefix)
        let basePath = item.url
        for (const locale of locales) {
          if (item.url.startsWith(`/${locale}/`)) {
            basePath = item.url.replace(`/${locale}`, '')
            break
          }
        }

        // Add language alternates for SEO
        const links = [
          { lang: 'en', url: `https://airpodsreplicas.com${basePath}` },
          { lang: 'es', url: `https://airpodsreplicas.com/es${basePath}` },
          { lang: 'pt', url: `https://airpodsreplicas.com/pt${basePath}` },
          { lang: 'da', url: `https://airpodsreplicas.com/da${basePath}` },
          { lang: 'fr', url: `https://airpodsreplicas.com/fr${basePath}` },
          { lang: 'x-default', url: `https://airpodsreplicas.com${basePath}` }
        ]

        return {
          ...item,
          links
        }
      })
    }
  },

  vite: {
    plugins: [redirectPlugin()]
  },

  head: [
    ["link", { rel: "icon", sizes: "any", href: "/favicon.ico" }],
    ['meta', { name: 'theme-color', content: '#EC645D' }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "AirReps Ultimate Guide" }],
    ["meta", { name: "application-name", content: "AirReps Ultimate Guide" }],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
    ["meta", { name: "theme-color", content: "#EC645D" }],
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1" }],
    ["meta", { property: "og:title", content: "AirReps | Ultimate Guide" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://airpodsreplicas.com/" }],
    ["meta", { property: "og:description", content: "A community for the discussion and exploration of AirPods clones. Discover affordable alternatives and check out our Ultimate Guide for detailed insights. Start exploring the world of AirPods clones today!" }],
    ["meta", { property: "og:image", content: "https://airpodsreplicas.com/logo.webp" }],
    ["meta", { property: "og:image:width", content: "400" }],
    ["meta", { property: "og:image:height", content: "400" }],
    ["meta", { property: "og:image:alt", content: "AirReps | Ultimate Guide" }],
    ["meta", { property: "og:image:type", content: "image/webp" }],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:url", content: "https://airpodsreplicas.com/" }],
    ["meta", { property: "twitter:title", content: "AirReps | Ultimate Guide" }],
    ["meta", { property: "twitter:description", content: "A community for the discussion and exploration of AirPods clones. Discover affordable alternatives and check out our Ultimate Guide for detailed insights. Start exploring the world of AirPods clones today!" }],
    ["meta", { property: "twitter:image", content: "https://airpodsreplicas.com/logo.webp" }],
    ["meta", { property: "twitter:image:alt", content: "AirReps | Ultimate Guide" }],
    ["meta", { property: "owner", content: "AirReps" }],
    ["meta", { property: "author", content: "AirReps" }]
  ],

  // Dynamically inject hreflang tags into every page for multi-language SEO
  transformHead: ({ pageData }) => {
    const { relativePath } = pageData
    // Remove locale prefix from path to get base path
    let basePath = relativePath.replace(/\.md$/, '')
    if (basePath === 'index') basePath = ''

    // Check if current page is in a locale
    const locales = ['es', 'pt', 'da', 'fr']
    for (const locale of locales) {
      if (basePath.startsWith(`${locale}/`)) {
        basePath = basePath.replace(`${locale}/`, '')
        break
      }
    }

    // Always ensure leading slash, but handle root index correctly
    const canonicalBase = basePath ? `/${basePath}` : ''

    return [
      ['link', { rel: 'alternate', hreflang: 'en', href: `https://airpodsreplicas.com${canonicalBase}` }],
      ['link', { rel: 'alternate', hreflang: 'es', href: `https://airpodsreplicas.com/es${canonicalBase}` }],
      ['link', { rel: 'alternate', hreflang: 'pt', href: `https://airpodsreplicas.com/pt${canonicalBase}` }],
      ['link', { rel: 'alternate', hreflang: 'da', href: `https://airpodsreplicas.com/da${canonicalBase}` }],
      ['link', { rel: 'alternate', hreflang: 'fr', href: `https://airpodsreplicas.com/fr${canonicalBase}` }],
      ['link', { rel: 'alternate', hreflang: 'x-default', href: `https://airpodsreplicas.com${canonicalBase}` }],
      ['link', { rel: 'canonical', href: `https://airpodsreplicas.com/${relativePath.replace(/\.md$/, '').replace(/index$/, '')}` }]
    ]
  },

  // Locale configuration for i18n
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: getNav('en'),
        sidebar: getSidebar('en'),
        editLink: { pattern: "https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path", text: translations.en.editLink },
        footer: { message: translations.en.footer.message, copyright: translations.en.footer.copyright },
        docFooter: { prev: 'Previous page', next: 'Next page' },
        outline: { label: 'On this page' }
      }
    },
    pt: {
      label: 'Português',
      lang: 'pt-BR',
      description: 'Uma comunidade para discussão e exploração de clones de AirPods.',
      themeConfig: {
        nav: getNav('pt'),
        sidebar: getSidebar('pt'),
        editLink: { pattern: "https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path", text: translations.pt.editLink },
        footer: { message: translations.pt.footer.message, copyright: translations.pt.footer.copyright },
        docFooter: { prev: 'Página anterior', next: 'Próxima página' },
        outline: { label: 'Nesta página' }
      }
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      description: 'Una comunidad para la discusión y exploración de clones de AirPods.',
      themeConfig: {
        nav: getNav('es'),
        sidebar: getSidebar('es'),
        editLink: { pattern: "https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path", text: translations.es.editLink },
        footer: { message: translations.es.footer.message, copyright: translations.es.footer.copyright },
        docFooter: { prev: 'Página anterior', next: 'Página siguiente' },
        outline: { label: 'En esta página' }
      }
    },
    da: {
      label: 'Dansk',
      lang: 'da-DK',
      description: 'Et fællesskab for diskussion og udforskning af AirPods-kloner.',
      themeConfig: {
        nav: getNav('da'),
        sidebar: getSidebar('da'),
        editLink: { pattern: "https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path", text: translations.da.editLink },
        footer: { message: translations.da.footer.message, copyright: translations.da.footer.copyright },
        docFooter: { prev: 'Forrige side', next: 'Næste side' },
        outline: { label: 'På denne side' }
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      description: 'Une communauté pour la discussion et l\'exploration des clones d\'AirPods.',
      themeConfig: {
        nav: getNav('fr'),
        sidebar: getSidebar('fr'),
        editLink: { pattern: "https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path", text: translations.fr.editLink },
        footer: { message: translations.fr.footer.message, copyright: translations.fr.footer.copyright },
        docFooter: { prev: 'Page précédente', next: 'Page suivante' },
        outline: { label: 'Sur cette page' }
      }
    }
  },

  themeConfig: {
    logo: '/logo.webp',

    outline: [2, 3],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/airreps' },
      { icon: { svg: redditIcon }, link: 'https://reddit.com/r/airreps', ariaLabel: 'Reddit' },
      { icon: 'youtube', link: 'https://www.youtube.com/@AirReps' }
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
          pt: { placeholder: 'Pesquisar', translations: { button: { buttonText: 'Pesquisar' } } },
          es: { placeholder: 'Buscar', translations: { button: { buttonText: 'Buscar' } } },
          da: { placeholder: 'Søg', translations: { button: { buttonText: 'Søg' } } },
          fr: { placeholder: 'Rechercher', translations: { button: { buttonText: 'Rechercher' } } }
        }
      }
    }
  }
})
