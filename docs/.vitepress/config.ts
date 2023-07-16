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
      { text: 'Introduction', link: '/introduction' }
    ],

    sidebar: [
      {
        items: [
          { text: 'Introduction', link: 'introduction#airreps-ultimate-guide' },
          { text: 'Get Started', link: 'introduction#get-started' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://airreps.link/discord' }
    ],

    search: {
      provider: 'local'
    }
  }
})
