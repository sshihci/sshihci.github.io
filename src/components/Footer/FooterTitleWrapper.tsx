import clsx from 'clsx'
import { forwardRef } from 'react'

export const FooterTitleWrapper = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>(({ className, ...props }, ref) => {
  return (
    <div
      className={clsx('flex flex-col-reverse gap-3', className)}
      ref={ref}
      {...props}
    />
  )
})
