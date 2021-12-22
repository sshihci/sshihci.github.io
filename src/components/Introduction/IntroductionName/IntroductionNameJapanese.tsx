import clsx from 'clsx'
import { forwardRef } from 'react'

export const IntroductionNameJapanese = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return <p className={clsx(' text-2xl ', className)} ref={ref} {...props} />
})
