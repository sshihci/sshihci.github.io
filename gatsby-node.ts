import { GatsbyNode } from 'gatsby'
import { resolve } from 'path'
import { SiteSiteMetadataContact } from '~graphql-types'

export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = ({
  actions,
}) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  })
}

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  ({ actions }) => {
    actions.createTypes(/* GraphQL */ `
      type SiteSiteMetadataContact {
        googleFormId: String
      }
    `)
    actions.createTypes(/* GraphQL */ `
      enum ImageCropFocus {
        CENTER
        NORTH
        NORTHEAST
        EAST
        SOUTHEAST
        SOUTH
        SOUTHWEST
        WEST
        NORTHWEST
        ENTROPY
        ATTENTION
        TOP_RIGHT
      }
    `)
  }

export const createResolvers: GatsbyNode['createResolvers'] = ({
  createResolvers: createResolversFn,
  reporter,
}) => {
  createResolversFn({
    SiteSiteMetadataContact: {
      googleFormId: {
        resolve: (source: SiteSiteMetadataContact) => {
          const { googleFormUrl } = source
          if (!googleFormUrl) return null
          // https://docs.google.com/forms/u/0/d/e/1FAIpQLSdIlc0UtgbxsrB7KaGIP21jTFWAjPPpPsxL1tT-e_AAg7e6Mw/formResponse
          // 1FAIpQLSdIlc0UtgbxsrB7KaGIP21jTFWAjPPpPsxL1tT-e_AAg7e6Mw

          const match =
            /^https:\/\/docs\.google\.com\/forms\/d\/e\/(?<id>.*)\/viewform$/.exec(
              googleFormUrl,
            )
          if (!match) {
            reporter.panicOnBuild(
              `Invalid googleFormUrl: ${googleFormUrl}.\n` +
                `"https://docs.google.com/forms/d/e/XXXXXXX/viewform" という形式で入力してください`,
            )
            return null
          }
          return match.groups?.['id'] ?? ''
        },
        type: 'String',
      },
    },
  })
}

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const result = await graphql<{
    allNews: {
      nodes: {
        name: string
        childMarkdownRemark: { frontmatter: { slug: string } }
      }[]
    }
  }>(/* GraphQL */ `
    query CreatePages {
      allNews: allFile(
        filter: {
          sourceInstanceName: { eq: "news" }
          name: { ne: "sample" }
          extension: { eq: "md" }
        }
        sort: {
          fields: childrenMarkdownRemark___frontmatter___date
          order: DESC
        }
      ) {
        nodes {
          name
          childMarkdownRemark {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data?.allNews.nodes.forEach(
    ({
      name,
      childMarkdownRemark: {
        frontmatter: { slug },
      },
    }) => {
      actions.createPage({
        component: resolve('./src/templates/NewsDetail.tsx'),
        context: {
          name,
          slug,
        },
        path: `/news/${slug || name}`,
      })
    },
  )
}
