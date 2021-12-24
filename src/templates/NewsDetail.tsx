import { graphql, navigate, PageProps } from 'gatsby'
import GatsbyLink from 'gatsby-link'
import 'katex/dist/katex.min.css'
import { useMemo } from 'react'
import { File } from '~/components/Common/organisms/File'
import { Markdown } from '~/components/Common/organisms/Markdown'
import { Layout } from '~/components/Common/templates/Layout'
import { Seo } from '~/components/Common/templates/seo'
import Section from '~/components/Section'
import { isNotNullable } from '~/lib/is-not-nullable'
import { NewsDetailPageQuery } from '~graphql-types'

export const query = graphql`
  fragment NewsDetail on MarkdownRemark {
    htmlAst
    excerpt(pruneLength: 80)
    frontmatter {
      title
      attachment
      date
      noIndex
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
        robots={
          file.childMarkdownRemark?.frontmatter?.noIndex ? 'noindex' : undefined
        }
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

          <article className="prose-img:object-contain mx-auto prose-img:mx-auto max-w-3xl prose-h1:font-bold prose">
            <h1>{file.childMarkdownRemark?.frontmatter?.title}</h1>

            <p className="">{file.childMarkdownRemark?.frontmatter?.date}</p>

            {file.childMarkdownRemark?.frontmatter?.attachment && (
              <div>
                <p>資料</p>

                <div className="flex flex-row flex-wrap gap-2">
                  {file.childMarkdownRemark.frontmatter.attachment
                    .filter(isNotNullable)
                    .map((attachment) => (
                      <File
                        className="inline-block max-w-md no-underline"
                        key={attachment}
                        name={attachment}
                      />
                    ))}
                </div>
              </div>
            )}

            <Markdown htmlAst={file.childMarkdownRemark?.htmlAst ?? ''} />
          </article>
        </Section.Body>
      </Section>
    </Layout>
  )
}

export default NewsDetail
