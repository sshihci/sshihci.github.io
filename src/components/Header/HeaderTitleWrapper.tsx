import clsx from 'clsx'
import { forwardRef } from 'react'

export const HeaderTitleWrapper = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>(({ className, ...props }, ref) => {
  return (
    <div
      className={clsx('flex flex-col-reverse gap-4', className)}
      ref={ref}
      {...props}
    />
  )
})
