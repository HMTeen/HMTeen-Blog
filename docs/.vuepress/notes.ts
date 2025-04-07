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

const ToBeABD_CF_OS = defineNoteConfig({
  dir: '1.to-be-a-bd/20.计算机基础/2.操作系统/',
  link: '/ToBeABD/ComputerFoundation/OperatingSystem/',
  sidebar: 'auto',
})


const ToBeABD_CF_CNet = defineNoteConfig({
  dir: '1.to-be-a-bd/20.计算机基础/3.计算机网络/',
  link: '/ToBeABD/ComputerFoundation/ComputerNetwork/',
  sidebar: 'auto',
})

const ToBeABD_CF_DataS = defineNoteConfig({
  dir: '1.to-be-a-bd/20.计算机基础/4.数据结构/',
  link: '/ToBeABD/ComputerFoundation/DataStructure/',
  sidebar: 'auto',
})


// 消息队列
const ToBeABD_MQ_Kafka = defineNoteConfig({
  dir: '1.to-be-a-bd/30.消息队列/1.Kafka/',
  link: '/ToBeABD/MQ/Kafka/',
  sidebar: 'auto',
})

const ToBeABD_MQ_RabbitMQ = defineNoteConfig({
  dir: '1.to-be-a-bd/30.消息队列/10.RabbitMQ/',
  link: '/ToBeABD/MQ/RabbitMQ/',
  sidebar: 'auto',
})


// 笔试和面试
const WTI = defineNoteConfig({
  dir: '5.written-test-and-interview',
  link: '/WTI/',
  sidebar: 'auto',
})


// 开发工具
// Git
const Tools_DT_Git = defineNoteConfig({
  dir: '10.Tools/1.开发工具/1.Git/',
  link: '/Tools/DT/Git/',
  sidebar: 'auto',
})

// Docker
const Tools_DT_Docker = defineNoteConfig({
  dir: '10.Tools/1.开发工具/10.Docker/',
  link: '/Tools/DT/Docker/',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    ToBeABD_Java, ToBeABD_Java_MS, 
    ToBeABD_DB_MySQL, ToBeABD_DB_Redis, 
    ToBeABD_CF_Linux,ToBeABD_CF_OS,ToBeABD_CF_CNet,ToBeABD_CF_DataS,
    ToBeABD_MQ_RabbitMQ ,ToBeABD_MQ_Kafka,
    WTI,
    Tools_DT_Git, Tools_DT_Docker],
})
