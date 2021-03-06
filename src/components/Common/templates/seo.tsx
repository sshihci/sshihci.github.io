import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import { SeoQuery } from '~graphql-types'

type SEOProps = {
  title?: string
  description?: string | undefined
  twitterTitle?: string | undefined
  twitterDescription?: string | undefined
  type?: 'website' | 'article'
  robots?: 'noindex' | undefined
  canonical?: string | undefined
}

export const Seo = ({
  title,
  description,
  twitterTitle,
  twitterDescription,
  type = 'website',
  canonical,
  robots,
}: SEOProps): JSX.Element => {
  const { site } = useStaticQuery<SeoQuery>(graphql`
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
          facebook {
            accountId
          }
        }
      }
    }
  `)
  return (
    <Helmet
      defaultTitle={site?.siteMetadata?.title ?? ''}
      titleTemplate={`%s | ${site?.siteMetadata?.title}`}
    >
      <title>{title}</title>

      {canonical && <link href={canonical} rel="canonical" />}

      <meta
        content={description ?? site?.siteMetadata?.description}
        property="description"
      />

      {robots && <meta content={robots} name="robots" />}

      <meta content={title} property="og:title" />

      <meta content={site?.siteMetadata?.title} property="og:site_name" />

      <meta
        content={description ?? site?.siteMetadata?.description}
        property="og:description"
      />

      <meta content={type} property="og:type" />

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

      <meta
        content={site?.siteMetadata?.facebook?.accountId}
        property="fb:admins"
      />
    </Helmet>
  )
}
