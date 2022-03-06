import { graphql, PageProps } from 'gatsby'
import { HexagonMap } from '~/components/Common/molecules/HexagonMap'
import { Layout } from '~/components/Common/templates/Layout'
import { Seo } from '~/components/Common/templates/seo'
import ContactForm from '~/components/ContactForm'
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
    site {
      siteMetadata {
        contact {
          googleFormId
          fields {
            name
            belongs
            contactAddress
            body
          }
        }
      }
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

      <Section className="z-0" id="お問い合わせ">
        <HexagonMap className="absolute right-7 bottom-24 -z-10" />

        <Section.Title>お問い合わせ</Section.Title>

        <Section.Body>
          <ContactForm
            action={`https://docs.google.com/forms/u/0/d/e/${data.site?.siteMetadata?.contact?.googleFormId}/formResponse`}
          >
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-8 mb-8">
              <div className="flex flex-col flex-1 gap-3">
                <ContactForm.Field>
                  <ContactForm.Field.Label>名前</ContactForm.Field.Label>

                  <ContactForm.Field.Input
                    name={data.site?.siteMetadata?.contact?.fields?.name}
                    placeholder="山田 太郎"
                    required
                  />
                </ContactForm.Field>

                <ContactForm.Field>
                  <ContactForm.Field.Label>所属</ContactForm.Field.Label>

                  <ContactForm.Field.Input
                    name={data.site?.siteMetadata?.contact?.fields?.belongs}
                    placeholder="横浜市立大学 ヘルスデータサイエンス学科"
                  />
                </ContactForm.Field>

                <ContactForm.Field>
                  <ContactForm.Field.Label>連絡先</ContactForm.Field.Label>

                  <ContactForm.Field.Input
                    name={
                      data.site?.siteMetadata?.contact?.fields?.contactAddress
                    }
                    placeholder="email@example.com 又は 090-1234-5678"
                  />
                </ContactForm.Field>
              </div>

              <div className="flex-1">
                <ContactForm.Field className="h-full">
                  <ContactForm.Field.Label className="lg:sr-only">
                    お問い合わせ内容
                  </ContactForm.Field.Label>

                  <ContactForm.Field.Textarea
                    name={data.site?.siteMetadata?.contact?.fields?.body}
                    placeholder="詳しい内容をお書きください"
                    required
                    rows={4}
                  />
                </ContactForm.Field>
              </div>
            </div>

            <ContactForm.Button className="block mx-auto">
              送信する
            </ContactForm.Button>
          </ContactForm>
        </Section.Body>
      </Section>
    </Layout>
  )
}

export default DataPage
