import clsx from 'clsx'
import { forwardRef } from 'react'

export const SectionBody = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>(({ className, ...props }, ref) => {
  return (
    <div
      className={clsx('py-12 px-4 sm:px-8 mx-auto max-w-5xl', className)}
      ref={ref}
      {...props}
    />
  )
})
