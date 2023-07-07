// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

const navbar_config = {
  title: '地瓜的数字花园',
  logo: {
    alt: 'My Site Logo',
    // src: 'img/logo.svg',
    src: 'img/hoohan.png',
  },
  items: [
    {
      type: 'docSidebar',
      sidebarId: 'MathSidebar',
      position: 'left',
      label: '数学相关',
    },
    {
      type: 'docSidebar',
      sidebarId: 'CSTheorySidebar',
      position: 'left',
      label: '计算机理论',
    },
    {
      type: 'docSidebar',
      sidebarId: 'CSPracticeSidebar',
      position: 'left',
      label: '计算机实践',
    },
    { to: '/blog', label: '博客', position: 'left' },
    {
      href: 'https://github.com/hoohan',
      label: 'GitHub',
      position: 'right',
    },
  ],
}

const footer_copyright = `
<p>
  <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>
  <br />
  若无特殊说明，本站所有内容采用<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">知识共享署名 4.0 国际许可协议</a>进行许可
  <br>
  <a href="http://beian.miit.gov.cn/">冀ICP备19000089号</a> 
  <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=13043302000128">冀公网安备13043302000128号</a>
  <br>
  Copyright © ${new Date().getFullYear()} Hoohan. Made with ❤️ and <a href="https://docusaurus.io/">Docusaurus</a>.
</p>
`

const footer_config = {
  style: 'light',
  links: [
    {
      title: '网站地图',
      items: [
        {
          label: '数学相关',
          to: '/docs/math/linear-algebra-1',
        },
        {
          label: '计算机理论',
          to: '/docs/category/algorithm',
        },
        {
          label: '计算机实践',
          to: '/docs/category/devops',
        },
        {
          label: '博客列表',
          to: '/blog',
        },
      ],
    },
    {
      title: '社交媒体',
      items: [
        {
          label: 'Bilibili',
          href: 'https://space.bilibili.com/3248507',
        },
        {
          label: '微信公众号：立方体地瓜',
          href: 'https://weixin.qq.com',
        },
      ],
    },
    {
      title: '开源仓库',
      items: [
        {
          label: 'Gitee 码云',
          href: 'https://gitee.com/hoohan',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/hoohan',
        },
      ],
    },
    {
      title: '友情链接',
      items: [
        {
          label: 'Tabing010102\'s Blog',
          href: 'https://blog.gyx.moe',
        },
        {
          label: '泫言',
          href: 'https://blog.cugxuan.cn',
        },
        {
          label: '沐雨橙舟の秘密基地',
          href: 'https://mosarin.tech',
        },
        {
          label: '全部友链',
          to: '/more-to-read',
        },
      ],
    },
  ],
  copyright: footer_copyright,
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '地瓜的数字花园',
  tagline: 'Hoohan\'s digital garden',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hoohan.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hoohan', // Usually your GitHub org/user name.
  projectName: 'digital-garden', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hoohan/digital-garden/tree/main',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hoohan/digital-garden/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg', // 1200*675
      navbar: navbar_config,
      footer: footer_config,
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
