import clsx from 'clsx'
import { forwardRef } from 'react'

export const HeaderTitle = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return (
    <p
      className={clsx('px-1 text-2xl sm:text-4xl font-light', className)}
      ref={ref}
      {...props}
    />
  )
})
