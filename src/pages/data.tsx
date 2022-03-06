import { graphql, PageProps } from 'gatsby'
import { Layout } from '~/components/Common/templates/Layout'
import { Seo } from '~/components/Common/templates/seo'
import { DataSectionBlock } from '~/components/DataSection/DataSectionBlock'
import { DataSectionNavigation } from '~/components/DataSection/DataSectionNavigation'
import Section from '~/components/Section'
import { isNotNullable } from '~/lib/is-not-nullable'
import { DataPageQuery } from '~graphql-types'

export const query = graphql`
  fragment Data on ConfigYaml {
    id
    year
    files {
      name
      date
      pdf {
        relativePath
      }
      excel {
        relativePath
      }
    }
  }
  query DataPage {
    allConfigYaml(sort: { fields: year, order: DESC }) {
      nodes {
        id
        year
      }
    }
    configYaml {
      ...Data
    }
  }
`

const DataPage = ({ data }: PageProps<DataPageQuery>): JSX.Element => {
  return (
    <Layout>
      <Seo
        canonical={`/data/${data.configYaml?.year}`}
        title={`${data.configYaml?.year}年度の資料`}
      />

      <Section>
        <Section.Title>{`${data.configYaml?.year}年度の資料`}</Section.Title>

        <Section.Body>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="max-w-sm md:max-w-xs">
              <DataSectionNavigation
                allConfig={data.allConfigYaml.nodes}
                currentConfig={data.configYaml}
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-8 mb-4 max-w-lg">
                {data.configYaml?.files?.filter(isNotNullable).map((file) => (
                  <DataSectionBlock file={file} key={file.name} />
                ))}
              </div>
            </div>
          </div>
        </Section.Body>
      </Section>
    </Layout>
  )
}

export default DataPage
