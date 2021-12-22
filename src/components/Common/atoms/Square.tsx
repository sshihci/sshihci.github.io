import clsx from 'clsx'
import { forwardRef } from 'react'

export const Square = forwardRef<HTMLDivElement, JSX.IntrinsicElements['i']>(
  ({ className, ...props }, ref) => {
    return (
      <i className={clsx('not-italic', className)} {...props} ref={ref}>
        ■
      </i>
    )
  },
)
