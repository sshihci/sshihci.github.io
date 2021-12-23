import GatsbyLink from 'gatsby-link'
import { Layout } from '~/components/Common/templates/Layout'
import { Seo } from '~/components/Common/templates/seo'
import Section from '~/components/Section'

const NotFoundPage = (): JSX.Element => {
  return (
    <Layout>
      <Seo title="お探しのページが見つかりませんでした" />

      <Section>
        <Section.Title>お探しのページが見つかりませんでした</Section.Title>

        <Section.Body>
          <p className="mb-12">
            <span>Sorry</span>

            <span aria-label="Pensive emoji" role="img">
              😔
            </span>

            <span>we couldn’t find what you were looking for.</span>

            <br />

            {process.env['NODE_ENV'] === 'development' ? (
              <>
                <br />

                <span>Try creating a page in</span>

                <code className="p-1 text-xl text-yellow-600 bg-yellow-100 rounded-md">
                  src/pages/
                </code>

                <span>.</span>

                <br />
              </>
            ) : null}

            <br />

            <GatsbyLink to="/">Go home</GatsbyLink>

            <span>.</span>
          </p>
        </Section.Body>
      </Section>
    </Layout>
  )
}

export default NotFoundPage
