import clsx from 'clsx'
import { forwardRef } from 'react'
import {
  DataSectionNavigationAllConfigFragment,
  DataSectionNavigationCurrentConfigFragment,
} from '~graphql-types'
import { Button } from '../Common/atoms/Button'
import { Link } from '../Common/atoms/Link'

const graphql = String.raw

export const DataSectionNavigationFragment = graphql`
  fragment DataSectionNavigationCurrentConfig on ConfigYaml {
    year
  }
  fragment DataSectionNavigationAllConfig on ConfigYaml {
    year
    id
  }
`

type DataSectionNavigationProps = JSX.IntrinsicElements['ul'] & {
  currentConfig: DataSectionNavigationCurrentConfigFragment | undefined
  allConfig: DataSectionNavigationAllConfigFragment[] | undefined
}

export const DataSectionNavigation = forwardRef<
  HTMLUListElement,
  DataSectionNavigationProps
>(({ className, currentConfig, allConfig, ...props }, ref) => {
  return (
    <ul className={clsx('flex flex-col gap-1', className)} ref={ref} {...props}>
      {allConfig?.map((node) => {
        if (node.year === currentConfig?.year) {
          return (
            <li key={node.id}>
              <Button className="block w-full text-cyan-800" disabled isActive>
                {`${node.year}年度`}
              </Button>
            </li>
          )
        }
        return (
          <li key={node.id}>
            <Link className="block text-cyan-800" to={`/data/${node.year}`}>
              {`${node.year}年度`}
            </Link>
          </li>
        )
      })}
    </ul>
  )
})
