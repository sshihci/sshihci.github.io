import { graphql as graphql, PageProps } from 'gatsby'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import { useMemo } from 'react'
import { Link } from '~/components/Common/atoms/Link'
import { HexagonMap } from '~/components/Common/molecules/HexagonMap'
import { Layout } from '~/components/Common/templates/Layout'
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
        childMarkdownRemark {
          frontmatter {
            date
            title
            description
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
      <Hero className="mb-8">
        {hero && <Hero.Image alt="" image={hero} />}

        <Hero.Text>
          Health Data Science Frontier. <br />
          データで医療を変えていく
        </Hero.Text>

        <Hero.Badge>
          <Hero.Badge.Text>Big Data Analysis</Hero.Badge.Text>
        </Hero.Badge>

        <HexagonMap className="absolute -bottom-8 left-8" />
      </Hero>

      <Section id="研究内容の紹介">
        <Section.Title>研究内容の紹介</Section.Title>

        <Section.Body>
          <p>研究の目的は〜〜〜</p>
        </Section.Body>
      </Section>

      <Section id="研究者案内">
        <HexagonMap className="absolute top-24 right-12" />

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

      <Section id="お知らせ">
        <HexagonMap className="absolute bottom-0 left-4" />

        <Section.Title>お知らせ</Section.Title>

        <Section.Body>
          <NewsList>
            {data.allFile.nodes.map(({ id, childMarkdownRemark }) => (
              <NewsList.Item key={id}>
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

        <Section.Body />
      </Section>

      <Section id="お問い合わせ">
        <Section.Title>お問い合わせ</Section.Title>

        <Section.Body />
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
