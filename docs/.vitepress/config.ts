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

    sidebar: [
      {
        text: 'myBlog',
        items: [
          { text: 'Single effective antenna', link: '/Single effective antenna' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/elapsing/elapsing.github.io' }
    ]
  }
})
