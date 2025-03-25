import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '转码笔记', items: [
    {text: "Java", icon: "hugeicons-java",items: [
      {text: "基础", link: '/ToBeABD/Java/'},
      {text: "微服务", link: '/ToBeABD/Java/Microservices/'},
    ]},

    {text: "数据库", icon: "tabler-database", items: [
      {text: "MySQL", link: '/ToBeABD/Database/MySQL/'},
      {text: "Redis", link: '/ToBeABD/Database/Redis/'},
    ]},

    {text: "计算机基础", icon: "iconoir-computer", items: [
      {text: "Linux", link: "/ToBeABD/ComputerFoundation/Linux/"}
    ]},

    {text: "消息队列", icon: "", items: [
      { text: "Kafka", link: "/ToBeABD/MQ/Kafka/" },
      { text: "RabbitMQ", link: "/ToBeABD/MQ/RabbitMQ/" }
    ]},
    
  ]},

  { text: "工具", items: [
    { text: "开发工具", icon: "gg-toolbox",items: [
      { text: "Git", link: "/Tools/DT/Git/" },
      { text: "Docker", link: "/Tools/DT/Docker/" },
    ] },
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
