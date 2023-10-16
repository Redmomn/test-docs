import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '测试docs',
    description: '欢迎来到我的文档',
    base: '/test-docs/',
    head: [
        ['link', { rel: 'icon', href: 'https://www.lovenie.icu/blog/wp-content/uploads/2023/09/宁宁.jpg' }]
    ],

    // 主题和它的配置
    theme: defaultTheme({
        repo: 'Redmomn/test-docs',
        docsRepo: 'Redmomn/test-docs',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkText: "编辑此页",
        lastUpdated: true,
        lastUpdatedText: '上一次编辑',
        contributors: true,
        tip: "提示",
        warning: "注意",
        danger: "警告",
        backToHome: "返回首页",
        // navbar: [
        //     { text: 'Guide', children: ['/guide/', '/guide/quick_start.md', '/guide/config.md', '/guide/eventfilter.md', '/guide/file.md', '/guide/achieve.md', '/guide/docker.md'] },
        //     { text: 'API', children: ['/api/', '/api/guild.md'] },
        //     { text: 'Event', children: ['/event/', '/event/guild.md'] },
        //     { text: 'CQ Code', link: '/cqcode/' },
        //     { text: 'Guild', link: '/guild/'},
        //     { text: 'Reference', children: ['/reference/', '/reference/data_struct.md'] },
        //     { text: 'Advanced', link: '/advanced/'},
        //     { text: 'FAQ', link: '/faq/' }
        // ],
        sidebar: "auto",
    }),

    plugins:[
        
    ]

})

