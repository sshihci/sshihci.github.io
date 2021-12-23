import clsx from 'clsx'
import GatsbyLink from 'gatsby-link'
import { ReactNode } from 'react'

type HeaderTitleWrapperProps = {
  className?: string
  children?: ReactNode
}

export const HeaderTitleWrapper = ({
  className,
  children,
}: HeaderTitleWrapperProps): JSX.Element => {
  return (
    <GatsbyLink
      className={clsx('flex flex-col-reverse gap-4', className)}
      to="/"
    >
      {children}
    </GatsbyLink>
  )
}
