const { description, repository } = require('../../package')
const fs = require('fs');
const path = require('path');

function getSideBar(folder, title) {
    const extension = [".md"];

    const files = fs
        .readdirSync(path.join(`${__dirname}/../${folder}`))
        .filter(
        (item) =>
            item.toLowerCase() != "readme.md" &&
            fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
            extension.includes(path.extname(item))
        )
        .map(x => ['/' + folder + x, x.replace('.md', '')]);
    
    return [{ title: title, children: [...files] }];
}


module.exports = {
    title: 'TARDIS Wiki',
    base: "/tardis-wiki/",
    description,
    
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
        repository,
        logo: '/assets/logo.png',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: true,
        nav: [
            {
                text: 'Wiki',
                link: '/wiki/',
            },
            {
                text: 'Archive',
                link: '/archive/',
            },
        ],
        sidebar: {
            '/archive/': getSideBar('archive/', 'Archive'),
            '/wiki': [...getSideBar('wiki/meta/', 'Meta'), ...getSideBar('wiki/services/', 'Services'), ...getSideBar('wiki/systems/', 'Systems')],
        },
    },
    
    /**
    * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
    */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
