import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const ToBeABD_Java = defineNoteConfig({
  dir: '1.to-be-a-bd/1.Java/',
  link: '/ToBeABD/Java/',
  sidebar: 'auto',
})

const ToBeABD_DB_MySQL = defineNoteConfig({
  dir: '1.to-be-a-bd/2.Database/1.MySQL/',
  link: '/ToBeABD/Database/MySQL/',
  sidebar: 'auto',
})

const ToBeABD_DB_Redis = defineNoteConfig({
  dir: '1.to-be-a-bd/2.Database/2.Redis/',
  link: '/ToBeABD/Database/Redis/',
  sidebar: 'auto',
})

const ToBeABD_MQ = defineNoteConfig({
  dir: '1.to-be-a-bd/3.Message-Queue/',
  link: '/ToBeABD/MQ/',
  sidebar: 'auto',
})

//const demoNote = defineNoteConfig({
//  dir: 'demo',
//  link: '/demo',
//  sidebar: ['', 'foo', 'bar'],
//})

//const TA = defineNoteConfig({
//  dir: 'A',
//  link: '/A',
//  sidebar: ['', 'Java', 'Vue'],
//})

//const TB = defineNoteConfig({
//  dir: 'B',
//  link: '/B',
//  sidebar: ['', '后端', '前端'],
//})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [ToBeABD_Java, ToBeABD_DB_MySQL, ToBeABD_DB_Redis, ToBeABD_MQ],
})
