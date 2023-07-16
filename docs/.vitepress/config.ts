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
      { text: 'Get Started', link: '/introduction/getting-started' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'placeholder', link: '/placeholder' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://airreps.link/discord' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: 'PROJNMA8TO',
        apiKey: '37640f53e8d6a5b32878335837780508',
        indexName: 'AirReps'
      }
    }
  }
})
