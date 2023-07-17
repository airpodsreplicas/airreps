import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/airreps/',
  lang: 'en-US',
  title: "AirReps",
  description: "A community for the discussion and exploration of AirPods clones.",

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ["link", { rel: "icon", sizes: "any", href: "/favicon.ico" }],
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
          { text: 'Overview', link: 'introduction/overview' },
          { text: 'Sellers', link: 'introduction/sellers' },
          { text: 'Packaging', link: 'introduction/packaging' },
          { text: 'Connectivity', link: 'introduction/connectivity' },
          { text: 'Battery Life', link: 'introduction/battery-life' },
          { text: 'Features', link: 'introduction/features' },
          { text: 'ANC Explained', link: 'introduction/anc-explained' },
          { text: 'Build Quality', link: 'introduction/build-quality' },
          { text: 'Sound Quality', link: 'introduction/sound-quality' },
          { text: 'FAQ', link: 'introduction/faq' },
        ],
      },
      {
        text: 'AirReps Dictionary',
        collapsed: false,
        items: [
          { text: 'W2C', link: 'dictionary/w2c' },
          { text: 'Reps/Clones: Replicas', link: 'dictionary/reps-clones' },
          { text: 'Knockoffs', link: 'dictionary/knockoffs' },
          { text: 'GP: Guinea Pig', link: 'dictionary/gp' },
          { text: 'QC: Quality Control', link: 'dictionary/qc' },
          { text: 'LC: Legit Check', link: 'dictionary/lc' },
          { text: 'Agent: Freight agent/shipping forwarder', link: 'dictionary/agent' },
          { text: 'Markings', link: 'dictionary/markings' },
          { text: 'Transparency Mode', link: 'dictionary/transparency-mode' },
        ]
      },
      {
        text: 'Version Info',
        collapsed: false,
        items: [
          { text: 'General', link: 'version-info#general' },
          { text: 'AirPods 3', link: 'version-info#airpods-3' },
          { text: 'AirPods 2', link: 'version-info#airpods-2' },
          { text: 'AirPods Pro', link: 'version-info#airpods-pro' },
          { text: 'AirPods Pro 2', link: 'version-info#airpods-pro-2' },
          { text: 'AirPods Max', link: 'version-info#airpods-max' },
          { text: 'FAQ', link: 'version-info#faq' },
        ]
      },
      {
        text: 'Ordering',
        collapsed: false,
        items: [
          { text: 'AliExpress/AliBaba', link: 'ordering#aliexpress-alibaba' },
          { text: 'QC & LC', link: 'ordering#qc-lc' },
        ]
      },
      {
        text: 'Links',
        collapsed: false,
        items: [
          { text: 'Info', link: 'links#info' },
          { text: 'AirPods 3', link: 'links#airpods-2' },
          { text: 'AirPods 2', link: 'links#airpods-pro-gen-2' },
          { text: 'AirPods Pro', link: 'links#airpods-pro' },
          { text: 'AirPods Pro 2', link: 'links#airpods-max' },
          { text: 'AirPods Max', link: 'links#airpods-3' },
          { text: 'FAQ', link: 'links#faq' },
        ]
      },
      {
        text: 'Useful Apps',
        collapsed: false,
        items: [
          { text: 'General', link: 'useful-apps#general' },
        ]
      },
      {
        text: 'Troubleshooting',
        collapsed: false,
        items: [
          { text: 'General', link: 'troubleshooting#general' },
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
