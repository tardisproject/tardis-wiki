const { description } = require('../../package')

module.exports = {
    title: 'TARDIS Wiki',
    description: description,
    
    head: [
        ['meta', { name: 'theme-color', content: '#0000d6' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    
    /**
    * Theme configuration, here is the default theme configuration for VuePress.
    *
    * ref - https://v1.vuepress.vuejs.org/theme/default-theme-config.html
    */
    themeConfig: {
        repo: '',
        logo: '/assets/logo.png',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: true,
        nav: [
            {
                text: 'Guide',
                link: '/guide/',
            },
            {
                text: 'Config',
                link: '/config/'
            },
            {
                text: 'VuePress',
                link: 'https://v1.vuepress.vuejs.org'
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Guide',
                    collapsable: false,
                    children: [
                        '',
                        'using-vue',
                    ]
                }
            ],
        }
    },
    
    /**
    * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
    */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
