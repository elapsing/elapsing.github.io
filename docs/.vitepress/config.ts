import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yiyang Zhang",
  description: "A Personal Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],
    i18nRouting: true,

    sidebar: [
      {
        text: 'MIMO-NOMA',
        items: [
          { text: 'Single effective antenna', link: '/Single effective antenna' },
          { text: 'TDMA and ZFB schemes', link: '/TDMA and ZFB schemes' },
          { text: 'Notations', link: '/Notations' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/elapsing/elapsing.github.io' }
    ]
  }
})
