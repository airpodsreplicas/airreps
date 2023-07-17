import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'en-US',
  title: "AirReps",
  description: "A community for the discussion and exploration of AirPods clones.",

  lastUpdated: true,
  cleanUrls: true,

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
    ["meta", { property: "og:description", content: "A community for the discussion and exploration of AirPods clones." }],
    ["meta", { property: "og:image", content: "https://airpodsreplicas.com/logo.png" }],
    ["meta", { property: "og:image:width", content: "800" }],
    ["meta", { property: "og:image:height", content: "800" }],
    ["meta", { property: "og:image:alt", content: "AirReps | Ultimate Guide" }],
    ["meta", { property: "og:image:type", content: "image/png" }],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:url", content: "https://airpodsreplicas.com/" }],
    ["meta", { property: "twitter:title", content: "AirReps | Ultimate Guide" }],
    ["meta", { property: "twitter:description", content: "A community for the discussion and exploration of AirPods clones." }],
    ["meta", { property: "twitter:image", content: "https://airpodsreplicas.com/logo.png" }],
    ["meta", { property: "twitter:image:alt", content: "AirReps | Ultimate Guide" }],
    ["meta", { property: "owner", content: "AirReps" }],
    ["meta", { property: "author", content: "AirReps" }]
  ],

  themeConfig: {
    logo: '/logo.png',

    outline: [2, 3],

    editLink: {
      pattern: "https://github.com/TowyTowy/airreps/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: "Released under the GPLv3 License.",
      copyright: `© Copyright ${new Date().getFullYear()} AirReps. All Rights Reserved.`,
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction/overview' }
    ],

    sidebar: [
      {
        text: 'AirReps Ultimate Guide',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/introduction/overview' },
          { text: 'Sellers', link: '/introduction/sellers' },
          { text: 'Packaging', link: '/introduction/packaging' },
          { text: 'Connectivity', link: '/introduction/connectivity' },
          { text: 'Battery Life', link: '/introduction/battery-life' },
          { text: 'Features', link: '/introduction/features' },
          { text: 'ANC Explained', link: '/introduction/anc-explained' },
          { text: 'Build Quality', link: '/introduction/build-quality' },
          { text: 'Sound Quality', link: '/introduction/sound-quality' },
          { text: 'FAQ', link: '/introduction/faq' },
        ],
      },
      {
        text: 'AirReps Dictionary',
        collapsed: false,
        items: [
          { text: 'W2C', link: '/dictionary/w2c' },
          { text: 'Reps/Clones: Replicas', link: '/dictionary/reps-clones' },
          { text: 'Knockoffs', link: '/dictionary/knockoffs' },
          { text: 'GP: Guinea Pig', link: '/dictionary/guinea-pig' },
          { text: 'QC: Quality Control', link: '/dictionary/quality-control' },
          { text: 'LC: Legit Check', link: '/dictionary/legit-check' },
          { text: 'Agent: Freight agent/shipping forwarder', link: '/dictionary/agent' },
          { text: 'Markings', link: '/dictionary/markings' },
          { text: 'Transparency Mode', link: '/dictionary/transparency-mode' },
        ]
      },
      {
        text: 'Version Info',
        collapsed: false,
        items: [
          { text: 'General', link: '/version-info/general' },
          { text: 'AirPods 3', link: '/version-info/airpods-3' },
          { text: 'AirPods 2', link: '/version-info/airpods-2' },
          { text: 'AirPods Pro', link: '/version-info/airpods-pro' },
          { text: 'AirPods Pro 2', link: '/version-info/airpods-pro-2' },
          { text: 'AirPods Max', link: '/version-info/airpods-max' },
          { text: 'FAQ', link: '/version-info/faq' },
        ]
      },
      {
        text: 'Ordering',
        collapsed: false,
        items: [
          { text: 'AliExpress/AliBaba', link: '/ordering#aliexpress-alibaba' },
          { text: 'QC & LC', link: '/ordering#qc-lc' },
        ]
      },
      {
        text: 'Links',
        collapsed: false,
        items: [
          { text: 'Info', link: '/links#info' },
          { text: 'AirPods 3', link: '/links#airpods-2' },
          { text: 'AirPods 2', link: '/links#airpods-pro-gen-2' },
          { text: 'AirPods Pro', link: '/links#airpods-pro' },
          { text: 'AirPods Pro 2', link: '/links#airpods-max' },
          { text: 'AirPods Max', link: '/links#airpods-3' },
          { text: 'FAQ', link: '/links#faq' },
        ]
      },
      {
        text: 'Useful Apps',
        collapsed: false,
        items: [
          { text: 'General', link: '/useful-apps#general' },
        ]
      },
      {
        text: 'Troubleshooting',
        collapsed: false,
        items: [
          { text: 'General', link: '/troubleshooting#general' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://airreps.link/discord' }
    ],

    search: {
      provider: 'local'
    }
  }
})
