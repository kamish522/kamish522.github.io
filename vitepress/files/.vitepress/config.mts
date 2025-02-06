import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Kamish",
  cleanUrls: true,
  base: '/docs/',
  themeConfig: {
    sidebar: [
      {
        items: [
          { text: 'Начало работы', link: '/docs/' }
        ]
      }, 
      {
        text: 'Правовые документы',
        items: [
          { text: 'Политика конфиденциальности', link: '/docs/privacy' },
          { text: 'Условия использования', link: '/docs/tos' }
        ]
      }
    ],
  }
})
