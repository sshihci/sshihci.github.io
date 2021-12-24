import clsx from 'clsx'
import { forwardRef } from 'react'

export const IntroductionProfile = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return (
    <p
      className={clsx('text-lg text-justify', className)}
      ref={ref}
      {...props}
    />
  )
})
