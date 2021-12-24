import GatsbyLink from 'gatsby-link'
import type { Root } from 'hast'
import { ComponentType, createElement, ReactNode } from 'react'
import rehypeReact from 'rehype-react'
import { unified } from 'unified'
import { useIsSameSite } from '~/hooks/useIsSameSite'
import { File, FileProps } from './File'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      file: FileProps
    }
  }
}

type AnchorLinkProps = {
  href: string
  children: ReactNode
  className: string
  'aria-label': string
}

const AnchorLink = (({
  href = '',
  children,
  className,
  ...props
}: AnchorLinkProps) => {
  const isSameSite = useIsSameSite(href)

  if (isSameSite) {
    return (
      <GatsbyLink className={className} to={href} {...props}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a
      className={className}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  )
}) as ComponentType<JSX.IntrinsicElements['a']>

const processor = unified().use(rehypeReact, {
  components: {
    a: AnchorLink,
    file: ({ name }: FileProps) => (
      <File className="max-w-max no-underline" name={name} />
    ),
  },
  createElement,
})

type MarkdownProps = {
  htmlAst: unknown
}

export const Markdown = ({ htmlAst }: MarkdownProps): JSX.Element => {
  return processor.stringify(htmlAst as Root)
}
