import * as React from 'react'

// styles
const pageStyles: React.CSSProperties = {
  color: '#232129',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  padding: 96,
}
const headingStyles: React.CSSProperties = {
  marginBottom: 64,
  marginTop: 0,
  maxWidth: 320,
}
const headingAccentStyles: React.CSSProperties = {
  color: '#663399',
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
const listStyles: React.CSSProperties = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles: React.CSSProperties = {
  fontSize: 24,
  fontWeight: 300,
  marginBottom: 30,
  maxWidth: 560,
}

const linkStyle: React.CSSProperties = {
  color: '#8954A8',
  fontSize: 16,
  fontWeight: 'bold',
  verticalAlign: '5%',
}

const docLinkStyle: React.CSSProperties = {
  ...linkStyle,
  listStyleType: 'none',
  marginBottom: 24,
}

const descriptionStyle: React.CSSProperties = {
  color: '#232129',
  fontSize: 14,
  lineHeight: 1.25,
  marginBottom: 0,
  marginTop: 10,
}

const docLink = {
  color: '#8954A8',
  text: 'Documentation',
  url: 'https://www.gatsbyjs.com/docs/',
}

const badgeStyle: React.CSSProperties = {
  backgroundColor: '#088413',
  border: '1px solid #088413',
  borderRadius: 4,
  color: '#fff',
  display: 'inline-block',
  fontSize: 11,
  fontWeight: 'bold',
  letterSpacing: 1,
  lineHeight: 1,
  marginLeft: 10,
  padding: '4px 6px',
  position: 'relative',
  top: -2,
}

// data
const links = [
  {
    color: '#E95800',
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    text: 'Tutorial',
    url: 'https://www.gatsbyjs.com/docs/tutorial/',
  },
  {
    color: '#1099A8',
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    text: 'How to Guides',
    url: 'https://www.gatsbyjs.com/docs/how-to/',
  },
  {
    color: '#BC027F',
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    text: 'Reference Guides',
    url: 'https://www.gatsbyjs.com/docs/reference/',
  },
  {
    color: '#0D96F2',
    description:
      'Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.',
    text: 'Conceptual Guides',
    url: 'https://www.gatsbyjs.com/docs/conceptual/',
  },
  {
    color: '#8EB814',
    description:
      'Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.',
    text: 'Plugin Library',
    url: 'https://www.gatsbyjs.com/plugins',
  },
  {
    badge: true,
    color: '#663399',
    description:
      'Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!',
    text: 'Build and Host',
    url: 'https://www.gatsbyjs.com/cloud',
  },
]

// markup
const IndexPage = (): JSX.Element => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>

      <h1 style={headingStyles}>
        <span>Congratulations</span>

        <br />

        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>

        <span aria-label="Party popper emojis" role="img">
          🎉🎉🎉
        </span>
      </h1>

      <p style={paragraphStyles}>
        <span>Edit</span>

        <code style={codeStyles}>src/pages/index.js</code>

        <span>to see this page update in real-time.</span>

        <span aria-label="Sunglasses smiley emoji" role="img">
          😎
        </span>
      </p>

      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
            style={linkStyle}
          >
            {docLink.text}
          </a>
        </li>

        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                style={linkStyle}
              >
                {link.text}
              </a>

              {link.badge && (
                <span aria-label="New Badge" style={badgeStyle}>
                  NEW!
                </span>
              )}

              <p style={descriptionStyle}>{link.description}</p>
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
