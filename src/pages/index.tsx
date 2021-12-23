import { graphql as graphql, PageProps } from 'gatsby'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import { useMemo } from 'react'
import { Link } from '~/components/Common/atoms/Link'
import { HexagonMap } from '~/components/Common/molecules/HexagonMap'
import { File } from '~/components/Common/organisms/File'
import { Layout } from '~/components/Common/templates/Layout'
import { Seo } from '~/components/Common/templates/seo'
import ContactForm from '~/components/ContactForm'
import { ContactFormButton } from '~/components/ContactForm/ContactFormButton'
import Hero from '~/components/Hero'
import Introduction from '~/components/Introduction'
import NewsList from '~/components/NewsList'
import Section from '~/components/Section'

export const query = graphql`
  query IndexPage {
    allFile(
      limit: 3
      filter: { sourceInstanceName: { eq: "news" }, name: { ne: "sample" } }
      sort: { fields: childrenMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        name
        childMarkdownRemark {
          frontmatter {
            date
            title
            description
            slug
          }
        }
      }
    }
    hero: file(sourceInstanceName: { eq: "images" }, name: { eq: "hero" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    topImage: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "top_image" }
    ) {
      childImageSharp {
        gatsbyImageData
      }
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

const IndexPage = ({
  data,
}: PageProps<GatsbyTypes.IndexPageQuery>): JSX.Element => {
  const hero = useMemo(
    () =>
      data.hero?.childImageSharp?.gatsbyImageData &&
      getImage(data.hero.childImageSharp.gatsbyImageData),
    [data.hero?.childImageSharp?.gatsbyImageData],
  )

  const topImage = useMemo(
    () =>
      data.topImage?.childImageSharp?.gatsbyImageData &&
      getImage(data.topImage.childImageSharp.gatsbyImageData),
    [data.topImage?.childImageSharp?.gatsbyImageData],
  )

  return (
    <Layout>
      <Seo />

      <Hero className="mb-8">
        {hero && <Hero.Image alt="" image={hero} />}

        <Hero.Text>
          <span className="text-4xl leading-normal">
            Health Data Science Frontier.
          </span>

          <br />

          <span className="text-5xl leading-normal">
            データで医療を変えていく
          </span>
        </Hero.Text>

        <Hero.Badge>
          <Hero.Badge.Text>
            Big Data <br /> Analysis
          </Hero.Badge.Text>
        </Hero.Badge>

        <HexagonMap className="absolute -bottom-8 left-8" />
      </Hero>

      <Section id="研究内容の紹介">
        <Section.Title>研究内容の紹介</Section.Title>

        <Section.Body>
          <p>研究の目的は〜〜〜</p>
        </Section.Body>
      </Section>

      <Section className="z-0" id="研究者案内">
        <HexagonMap className="absolute top-24 right-12 -z-10" />

        <Section.Title>研究者案内</Section.Title>

        <Section.Body>
          <Introduction>
            <Introduction.Description>
              <Introduction.Name>
                <Introduction.Name.Japanese>
                  清水 沙友里
                </Introduction.Name.Japanese>

                <Introduction.Name.English>
                  Shimizu Sayuri
                </Introduction.Name.English>
              </Introduction.Name>

              <Introduction.MainSubject>
                <Introduction.MainSubject.Label>
                  主要担当科目
                </Introduction.MainSubject.Label>

                <Introduction.MainSubject.Name>
                  ビッグデータ解析
                </Introduction.MainSubject.Name>
              </Introduction.MainSubject>

              <Introduction.Profile>
                経歴やこれまでの業績など簡単に。箇条書きでも文章でも。挨拶などでも。
                経歴やこれまでの業績など簡単に。箇条書きでも文章でも。挨拶などでも。
                経歴やこれまでの業績など簡単に。箇条書きでも文章でも。挨拶などでも。
                経歴やこれまでの業績など簡単に。箇条書きでも文章でも。挨拶などでも。
              </Introduction.Profile>

              <Link className="ml-auto" to="https://researchmap.jp/ssyr">
                リサーチマップはこちら
              </Link>
            </Introduction.Description>

            {topImage && (
              <Introduction.Image alt="清水 沙友里" image={topImage} />
            )}
          </Introduction>
        </Section.Body>
      </Section>

      <Section className="z-0" id="お知らせ">
        <HexagonMap className="absolute bottom-0 left-4 -z-10" />

        <Section.Title>お知らせ</Section.Title>

        <Section.Body>
          <NewsList className="mb-8">
            {data.allFile.nodes.map(({ id, name, childMarkdownRemark }) => (
              <NewsList.Item
                key={id}
                newsId={childMarkdownRemark?.frontmatter?.slug ?? name}
              >
                <NewsList.Item.Title>
                  {childMarkdownRemark?.frontmatter?.title}
                </NewsList.Item.Title>

                <NewsList.Item.Date>
                  {childMarkdownRemark?.frontmatter?.date}
                </NewsList.Item.Date>
              </NewsList.Item>
            ))}
          </NewsList>

          <div className="mx-auto max-w-4xl">
            <Link className="block ml-auto max-w-max" to="/news">
              お知らせ一覧
            </Link>
          </div>
        </Section.Body>
      </Section>

      <Section id="データの更新">
        <Section.Title>データの更新</Section.Title>

        <Section.Body>
          <div className="flex flex-col gap-1 max-w-md">
            <File name="POST.pdf" />

            <File name="郵便番号二次医療圏対応表2017.xlsx" />

            <File name="PHA2017_6月版.xlsx" />

            <File name="HOSPPHA.pdf" />

            <File name="HOSP2017_7月版.xlsx" />
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

            <ContactFormButton className="block mx-auto">
              送信する
            </ContactFormButton>
          </ContactForm>
        </Section.Body>
      </Section>

      <Section>
        <Section.Title>関連リンク</Section.Title>

        <Section.Body>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <a className="block flex-1 md:h-full" href="#">
              <span className="sr-only">
                横浜市立大学 データサイエンス研究科 ヘルスデータサイエンス専攻
              </span>

              <StaticImage
                alt="横浜市立大学 データサイエンス研究科 ヘルスデータサイエンス専攻"
                layout="fullWidth"
                src="../images/HDS.png"
              />
            </a>

            <a className="block flex-1 md:h-full" href="#">
              <span className="sr-only">横浜市立大学</span>

              <StaticImage
                alt="横浜市立大学"
                layout="fullWidth"
                src="../images/YCU.png"
              />
            </a>
          </div>
        </Section.Body>
      </Section>
    </Layout>
  )
}

export default IndexPage
