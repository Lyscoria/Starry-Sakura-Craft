// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Starry Sakura Craft',
  tagline: 'A server for souls to meet and thrive.',
  favicon: 'img/cherry_blossom_tree.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://lyscoria.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Starry-Sakura-Craft/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Lyscoria', // Usually your GitHub org/user name.
  projectName: 'Starry-Sakura-Craft', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/cherry_blossom_tree.jpg',
      navbar: {
        title: 'Starry Sakura Craft',
        logo: {
          src: 'img/cherry_blossom_tree.jpg',
        },
        items: [
          {
            to: 'gallery',
            label: '画廊🌆', 
            position: 'left'
          },
          {
            to: 'docs/plan',
            label: '企划🌟', 
            position: 'left'
          },
          {
            href: 'https://github.com/lyscoria',
            label: 'GitHub',
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
                label: 'Plan',
                to: 'docs/plan',
              },
              {
                label: 'Join',
                to: 'docs/join',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: 'Lie-downCraft',
                href: 'http://47.122.27.73/',
              },
              {
                label: 'LittleSkin',
                href: 'https://littleskin.cn/',
              },
              {
                label: 'Arcaea',
                href: 'https://arcaea.lowiro.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Starry Sakura Craft. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
