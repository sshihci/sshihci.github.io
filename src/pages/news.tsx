import { graphql as graphql, PageProps } from 'gatsby'
import GatsbyLink from 'gatsby-link'
import {
  Pagination,
  PaginationRenderItem,
} from '~/components/Common/organisms/Pagination'
import { Layout } from '~/components/Common/templates/Layout'
import { Seo } from '~/components/Common/templates/seo'
import Section from '~/components/Section'

export const query = graphql`
  fragment NewsItem on File {
    id
    childMarkdownRemark {
      frontmatter {
        date
        title
        description
      }
      excerpt(pruneLength: 50)
    }
  }
  query NewsPage {
    allFile(
      filter: { sourceInstanceName: { eq: "news" }, name: { ne: "sample" } }
      sort: { fields: childrenMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      nodes {
        ...NewsItem
      }
    }
    site {
      siteMetadata {
        newsPerPage
      }
    }
  }
`

const keyExtractor = (item: GatsbyTypes.NewsItemFragment) => item.id

const RenderItem: PaginationRenderItem<
  GatsbyTypes.NewsItemFragment,
  Record<string, unknown>
> = ({ item }) => {
  return (
    <GatsbyLink
      className="flex flex-row items-end mb-4 border-b border-cyan-600 hover:bg-cyan-50"
      to={`/news/${item.id}`}
    >
      <div className="flex flex-col-reverse flex-shrink-0">
        <p className="py-2 px-6 group-hover:text-gray-700">
          {item.childMarkdownRemark?.frontmatter?.title}
        </p>

        <p className="font-light text-cyan-600 group-hover:text-cyan-700">
          {item.childMarkdownRemark?.frontmatter?.date}
        </p>
      </div>

      <p className="py-1 px-3 text-sm">{item.childMarkdownRemark?.excerpt}</p>
    </GatsbyLink>
  )
}

const NewsPage = ({
  data,
}: PageProps<GatsbyTypes.NewsPageQuery>): JSX.Element => {
  return (
    <Layout>
      <Seo title="お知らせ一覧" />

      <Section>
        <Section.Title>お知らせ一覧</Section.Title>

        <Section.Body>
          <Pagination
            className="mx-auto max-w-4xl"
            commonProps={{}}
            items={data.allFile.nodes}
            keyExtractor={keyExtractor}
            listClassName="mb-4"
            perPage={data.site?.siteMetadata?.newsPerPage ?? 5}
            renderItem={RenderItem}
          />
        </Section.Body>
      </Section>
    </Layout>
  )
}

export default NewsPage
