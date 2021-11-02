import { Link } from 'gatsby'
import * as React from 'react'

const NotFoundPage = (): JSX.Element => {
  return (
    <main className="p-24 text-gray-800">
      <title>Not found</title>

      <h1 className="mb-16 max-w-xs">Page not found</h1>

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

        <Link to="/">Go home</Link>

        <span>.</span>
      </p>
    </main>
  )
}

export default NotFoundPage
