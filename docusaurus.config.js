module.exports = {
  title: 'Effector',
  tagline: 'The state manager',
  url: 'https://v20.effector.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'effector', // Usually your GitHub org/user name.
  projectName: 'effector', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    image: 'img/comet.png',
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
    },
    navbar: {
      title: 'Effector',
      logo: {
        alt: 'Effector Logo',
        src: 'img/comet.png',
      },
      links: [
        {to: 'docs/introduction/installation', label: 'Docs', position: 'left'},
        {to: 'docs/api/effector/effector', label: 'API', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://share.effector.dev',
          label: 'Try',
          position: 'left',
        },
        {
          href: 'https://changelog.effector.dev',
          label: 'Changelog',
          position: 'right',
        },
        {
          href: 'https://twitter.com/effectorjs',
          label: 'Twitter',
          position: 'right',
        },
        {
          href: 'https://github.com/effector/effector',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: "https://v21.effector.dev",
          label: 'v21',
          position: 'right',
        },
        {
          href: "https://v22.effector.dev",
          label: 'v22',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/introduction/installation',
            },
            {
              label: 'API',
              to: 'docs/api/effector/effector',
            },
            {
              label: 'Changelog',
              to: 'https://changelog.effector.dev',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/effectorjs',
            },
            {
              label: 'Telegram 🇷🇺',
              href: 'https://t.me/effector_ru',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/effector_en',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Github',
              to: 'https://github.com/effector/effector',
            },
          ],
        },
      ],
      logo: {
        alt: 'Effector - the state manager',
        src: 'img/comet.png',
        href: 'https://github.com/effector/effector',
      },
      copyright: `Copyright © ${new Date().getFullYear()} zerobias`,
    },
  },
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://effector--canary.s3-eu-west-1.amazonaws.com/effector/effector.umd.js',
    '/js/splash.js',
    '/js/try-button.js'
  ],
  stylesheets: ['/css/try-button.css'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: './docs',
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: false,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
