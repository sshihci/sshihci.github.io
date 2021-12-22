import clsx from 'clsx'
import { forwardRef } from 'react'

export const MainSubjectName = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return <p className={clsx(' text-lg ', className)} ref={ref} {...props} />
})
