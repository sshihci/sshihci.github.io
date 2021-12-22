import { GatsbyNode } from 'gatsby'

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
  }

export const createResolvers: GatsbyNode['createResolvers'] = ({
  createResolvers: createResolversFn,
}) => {
  createResolversFn({
    SiteSiteMetadataContact: {
      googleFormId: {
        resolve: (source: GatsbyTypes.SiteSiteMetadataContact) => {
          const { googleFormUrl } = source
          if (!googleFormUrl) return null
          // https://docs.google.com/forms/u/0/d/e/1FAIpQLSdIlc0UtgbxsrB7KaGIP21jTFWAjPPpPsxL1tT-e_AAg7e6Mw/formResponse
          // 1FAIpQLSdIlc0UtgbxsrB7KaGIP21jTFWAjPPpPsxL1tT-e_AAg7e6Mw

          const match =
            /^https:\/\/docs\.google\.com\/forms\/d\/e\/(?<id>.*)\/viewform$/.exec(
              googleFormUrl,
            )
          if (!match) {
            throw new Error(
              `Invalid googleFormUrl: ${googleFormUrl}.\n` +
                `"https://docs.google.com/forms/d/e/XXXXXXX/viewform" という形式で入力してください`,
            )
          }
          return match.groups?.['id'] ?? ''
        },
        type: 'String',
      },
    },
  })
}
