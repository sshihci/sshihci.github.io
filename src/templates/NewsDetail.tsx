import { graphql, navigate, PageProps } from 'gatsby'
import GatsbyLink from 'gatsby-link'
import { useMemo } from 'react'
import { Layout } from '~/components/Common/templates/Layout'
import { Seo } from '~/components/Common/templates/seo'
import Section from '~/components/Section'
import { NewsDetailPageQuery } from '~graphql-types'

export const query = graphql`
  fragment NewsDetail on MarkdownRemark {
    html
    excerpt(pruneLength: 80)
    frontmatter {
      title
      date
    }
  }

  query NewsDetailPage($slug: String!, $name: String!) {
    bySlug: file(
      childMarkdownRemark: { frontmatter: { slug: { eq: $slug } } }
    ) {
      id
      childMarkdownRemark {
        ...NewsDetail
      }
    }
    byName: file(name: { eq: $name }) {
      id
      childMarkdownRemark {
        ...NewsDetail
      }
    }
  }
`

const NewsDetail = ({ data }: PageProps<NewsDetailPageQuery>): JSX.Element => {
  const file = useMemo(() => {
    return data.bySlug || data.byName
  }, [data.byName, data.bySlug])

  if (!file) {
    void navigate('/404')
    return <Layout />
  }

  return (
    <Layout>
      <Seo
        description={file.childMarkdownRemark?.excerpt}
        title={`${file.childMarkdownRemark?.frontmatter?.title} | お知らせ一覧`}
        type="article"
      />

      <Section>
        <Section.Title>お知らせ</Section.Title>

        <Section.Body>
          <div className="mx-auto mb-3 max-w-3xl">
            <GatsbyLink
              className="mb-2 underline underline-offset-4 decoration-cyan-600"
              to="/news"
            >
              お知らせ一覧へ
            </GatsbyLink>
          </div>

          <article className="mx-auto max-w-3xl prose-h1:font-bold prose">
            <h1>{file.childMarkdownRemark?.frontmatter?.title}</h1>

            <p className="">{file.childMarkdownRemark?.frontmatter?.date}</p>

            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: file.childMarkdownRemark?.html ?? '',
              }}
            />
          </article>
        </Section.Body>
      </Section>
    </Layout>
  )
}

export default NewsDetail
