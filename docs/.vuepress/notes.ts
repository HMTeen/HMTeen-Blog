import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const ToBeABD_Java = defineNoteConfig({
  dir: '1.to-be-a-bd/1.Java/',
  link: '/ToBeABD/Java/',
  sidebar: 'auto',
})

const ToBeABD_Database = defineNoteConfig({
  dir: '1.to-be-a-bd/2.Database/',
  link: '/ToBeABD/Database/',
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
  notes: [ToBeABD_Java, ToBeABD_Database, ToBeABD_MQ],
})
