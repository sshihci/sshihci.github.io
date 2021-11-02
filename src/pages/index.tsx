import clsx from 'clsx'

const docLink = {
  color: '#8954A8',
  text: 'Documentation',
  url: 'https://www.gatsbyjs.com/docs/',
}

const links = [
  {
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    text: 'Tutorial',
    url: 'https://www.gatsbyjs.com/docs/tutorial/',
  },
  {
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    text: 'How to Guides',
    url: 'https://www.gatsbyjs.com/docs/how-to/',
  },
  {
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    text: 'Reference Guides',
    url: 'https://www.gatsbyjs.com/docs/reference/',
  },
  {
    description:
      'Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.',
    text: 'Conceptual Guides',
    url: 'https://www.gatsbyjs.com/docs/conceptual/',
  },
  {
    description:
      'Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.',
    text: 'Plugin Library',
    url: 'https://www.gatsbyjs.com/plugins',
  },
  {
    badge: true,
    description:
      'Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!',
    text: 'Build and Host',
    url: 'https://www.gatsbyjs.com/cloud',
  },
]

const IndexPage = (): JSX.Element => {
  return (
    <main className="p-24 font-sans text-gray-800">
      <title>Home Page</title>

      <h1 className="mb-16 max-w-xs">
        <span>Congratulations</span>

        <br />

        <span className="text-purple-600">— you just made a Gatsby site! </span>

        <span aria-label="Party popper emojis" role="img">
          🎉🎉🎉
        </span>
      </h1>

      <p className="mb-12">
        <span>Edit</span>

        <code className="p-1 text-xl text-yellow-600 bg-yellow-100 rounded-md">
          src/pages/index.js
        </code>

        <span>to see this page update in real-time.</span>

        <span aria-label="Sunglasses smiley emoji" role="img">
          😎
        </span>
      </p>

      <ul className="mb-24">
        <li className="mb-6 text-base font-bold align-top">
          <a
            className="text-base font-bold text-purple-700 align-top"
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li>

        {links.map((link) => (
          <li
            className={clsx('mb-8 max-w-xl text-2xl font-light')}
            key={link.url}
          >
            <span>
              <a
                className="text-base font-bold text-purple-700 align-top"
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>

              {link.badge && (
                <span
                  aria-label="New Badge"
                  className="inline-block relative -top-0.5 py-0.5 px-1.5 ml-2.5 text-xs font-bold tracking-wider leading-none text-white bg-green-700 rounded-md border-green-700"
                >
                  NEW!
                </span>
              )}

              <p className="mt-2.5 text-sm leading-tight text-gray-800">
                {link.description}
              </p>
            </span>
          </li>
        ))}
      </ul>

      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage
