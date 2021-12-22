import clsx from 'clsx'
import { forwardRef } from 'react'

export const IntroductionName = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>(({ className, ...props }, ref) => {
  return <div className={clsx('', className)} ref={ref} {...props} />
})
