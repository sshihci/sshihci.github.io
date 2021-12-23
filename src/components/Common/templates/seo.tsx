import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

type SEOProps = {
  title?: string
  description?: string | undefined
  twitterTitle?: string | undefined
  twitterDescription?: string | undefined
}

export const Seo = ({
  title,
  description,
  twitterTitle,
  twitterDescription,
}: SEOProps): JSX.Element => {
  const { site } = useStaticQuery<GatsbyTypes.SeoQuery>(graphql`
    query Seo {
      site {
        siteMetadata {
          title
          subTitle
          description
          twitter {
            account
            creator
          }
        }
      }
    }
  `)
  return (
    <Helmet
      defaultTitle={site?.siteMetadata?.title}
      titleTemplate={`%s | ${site?.siteMetadata?.title}`}
    >
      <title>{title}</title>

      <meta
        content={description ?? site?.siteMetadata?.description}
        property="description"
      />

      <meta content={title} property="og:title" />

      <meta
        content={description ?? site?.siteMetadata?.description}
        property="og:description"
      />

      <meta content="website" property="og:type" />

      <meta
        content={twitterTitle ?? title ?? site?.siteMetadata?.title}
        property="twitter:title"
      />

      <meta
        content={
          twitterDescription ?? description ?? site?.siteMetadata?.description
        }
        property="twitter:description"
      />

      <meta
        content={site?.siteMetadata?.twitter?.creator}
        property="twitter:creator"
      />

      <meta
        content={site?.siteMetadata?.twitter?.account}
        property="twitter:site"
      />
    </Helmet>
  )
}
