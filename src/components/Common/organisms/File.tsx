import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import { useMemo } from 'react'
import { IconType } from 'react-icons'
import {
  AiOutlineFile,
  AiOutlineFileExcel,
  AiOutlineFilePdf,
} from 'react-icons/ai'
import { FileQuery } from '~graphql-types'

const fileIcon: Record<string, IconType> = {
  pdf: AiOutlineFilePdf,
  xlsx: AiOutlineFileExcel,
  xlx: AiOutlineFileExcel,
}

export type FileProps = {
  name: string
  display?: string
  className?: string
}

export const File = ({ name, className, display }: FileProps): JSX.Element => {
  const { allFile } = useStaticQuery<FileQuery>(graphql`
    query File {
      allFile(filter: { sourceInstanceName: { eq: "data" } }) {
        nodes {
          id
          extension
          name
          base
          publicURL
          relativePath
        }
      }
    }
  `)

  const file = useMemo(() => {
    return allFile.nodes.find(
      (node) =>
        node.relativePath === name || node.name === name || node.base === name,
    )
  }, [allFile.nodes, name])

  const Icon = useMemo(() => {
    if (!file) return AiOutlineFile
    return fileIcon[file.extension] ?? AiOutlineFile
  }, [file])

  if (!file) {
    return <div>ファイルが見つかりません</div>
  }

  return (
    <div>
      <a
        className={clsx(
          'flex flex-row flex-nowrap gap-2 items-center py-2 px-4',
          'hover:underline hover:underline-offset-2',
          className,
        )}
        download
        href={file.publicURL}
      >
        <Icon
          className={clsx(
            'flex-shrink-0',
            file.extension === 'pdf'
              ? 'text-rose-500 border-rose-500'
              : file.extension === 'xlsx' || file.extension === 'xlx'
              ? 'text-emerald-500 border-emerald-500'
              : 'border-gray-600',
          )}
          size={24}
        />

        <span className="text-lg">{display ?? file.base}</span>
      </a>
    </div>
  )
}
