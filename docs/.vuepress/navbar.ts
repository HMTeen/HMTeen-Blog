import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '转码笔记', items: [
    {text: "Java", link: '/ToBeABD/Java/'},
    {text: "数据库", link: '/ToBeABD/Database/'},
    {text: "消息队列", link: '/ToBeABD/MQ/'},


  ]},
  { text: '博客', link: '/blog/' },
  //{ text: '标签', link: '/blog/tags/' },
  //{ text: '归档', link: '/blog/archives/' },
  //{
  //  text: '笔记',
  //  items: [
  //    { text: '示例', link: '/notes/demo/README.md' }, 
  //    { text: 'A', link: '/notes/A/README.md' },
  //    { text: 'B', link: '/notes/B/后端.md' }
  //  ]
  //},
])
