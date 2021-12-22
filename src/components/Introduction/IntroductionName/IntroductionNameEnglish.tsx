import clsx from 'clsx'
import { forwardRef } from 'react'

export const IntroductionNameEnglish = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return (
    <p
      className={clsx(' text-sm font-light ', className)}
      ref={ref}
      {...props}
    />
  )
})
