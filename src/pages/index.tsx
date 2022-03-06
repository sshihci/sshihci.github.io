import { graphql, PageProps } from 'gatsby'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import { useMemo } from 'react'
import { Link } from '~/components/Common/atoms/Link'
import { HexagonMap } from '~/components/Common/molecules/HexagonMap'
import { NewsListItem } from '~/components/Common/organisms/NewsListItem'
import { Layout } from '~/components/Common/templates/Layout'
import { Seo } from '~/components/Common/templates/seo'
import ContactForm from '~/components/ContactForm'
import { DataSectionBlock } from '~/components/DataSection/DataSectionBlock'
import Hero from '~/components/Hero'
import Introduction from '~/components/Introduction'
import NewsList from '~/components/NewsList'
import ResearchList from '~/components/ResearchList'
import Section from '~/components/Section'
import { isNotNullable } from '~/lib/is-not-nullable'
import { IndexPageQuery } from '~graphql-types'

export const query = graphql`
  query IndexPage {
    allFile(
      limit: 3
      filter: {
        sourceInstanceName: { eq: "news" }
        name: { ne: "sample" }
        extension: { eq: "md" }
        childMarkdownRemark: { frontmatter: { noIndex: { ne: true } } }
      }
      sort: { fields: childrenMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        ...NewsListItem
      }
    }
    heroMobile: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "hero-mobile" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 80)
      }
    }
    heroDesktop: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "hero-desktop" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 80)
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
    latestFiles: configYaml {
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

const IndexPage = ({ data }: PageProps<IndexPageQuery>): JSX.Element => {
  const heroMobile = useMemo(
    () =>
      data.heroMobile?.childImageSharp?.gatsbyImageData &&
      getImage(data.heroMobile.childImageSharp.gatsbyImageData),
    [data.heroMobile?.childImageSharp?.gatsbyImageData],
  )

  const heroDesktop = useMemo(
    () =>
      data.heroDesktop?.childImageSharp?.gatsbyImageData &&
      getImage(data.heroDesktop.childImageSharp.gatsbyImageData),
    [data.heroDesktop?.childImageSharp?.gatsbyImageData],
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
        {heroMobile && (
          <Hero.Image
            alt=""
            desktopImage={heroDesktop}
            mobileImage={heroMobile}
          />
        )}

        <Hero.Text>
          <span className="text-xl sm:text-2xl md:text-4xl leading-normal">
            Health Data Science Frontier.
          </span>

          <br />

          <span className="text-3xl sm:text-4xl md:text-5xl leading-normal">
            データで医療を変えていく
          </span>
        </Hero.Text>

        <HexagonMap className="absolute -bottom-8 left-8" />
      </Hero>

      <Section id="ご挨拶">
        <Section.Title>ご挨拶</Section.Title>

        <Section.Body>
          <ResearchList>
            <ResearchList.Item>
              <ResearchList.Item.Title>研究について</ResearchList.Item.Title>

              <ResearchList.Item.Body>
                私は情報系がバックグラウンドで、大学院から医歯学総合研究科に進み、
                疫学や統計に関する勉強をしていました。以来、医療・福祉政策やヘルスサービスリサーチを研究テーマとしています。
                研究は、量的な分析に加えて、諸外国の医療制度に関する研究や、
                医療政策に関する質的研究も行っています。
                ここ数年は、統計学に加えて機械学習など新たな手法へのチャレンジをしています。
                その他の活動として、データの利活用に資するオープンサイエンスの推進、統計学の研究会などを行っています。
              </ResearchList.Item.Body>
            </ResearchList.Item>

            <ResearchList.Item>
              <ResearchList.Item.Title>学生の方へ</ResearchList.Item.Title>

              <ResearchList.Item.Body>
                HDSに入学される方は、既に何らかの分野のプロフェッショナルですので、
                私はその方の修士課程やその先の目標に応じて、
                異なった視点から研究を組み立てていくプロセスをアシストしていきたいと思っています。
                HDSを卒業された後には、その領域のリーダーとして活躍する人になってほしいと思っていますし、
                入学された方にはそのポテンシャルがあると実感しています。
                ヘルスサービスリサーチの対象となる研究分野は限定されていないので、
                多様な領域の方と議論できるといいなと思っています。
              </ResearchList.Item.Body>
            </ResearchList.Item>
          </ResearchList>
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
                医療は、サイエンスが背景にありつつも、
                現実世界では必ずしもゼロイチでわけられない曖昧な領域を含んでおり、
                その国特有のものの考え方が反映されている非常に面白い分野だと感じています。
                医療業界も、近い未来には他の分野の企業や人が参入する新たな時代が来るのではないでしょうか。
                医療のあり方を記述し、世の中を俯瞰して見るような研究も好きですが、
                そういった時代の変化を捉える分析も行っていきたいと考えています。
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
          {data.allFile.nodes.length > 0 ? (
            <NewsList className="mb-8">
              {data.allFile.nodes.map((news) => (
                <NewsListItem key={news.id} {...news} />
              ))}
            </NewsList>
          ) : (
            <p>お知らせはまだありません</p>
          )}

          <Link className="block ml-auto max-w-max" to="/news">
            お知らせ一覧
          </Link>
        </Section.Body>
      </Section>

      <Section id="資料">
        <Section.Title>{`${data.latestFiles?.year}年度の資料`}</Section.Title>

        <Section.Body>
          <div className="flex-1">
            <div className="flex flex-col gap-8 mb-4 max-w-lg">
              {data.latestFiles?.files?.filter(isNotNullable).map((file) => (
                <DataSectionBlock file={file} key={file.name} />
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-max">
            <Link className="block" to="/data">
              過去の資料はこちら
            </Link>
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

      <Section>
        <Section.Title>関連リンク</Section.Title>

        <Section.Body>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <a
              className="block flex-1 md:h-full"
              href="https://www-user.yokohama-cu.ac.jp/~ycuds/hds/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="sr-only">
                横浜市立大学 データサイエンス研究科 ヘルスデータサイエンス専攻
              </span>

              <StaticImage
                alt="横浜市立大学 データサイエンス研究科 ヘルスデータサイエンス専攻"
                layout="fullWidth"
                src="../images/HDS.png"
              />
            </a>

            <a
              className="block flex-1 md:h-full"
              href="https://www.yokohama-cu.ac.jp/"
              rel="noopener noreferrer"
              target="_blank"
            >
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
