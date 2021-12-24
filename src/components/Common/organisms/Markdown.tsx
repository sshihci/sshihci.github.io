import { ComponentType, createElement } from 'react'
import rehypeReact from 'rehype-react'
import { unified } from 'unified'
import { File, FileProps } from './File'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      file: ComponentType<typeof File>
    }
  }
}

const processor = unified().use(rehypeReact, {
  components: {
    file: ({ name }: FileProps) => {
      return <File name={name} className="no-underline max-w-max" />
    },
  },
  createElement,
})

type MarkdownProps = {
  htmlAst: any
}

export const Markdown = ({ htmlAst }: MarkdownProps): JSX.Element => {
  return processor.stringify(htmlAst)
}
