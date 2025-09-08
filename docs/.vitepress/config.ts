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
    ["meta", { property: "og:description", content: "A community for the discussion and exploration of AirPods clones. Discover affordable alternatives and check out our Ultimate Guide for detailed insights. Start exploring the world of AirPods clones today!" }],
    ["meta", { property: "og:image", content: "https://airpodsreplicas.com/logo.png" }],
    ["meta", { property: "og:image:width", content: "400" }],
    ["meta", { property: "og:image:height", content: "400" }],
    ["meta", { property: "og:image:alt", content: "AirReps | Ultimate Guide" }],
    ["meta", { property: "og:image:type", content: "image/png" }],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:url", content: "https://airpodsreplicas.com/" }],
    ["meta", { property: "twitter:title", content: "AirReps | Ultimate Guide" }],
    ["meta", { property: "twitter:description", content: "A community for the discussion and exploration of AirPods clones. Discover affordable alternatives and check out our Ultimate Guide for detailed insights. Start exploring the world of AirPods clones today!" }],
    ["meta", { property: "twitter:image", content: "https://airpodsreplicas.com/logo.png" }],
    ["meta", { property: "twitter:image:alt", content: "AirReps | Ultimate Guide" }],
    ["meta", { property: "owner", content: "AirReps" }],
    ["meta", { property: "author", content: "AirReps" }]
  ],

  themeConfig: {
    logo: '/logo.png',

    outline: [2, 3],

    editLink: {
      pattern: "https://github.com/AirPodsReplicas/AirReps/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: "Released under the GPLv3 License.",
      copyright: `© Copyright ${new Date().getFullYear()} AirReps. All Rights Reserved.`,
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Ultimate Guide', link: '/introduction/overview' },
      { text: 'Links', link: '/links/info' }
    ],

    sidebar: [
      {
        text: 'Ultimate Guide',
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
          { text: 'Sound Quality', link: '/introduction/sound-quality' }
        ],
      },
      {
        text: 'AirReps Dictionary',
        collapsed: true,
        items: [
          { text: 'W2C', link: '/dictionary/w2c' },
          { text: 'Reps/Clones: Replicas', link: '/dictionary/reps-clones' },
          { text: 'Fake AirPods', link: '/dictionary/fake-airpods' },
          { text: 'Knockoffs', link: '/dictionary/knockoffs' },
          { text: 'GP: Guinea Pig', link: '/dictionary/guinea-pig' },
          { text: 'QC: Quality Control', link: '/dictionary/quality-control' },
          { text: 'LC: Legit Check', link: '/dictionary/legit-check' },
          { text: 'Agent: Freight agent/shipping forwarder', link: '/dictionary/agent' },
          { text: 'Markings', link: '/dictionary/markings' }
        ]
      },
      {
        text: 'Version Info',
        collapsed: true,
        items: [
          { text: 'General', link: '/version-info/general' },
          { text: 'AirPods 2', link: '/version-info/airpods-2' },
          { text: 'AirPods 3', link: '/version-info/airpods-3' },
          { text: 'AirPods 4', link: '/version-info/airpods-4' },
          { text: 'AirPods Pro', link: '/version-info/airpods-pro' },
          { text: 'AirPods Pro 2', link: '/version-info/airpods-pro-2' },
          { text: 'AirPods Max', link: '/version-info/airpods-max' }
        ]
      },
      {
        text: 'Ordering',
        collapsed: true,
        items: [
          { text: 'How to buy', link: '/ordering/how-to-buy' },
          { text: 'QC & LC', link: '/ordering/qc-lc' }
        ]
      },
      {
        text: 'Links',
        collapsed: false,
        items: [
          { text: 'Info', link: '/links/info' },
          { text: 'AirPods 2', link: '/links/airpods-2' },
          { text: 'AirPods 3', link: '/links/airpods-3' },
          { text: 'AirPods 4', link: '/links/airpods-4' },
          { text: 'AirPods Pro', link: '/links/airpods-pro' },
          { text: 'AirPods Pro 2', link: '/links/airpods-pro-2' },
          { text: 'AirPods Max', link: '/links/airpods-max' }
        ]
      },
      {
        text: 'Troubleshooting',
        collapsed: false,
        items:  [
          {text: 'AirReps Incompatibility with iCloud', link: '/troubleshooting/AirReps-Incompatibility-with-iCloud'},
          {text: 'MacOS Volume adjustment bug', link: '/troubleshooting/MacOS-volume-adjustment-bug'},
          {text: 'Other Common Bugs', link: '/troubleshooting/other-common-bugs'},
        ]   
      },
      {
        items: [
          { text: 'Useful Apps', link: '/useful-apps' },
        ]
      },
      {
        items: [
          { text: 'Contributing', link: '/contributing' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/airreps' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Reddit</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>'
        },
        link: 'https://reddit.com/r/airreps',
        ariaLabel: 'Reddit'
      },
      { icon: 'youtube', link: 'https://www.youtube.com/@AirReps' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: process.env.APP_ID,
        apiKey: process.env.API_KEY,
        indexName: 'airpodsreplicas'
      }
    }
  }
})
