import clsx from 'clsx'
import { forwardRef } from 'react'

export const Hero = forwardRef<HTMLDivElement, JSX.IntrinsicElements['div']>(
  ({ className, ...props }, ref) => {
    return <div className={clsx('relative', className)} ref={ref} {...props} />
  },
)
