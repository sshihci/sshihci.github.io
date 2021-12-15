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
  ],
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    subTitle: '横浜市立大学 データサイエンス研究科 ヘルスデータサイエンス専攻',
    title: '清水沙友里 研究室',
  },
}

export default config
