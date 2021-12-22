import type { GatsbyConfig } from 'gatsby'
import { resolve } from 'path'

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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
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
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
      resolve: `gatsby-source-filesystem`,
    },
    {
      options: {
        emitPluginDocuments: {
          [`${__dirname}/src/__generated__/gatsby-plugin-documents.graphql`]:
            true,
        },
        emitSchema: {
          [`${__dirname}/src/__generated__/gatsby-introspection.json`]: true,
        },
      },
      resolve: `gatsby-plugin-typegen`,
    },
    {
      options: {
        icon: './src/images/icon.png',

        name: '清水沙友里 研究室',

        short_name: 'sshihci',

        start_url: '/',
      },
      resolve: `gatsby-plugin-manifest`,
    },
  ],
  siteMetadata: {
    contact: {
      fields: {
        belongs: 'entry.1239432921',
        body: 'entry.911358195',
        contactAddress: 'entry.527437244',
        name: 'entry.814214239',
      },
      googleFormUrl:
        'https://docs.google.com/forms/d/e/1FAIpQLSdIlc0UtgbxsrB7KaGIP21jTFWAjPPpPsxL1tT-e_AAg7e6Mw/viewform',
    },
    siteUrl: 'https://www.yourdomain.tld',
    subTitle: '横浜市立大学 データサイエンス研究科 ヘルスデータサイエンス専攻',
    title: '清水沙友里 研究室',
  },
}

export default config
