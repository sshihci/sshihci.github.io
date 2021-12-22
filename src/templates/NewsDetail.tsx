import { graphql, PageProps } from 'gatsby'
import GatsbyLink from 'gatsby-link'
import { Layout } from '~/components/Common/templates/Layout'
import Section from '~/components/Section'

export const query = graphql`
  query NewsDetailPage($id: String!) {
    file(id: { eq: $id }) {
      id
      childMarkdownRemark {
        html
        frontmatter {
          title
          date
        }
      }
    }
  }
`

const NewsDetail = ({
  data,
}: PageProps<GatsbyTypes.NewsDetailPageQuery>): JSX.Element => {
  return (
    <Layout>
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
            <h1>{data.file?.childMarkdownRemark?.frontmatter?.title}</h1>

            <p className="">
              {data.file?.childMarkdownRemark?.frontmatter?.date}
            </p>

            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: data.file?.childMarkdownRemark?.html ?? '',
              }}
            />
          </article>
        </Section.Body>
      </Section>
    </Layout>
  )
}

export default NewsDetail
