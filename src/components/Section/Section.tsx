import clsx from 'clsx'
import { forwardRef } from 'react'

export const Section = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['section']
>(({ className, ...props }, ref) => {
  return (
    <section
      className={clsx('py-5 px-4 sm:px-8 mx-auto max-w-5xl', className)}
      ref={ref}
      {...props}
    />
  )
})
