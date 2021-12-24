import type { Root } from 'hast'
import { ComponentType, createElement } from 'react'
import rehypeReact from 'rehype-react'
import { unified } from 'unified'
import { File, FileProps } from './File'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      file: ComponentType<typeof File>
    }
  }
}

const processor = unified().use(rehypeReact, {
  components: {
    file: ({ name }: FileProps) => {
      return <File className="max-w-max no-underline" name={name} />
    },
  },
  createElement,
})

type MarkdownProps = {
  htmlAst: unknown
}

export const Markdown = ({ htmlAst }: MarkdownProps): JSX.Element => {
  return processor.stringify(htmlAst as Root)
}
