import { defineConfig } from "vuepress/config";

export default defineConfig({
    locales: {
        '/':{
            lang:'zh-CN',
            title: '测试docs',
            description: '欢迎来到我的文档',
            base:'/test-docs/',
            head: [
                        ['link', { rel: 'icon', href: '/images/logo.png' }]
                    ],
                    alias: {
                        '@alias': '/test-docs',
                    },
        }
    }
})

// module.exports = {
//     lang: 'zh-CN',
//     title: '测试docs',
//     description: '欢迎来到我的文档',
//     base: '/test-docs/',
//     head: [
//         ['link', { rel: 'icon', href: '/images/logo.png' }]
//     ],
//     alias: {
//         '@alias': '/test-docs',
//     },
// }