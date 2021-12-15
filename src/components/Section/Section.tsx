import clsx from 'clsx'
import { forwardRef } from 'react'

export const Section = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['section']
>(({ className, ...props }, ref) => {
  return <section className={clsx('py-5', className)} ref={ref} {...props} />
})
