import clsx from 'clsx'
import { forwardRef } from 'react'
import { DataSectionBlockFileFragment } from '~graphql-types'
import { File } from '../Common/organisms/File'

const graphql = String.raw

export const DataSectionBlockFragment = graphql`
  fragment DataSectionBlockFile on ConfigYamlFiles {
    name
    date
    pdf {
      relativePath
    }
    excel {
      relativePath
    }
  }
`

type DataSectionBlockProps = JSX.IntrinsicElements['div'] & {
  file: DataSectionBlockFileFragment
}

export const DataSectionBlock = forwardRef<
  HTMLDivElement,
  DataSectionBlockProps
>(({ className, file, ...props }, ref) => {
  if (!file.name || !file.excel?.relativePath || !file.pdf?.relativePath) {
    return null
  }
  return (
    <div
      className={clsx('flex flex-col gap-3', className)}
      {...props}
      ref={ref}
    >
      <p>{file.date}</p>

      <p className="text-lg">{file.name}</p>

      <ul className="flex flex-col gap-3 p-4 bg-opacity-20 bg-cyan-200">
        <li>
          <File display="データソースと公開URL" name={file.pdf.relativePath} />
        </li>

        <li>
          <File display="データ一覧" name={file.excel.relativePath} />
        </li>
      </ul>
    </div>
  )
})
