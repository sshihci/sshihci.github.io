import { graphql, useStaticQuery } from 'gatsby'
import { ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import { LayoutQuery } from '~graphql-types'

type LayoutProps = {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { site } = useStaticQuery<LayoutQuery>(graphql`
    query Layout {
      site {
        siteMetadata {
          title
          subTitle
        }
      }
    }
  `)
  return (
    <div className="flex flex-col min-h-screen font-noto text-gray-600 bg-gray-50">
      <Helmet>
        <html className="scroll-smooth" lang="ja" />
      </Helmet>

      <Header className="flex-shrink-0">
        <Header.TitleWrapper>
          <Header.Title>{site?.siteMetadata?.title}</Header.Title>

          <Header.SubTitle>{site?.siteMetadata?.subTitle}</Header.SubTitle>
        </Header.TitleWrapper>

        <Header.Nav>
          <Header.Nav.Item to="/#ご挨拶">ご挨拶</Header.Nav.Item>

          <Header.Nav.Item to="/#研究者案内">研究者紹介</Header.Nav.Item>

          <Header.Nav.Item to="/#データの更新">データについて</Header.Nav.Item>

          <Header.Nav.Item to="/#お知らせ">お知らせ</Header.Nav.Item>

          <Header.Nav.Item to="/#お問い合わせ">お問い合わせ</Header.Nav.Item>
        </Header.Nav>

        <Header.NavMobile>
          <Header.NavMobile.Item to="/#ご挨拶">ご挨拶</Header.NavMobile.Item>

          <Header.NavMobile.Item to="/#研究者案内">
            研究者紹介
          </Header.NavMobile.Item>

          <Header.NavMobile.Item to="/#データの更新">
            データについて
          </Header.NavMobile.Item>

          <Header.NavMobile.Item to="/#お知らせ">
            お知らせ
          </Header.NavMobile.Item>

          <Header.NavMobile.Item to="/#お問い合わせ">
            お問い合わせ
          </Header.NavMobile.Item>
        </Header.NavMobile>
      </Header>

      <main className="flex flex-col flex-1 gap-5">{children}</main>

      <Footer className="flex-shrink-0">
        <Footer.TitleWrapper>
          <Footer.Title>{site?.siteMetadata?.title}</Footer.Title>

          <Footer.SubTitle>{site?.siteMetadata?.subTitle}</Footer.SubTitle>
        </Footer.TitleWrapper>

        <Footer.AddressWrapper>
          <Footer.AddressName>金沢八景キャンパス</Footer.AddressName>

          <Footer.Address>〒236-0027 横浜市金沢区瀬戸22-2</Footer.Address>
        </Footer.AddressWrapper>
      </Footer>
    </div>
  )
}
