import clsx from 'clsx'
import { forwardRef } from 'react'

export const NewsListItemTitle = forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h3']
>(({ className, ...props }, ref) => {
  return <h3 className={clsx('py-2 px-6  ', className)} ref={ref} {...props} />
})
