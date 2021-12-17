import { graphql as graphql, PageProps } from 'gatsby'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import { HexagonMap } from '~/components/Common/molecules/HexagonMap'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Hero from '~/components/Hero'
import NewsList from '~/components/NewsList'
import Section from '~/components/Section'

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
        subTitle
      }
    }
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
  console.log(data.hero?.childImageSharp?.gatsbyImageData)
  return (
    <div className="bg-gray-50">
      <Header>
        <Header.TitleWrapper>
          <Header.Title>{data.site?.siteMetadata?.title}</Header.Title>

          <Header.SubTitle>{data.site?.siteMetadata?.subTitle}</Header.SubTitle>
        </Header.TitleWrapper>

        <Header.Nav>
          <Header.Nav.Item to="/#研究内容の紹介">研究概要</Header.Nav.Item>

          <Header.Nav.Item to="/#研究者案内">研究者紹介</Header.Nav.Item>

          <Header.Nav.Item to="/#データについて">
            データについて
          </Header.Nav.Item>

          <Header.Nav.Item to="/#お知らせ">お知らせ</Header.Nav.Item>

          <Header.Nav.Item to="/#お問い合わせ">お問い合わせ</Header.Nav.Item>
        </Header.Nav>
      </Header>

      <main>
        <Hero className="mb-8">
          <Hero.Image
            alt=""
            image={getImage(data.hero?.childImageSharp?.gatsbyImageData!)!}
          />

          <Hero.Text>
            Health Data Science Frontier. <br />
            データで医療を変えていく
          </Hero.Text>

          <Hero.Badge>
            <Hero.Badge.Text>Big Data Analysis</Hero.Badge.Text>
          </Hero.Badge>

          <HexagonMap className="absolute left-8 -bottom-8" />
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
      </main>

      <Footer>
        <Footer.TitleWrapper>
          <Footer.Title>{data.site?.siteMetadata?.title}</Footer.Title>

          <Footer.SubTitle>{data.site?.siteMetadata?.subTitle}</Footer.SubTitle>
        </Footer.TitleWrapper>

        <Footer.AddressWrapper>
          <Footer.AddressName>金沢八景キャンパス</Footer.AddressName>

          <Footer.Address>〒236-0027 横浜市金沢区瀬戸22-2</Footer.Address>
        </Footer.AddressWrapper>
      </Footer>
    </div>
  )
}

export default IndexPage
