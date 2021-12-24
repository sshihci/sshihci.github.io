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
  className?: string
}

export const File = ({ name, className }: FileProps): JSX.Element => {
  const { allFile } = useStaticQuery<FileQuery>(graphql`
    query File {
      allFile(filter: { sourceInstanceName: { eq: "data" } }) {
        nodes {
          id
          extension
          name
          base
          publicURL
        }
      }
    }
  `)

  const file = useMemo(() => {
    return allFile.nodes.find(
      (node) => node.name === name || node.base === name,
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
          'flex flex-row flex-nowrap gap-2 items-center py-2 px-4 rounded-md border',
          file.extension === 'pdf'
            ? 'text-white bg-rose-500 border-rose-500'
            : file.extension === 'xlsx' || file.extension === 'xlx'
            ? 'text-white bg-emerald-500 border-emerald-500'
            : 'bg-white border-gray-600',
          className,
        )}
        download
        href={file.publicURL}
      >
        <Icon className="flex-shrink-0" size={48} />

        <span className="text-lg">{file.base}</span>
      </a>
    </div>
  )
}
