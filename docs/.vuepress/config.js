const path = require('path')
module.exports = {
    title: 'koa-mongodb-template',
    description: '使用Koa和MongoDB搭建的一个通用的Node.js后台框架，助力前端成为全栈工程师',
    base: '/koa-mongodb-template-site/',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/favicon.ico',
            },
        ],
    ],
    themeConfig: {
        nav: [
            { text: '指南', link: '/guide/' },
            { text: 'Github', link: 'https://github.com/youxiubiji/koa-mongodb-template' },
        ],
        sidebarDepth: 3,
        sidebar: {
            '/guide/': [
                {
                    title: '基础',
                    collapsable: false,
                    children: ['/guide/', '/guide/basis/fast.md'],
                },
            ],
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@public': './public',
                '@vuepress': path.join(__dirname, './images'),
            },
        },
    },
}
