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
        name: `news`,
        path: `${__dirname}/src/contents/news/`,
      },
      resolve: `gatsby-source-filesystem`,
    },
  ],
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: '清水研究室のHP',
  },
}

export default config
