import type { GatsbyConfig } from 'gatsby'
import { resolve } from 'path'

const siteMetadata = {
  contact: {
    fields: {
      belongs: 'entry.1233574601',
      body: 'entry.1697686716',
      contactAddress: 'entry.2084412549',
      name: 'entry.1026815018',
    },
    googleFormUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLScGI_Dm7IJ6iG3F5imaR2XxjKiIajCoLqgcLmB93Zu6iYOvSw/viewform',
  },
  description: `横浜市立大学 データサイエンス研究科 ヘルスデータサイエンス専攻 の 清水沙友里です。`,
  facebook: {
    accountId: '2320530151368497',
  },
  newsPerPage: 5, // お知らせ一覧で１ページで表示されるお知らせの数
  siteUrl: 'https://sshihci.github.io/',
  subTitle: '横浜市立大学 データサイエンス研究科 ヘルスデータサイエンス専攻',
  title: '清水沙友里 研究室',
  twitter: {
    account: 'ycuhds',
    creator: '3594914',
  },
}

const config: GatsbyConfig = {
  plugins: [
    `gatsby-plugin-postcss`,
    {
      options: {
        alias: {
          '~': resolve(__dirname, 'src'),
        },
      },
      resolve: `gatsby-plugin-alias-imports`,
    },
    `gatsby-plugin-image`,
    {
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            options: {
              exclude: '目次',
              fromHeading: 3,
              tight: true,
            },
            resolve: `gatsby-remark-table-of-contents`,
          },
          `gatsby-remark-katex`,
          {
            options: {
              backgroundColor: 'transparent',
              disableBgImage: true,
              quality: 100,
              wrapperStyle: 'max-height: 384px;overflow: hidden;',
            },
            resolve: `gatsby-remark-images`,
          },
        ],
      },
      resolve: `gatsby-transformer-remark`,
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,
    {
      options: {
        ignore: [`${__dirname}/src/__generated__/*.ts`],
        name: `news`,
        path: `${__dirname}/src/contents/news/`,
      },
      resolve: `gatsby-source-filesystem`,
    },
    {
      options: {
        ignore: [`${__dirname}/src/__generated__/*.ts`],
        name: `data`,
        path: `${__dirname}/src/contents/data/`,
      },
      resolve: `gatsby-source-filesystem`,
    },
    {
      options: {
        ignore: [`${__dirname}/src/__generated__/*.ts`],
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
      resolve: `gatsby-source-filesystem`,
    },
    {
      options: {
        codegenConfig: {
          maybeValue: 'T | undefined',
        },
      },
      resolve: `gatsby-plugin-graphql-codegen`,
    },
    {
      options: {
        display: 'standalone',
        icon: './src/images/icon.png',
        name: '清水沙友里 研究室',
        short_name: 'sshihci',
        start_url: '/',
      },
      resolve: `gatsby-plugin-manifest`,
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-preact`,
    {
      options: {
        extensions: ['css', 'html', 'js'],
      },
      resolve: `gatsby-plugin-brotli`,
    },
    {
      options: {
        extensions: ['css', 'html', 'js'],
      },
      resolve: `gatsby-plugin-zopfli`,
    },
  ],
  siteMetadata,
}

export default config
