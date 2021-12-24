import { graphql } from 'gatsby'
import GatsbyLink from 'gatsby-link'
import { NewsListItemFragment as NewsListItemType } from '~graphql-types'

export const NewsListItemFragment = graphql`
  fragment NewsListItem on File {
    name
    childMarkdownRemark {
      frontmatter {
        date
        title
        description
        slug
      }
      excerpt(pruneLength: 50)
    }
  }
`

export const NewsListItem = ({
  name,
  childMarkdownRemark,
}: NewsListItemType): JSX.Element => {
  return (
    <GatsbyLink to={`/news/${childMarkdownRemark?.frontmatter?.slug ?? name}`}>
      <section className="flex flex-row items-end mb-4 border-b border-cyan-600 hover:bg-cyan-50">
        <div className="flex flex-col-reverse flex-shrink-0">
          <p className="py-2 px-6 group-hover:text-gray-700">
            {childMarkdownRemark?.frontmatter?.title}
          </p>

          <p className="font-light text-cyan-600 group-hover:text-cyan-700">
            {childMarkdownRemark?.frontmatter?.date}
          </p>
        </div>

        <p className="py-1 px-3 text-sm">{childMarkdownRemark?.excerpt}</p>
      </section>
    </GatsbyLink>
  )
}
