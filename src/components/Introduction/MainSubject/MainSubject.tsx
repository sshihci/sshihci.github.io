import clsx from 'clsx'
import { forwardRef } from 'react'

export const MainSubject = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>(({ className, ...props }, ref) => {
  return (
    <div
      className={clsx('flex flex-row gap-3', className)}
      ref={ref}
      {...props}
    />
  )
})
