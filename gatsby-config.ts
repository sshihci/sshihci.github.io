import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  plugins: [`gatsby-plugin-postcss`],
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: '清水研究室のHP',
  },
}

export default config
