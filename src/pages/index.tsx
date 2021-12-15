import { StaticImage } from 'gatsby-plugin-image'
import Section from '~/components/Section'

const IndexPage = (): JSX.Element => {
  // const {} = useStaticQuery<GatsbyTypes.TopPageQuery>(gql`
  //   query TopPage {
  //     allFile(
  //       filter: { sourceInstanceName: { eq: "news" }, name: { ne: "sample" } }
  //       sort: {
  //         fields: childrenMarkdownRemark___frontmatter___date
  //         order: DESC
  //       }
  //       limit: 3
  //     ) {
  //       nodes {
  //         id
  //         childMarkdownRemark {
  //           frontmatter {
  //             date
  //             title
  //             description
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <div>
      <header>
        <div>
          <p>清水 沙友里 研究室</p>
        </div>
      </header>

      <main>
        <div className="sm:px-6 md:px-16">
          <StaticImage alt="" layout="fullWidth" src="../images/hero.png" />
        </div>

        <Section>
          <Section.Title>研究概要</Section.Title>

          <p>研究の目的は〜〜〜</p>
        </Section>

        <Section>
          <Section.Title className="sr-only">自己紹介</Section.Title>

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

        <Section>
          <Section.Title>お知らせ</Section.Title>

          <Section.Body>
            <ol>
              <li>
                <div>
                  <p>2020/01/01</p>

                  <p>データの更新</p>
                </div>
              </li>
            </ol>
          </Section.Body>
        </Section>

        <Section>
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

      <footer className="h-40 bg-gray-300">
        <p>フッター</p>
      </footer>
    </div>
  )
}

export default IndexPage
