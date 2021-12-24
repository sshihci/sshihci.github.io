import { graphql as graphql, PageProps } from 'gatsby'
import { NewsListItem } from '~/components/Common/organisms/NewsListItem'
import {
  Pagination,
  PaginationRenderItem,
} from '~/components/Common/organisms/Pagination'
import { Layout } from '~/components/Common/templates/Layout'
import { Seo } from '~/components/Common/templates/seo'
import Section from '~/components/Section'
import { NewsItemFragment, NewsPageQuery } from '~graphql-types'

export const query = graphql`
  fragment NewsItem on File {
    id
    ...NewsListItem
  }
  query NewsPage {
    allFile(
      filter: {
        sourceInstanceName: { eq: "news" }
        name: { ne: "sample" }
        extension: { eq: "md" }
        childMarkdownRemark: { frontmatter: { noIndex: { ne: true } } }
      }
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

const keyExtractor = (item: NewsItemFragment) => item.id

const RenderItem: PaginationRenderItem<
  NewsItemFragment,
  Record<string, unknown>
> = ({ item }) => {
  return <NewsListItem {...item} />
}

const NewsPage = ({ data }: PageProps<NewsPageQuery>): JSX.Element => {
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
