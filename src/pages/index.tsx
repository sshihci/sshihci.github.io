import { graphql as graphql, PageProps } from 'gatsby'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import { useMemo } from 'react'
import { HexagonMap } from '~/components/Common/molecules/HexagonMap'
import { Layout } from '~/components/Common/templates/Layout'
import Hero from '~/components/Hero'
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
        <Section.Title>研究者案内</Section.Title>

        <Section.Body>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1">
              <StaticImage
                alt=""
                className="mx-auto w-48 rounded-full"
                layout="fullWidth"
                src="../images/top_image.png"
              />
            </div>

            <div className="flex-[2]">
              <div>
                <p className="sr-only">氏名: </p>

                <p>清水 沙友里</p>
              </div>

              <div>
                <p className="sr-only">Name: </p>

                <p>Shimizu Sayuri</p>
              </div>

              <div>
                <p className="sr-only">所属:</p>

                <p>データサイエンス研究科 ヘルスデータサイエンス専攻</p>
              </div>

              <div>
                <p className="sr-only">自己紹介:</p>

                <p>簡単な自己紹介を書く</p>
              </div>

              <div>
                <a
                  className="block py-1 px-3 ml-auto w-max text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-md border border-blue-600 hover:border-blue-800 transition-all duration-300"
                  href="https://researchmap.jp/ssyr"
                  rel="noreferrer"
                  target="_blank"
                >
                  リサーチマップ
                </a>
              </div>
            </div>
          </div>
        </Section.Body>
      </Section>

      <Section id="お知らせ">
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
        </Section.Body>
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
