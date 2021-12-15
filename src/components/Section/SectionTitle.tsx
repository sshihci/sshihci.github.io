import clsx from 'clsx'
import { forwardRef } from 'react'

export const SectionTitle = forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h2']
>(({ className, ...props }, ref) => {
  return <h2 className={clsx('', className)} ref={ref} {...props} />
})
