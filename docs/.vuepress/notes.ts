import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

// Java
const ToBeABD_Java = defineNoteConfig({
  dir: '1.to-be-a-bd/1.Java/',
  link: '/ToBeABD/Java/',
  sidebar: 'auto',
})

const ToBeABD_Java_MS = defineNoteConfig({
  dir: '1.to-be-a-bd/2.Java微服务/',
  link: '/ToBeABD/Java/Microservices/',
  sidebar: 'auto',
})

// 数据库
const ToBeABD_DB_MySQL = defineNoteConfig({
  dir: '1.to-be-a-bd/10.Database/1.MySQL/',
  link: '/ToBeABD/Database/MySQL/',
  sidebar: 'auto',
})

const ToBeABD_DB_Redis = defineNoteConfig({
  dir: '1.to-be-a-bd/10.Database/2.Redis/',
  link: '/ToBeABD/Database/Redis/',
  sidebar: 'auto',
})

// 计算机基础
const ToBeABD_CF_Linux = defineNoteConfig({
  dir: '1.to-be-a-bd/20.计算机基础/1.Linux/',
  link: '/ToBeABD/ComputerFoundation/Linux/',
  sidebar: 'auto',
})


// 消息队列
const ToBeABD_MQ = defineNoteConfig({
  dir: '1.to-be-a-bd/3.Message-Queue/',
  link: '/ToBeABD/MQ/',
  sidebar: 'auto',
})


export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    ToBeABD_Java, ToBeABD_Java_MS, 
    ToBeABD_DB_MySQL, ToBeABD_DB_Redis, 
    ToBeABD_CF_Linux,
    ToBeABD_MQ],
})
