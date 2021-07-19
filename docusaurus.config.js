/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

const versions = require('./versions.json');

const {fbContent, isInternal} = require('internaldocs-fb-helpers');

module.exports = {
  title: 'Худалдаа Хөгжлийн Банк',
  tagline: 'Дотооддоо хөгжүүлсэн API сервисүүдээ танилцуулж байна.',
  url: '/',
  baseUrl: '/',
  organizationName: '',
  projectName: 'Худалдаа Хөгжлийн Банк',
  scripts: [
    {
      src:
        'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgdx2NnQ5W6bg3p3XoJtoYjHDMWZrhV7glVKgJgKV87xxk.js',
      defer: true,
    },
  ],
  
  customFields: {
    users: [
      {
        caption: 'МОБИКОМ',
        image: '/img/logos/1.jpg',
        infoLink: 'https://www.1stdibs.com/',
        pinned: true,
        description: 'Дэлгэрэнгүй',
      },
      {
        caption: 'ЮНИТЕЛ',
        image: '/img/logos/2.png',
        infoLink: 'http://artsy.github.io/open-source/',
        pinned: true,
        description: 'Дэлгэрэнгүй',
      },
      {
        caption: 'QPAY',
        image: '/img/logos/3.png',
        infoLink: 'https://github.com/entria',
        pinned: true,
        description: 'Дэлгэрэнгүй',
      },
      {
        caption: 'SHOPPY',
        image: '/img/logos/4.png',
        infoLink: 'https://code.facebook.com',
        pinned: true,
        description:
          'Дэлгэрэнгүй',
      }
    ],
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  presets: [
    [
      require.resolve('docusaurus-plugin-internaldocs-fb/docusaurus-preset'),
      {
        docs: {
          showLastUpdateAuthor: fbContent({
            internal: false,
            external: true,
          }),
          showLastUpdateTime: fbContent({
            internal: false,
            external: true,
          }),
          editUrl: 'https://github.com/facebook/relay/tree/main/website',

          path: './docs/',

          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: fbContent({
            internal: 'current',
            external: versions[0],
          }),
          onlyIncludeVersions: fbContent({
            internal: ['current'],
            external: [
              'current',
              ...versions.filter(
                version => version !== 'experimental' && version !== 'classic',
              ),
            ],
          }),
          versions: {
            current: {
              label: 'Next 🚧',
            },
          },
        },
        blog: {},
        theme: {
          customCss: [
            '../src/css/docusaurus-1.css',
            '../src/css/prism.css',
            '../src/css/customTheme.css',
            '../src/css/custom.css',
          ],
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects: function(toPath) {
          if (toPath.startsWith('/docs/')) {
            const docPath = toPath.substring(6);
            const fromPaths = ['/docs/en/' + docPath];
            if (isInternal()) {
              fromPaths.push('/docs/next/' + docPath);
              fromPaths.push('/docs/en/next/' + docPath);
            }
            return fromPaths;
          }
        },
        redirects: [
          {
            to: '/docs/',
            from: [
              '/docs/en/introduction-to-relay',
              '/docs/introduction-to-relay',
            ],
          },
          {
            to: '/docs/getting-started/step-by-step-guide/',
            from: ['/docs/en/quick-start-guide', '/docs/quick-start-guide'],
          },
          {
            to: '/docs/getting-started/step-by-step-guide/',
            from: [
              '/docs/en/experimental/step-by-step',
              '/docs/experimental/step-by-step',
            ],
          },
          {
            to: '/docs/guides/testing-relay-with-preloaded-queries/',
            from: ['/docs/guides/testing-relay-with-preloaded-components/'],
          },
          {
            to: '/docs/guides/compiler/',
            from: [
              '/docs/en/graphql-in-relay.html',
              '/docs/en/graphql-in-relay',
              '/docs/graphql-in-relay.html',
              '/docs/graphql-in-relay',
            ],
          },
          {
            to: '/docs/principles-and-architecture/thinking-in-graphql/',
            from: [
              '/docs/en/thinking-in-graphql.html',
              '/docs/en/thinking-in-graphql',
              '/docs/thinking-in-graphql.html',
              '/docs/thinking-in-graphql',
            ],
          },
          {
            to: '/docs/principles-and-architecture/thinking-in-relay/',
            from: [
              '/docs/en/thinking-in-relay.html',
              '/docs/en/thinking-in-relay',
              '/docs/thinking-in-relay.html',
              '/docs/thinking-in-relay',
            ],
          },
          {
            to: '/docs/guides/type-emission/',
            from: [
              '/docs/en/type-emission',
              '/docs/v3.0.0/type-emission',
              '/docs/type-emission',
            ],
          },
          {
            to: '/docs/guides/client-schema-extensions/',
            from: [
              '/docs/en/local-state-management',
              '/docs/en/next/local-state-management',
              '/docs/local-state-management',
              '/docs/next/local-state-management',
            ],
          },
          {
            to: '/docs/api-reference/store/',
            from: [
              '/docs/en/relay-store',
              '/docs/en/next/relay-store',
              '/docs/relay-store',
              '/docs/next/relay-store',
            ],
          },
          {
            to: '/docs/guided-tour/updating-data/graphql-mutations/',
            from: [
              '/docs/en/mutations',
              '/docs/en/next/mutations',
              '/docs/mutations',
              '/docs/next/mutations',
            ],
          },
        ],
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'TDBM',
      style: 'primary',
      hideOnScroll: false,
      items: [
        {
          to: 'docs/',
          label: 'API & Service',
          position: 'left',
        },
        {
          to: 'Login/',
          label: 'Нэвтрэх',
          position: 'left',
        }
      ],
    },

    footer: {
      links: [
        {
          title: 'Бидний тухай',
          items: [
            {
              label: 'Бидний тухай',
              href: '/docs',
              target: '_self',
            },
          ],
        },
        {
          title: 'Санал хүсэлт',
          items: [
            {
              label: ' Санал хүсэлт',
              href: '/users',
              target: '_self',
            },
          ],
        },
        {
          title: 'Үйлчилгээний нөхцөл',
          items: [
            {
              label: ' Үйлчилгээний нөхцөл',
              href: '/users',
              target: '_self',
            }
          ],
        },
        {
          title: 'Холбоо барих',
          items: [
            {
              label: ' Холбоо барих',
              href: '/users',
              target: '_self',
            }
          ],
        },
      ],
      logo: {
        src: 'img/tdb_logo.png',
      },
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      defaultLanguage: 'javascript',
    },
    algolia: {
      apiKey: '3d7d5825d50ea36bca0e6ad06c926f06',
      indexName: 'relay',
      contextualSearch: true,
    },
    gtag: {
      trackingID: 'UA-44373548-50',
    },
    googleAnalytics: {
      trackingID: 'UA-44373548-50',
    },
  },
};
