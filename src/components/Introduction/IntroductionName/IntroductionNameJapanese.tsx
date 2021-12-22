import clsx from 'clsx'
import { forwardRef } from 'react'

export const IntroductionNameJapanese = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return (
    <p
      className={clsx('font-noto text-2xl text-gray-600', className)}
      ref={ref}
      {...props}
    />
  )
})
