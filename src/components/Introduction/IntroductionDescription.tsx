import clsx from 'clsx'
import { forwardRef } from 'react'

export const IntroductionDescription = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>(({ className, ...props }, ref) => {
  return (
    <div
      className={clsx('flex flex-col flex-1 gap-5', className)}
      ref={ref}
      {...props}
    />
  )
})
