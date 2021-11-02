import { Link } from 'gatsby'
import * as React from 'react'

// styles
const pageStyles: React.CSSProperties = {
  color: '#232129',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  padding: '96px',
}
const headingStyles: React.CSSProperties = {
  marginBottom: 64,
  marginTop: 0,
  maxWidth: 320,
}

const paragraphStyles: React.CSSProperties = {
  marginBottom: 48,
}
const codeStyles: React.CSSProperties = {
  backgroundColor: '#FFF4DB',
  borderRadius: 4,
  color: '#8A6534',
  fontSize: '1.25rem',
  padding: 4,
}

// markup
const NotFoundPage = (): JSX.Element => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>

      <h1 style={headingStyles}>Page not found</h1>

      <p style={paragraphStyles}>
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

            <code style={codeStyles}>src/pages/</code>

            <span>.</span>

            <br />
          </>
        ) : null}

        <br />

        <Link to="/">Go home</Link>

        <span>.</span>
      </p>
    </main>
  )
}

export default NotFoundPage
