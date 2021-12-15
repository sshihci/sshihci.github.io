import clsx from 'clsx'
import { forwardRef } from 'react'

export const HeaderTitle = forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h1']
>(({ className, ...props }, ref) => {
  return (
    <h1
      className={clsx('px-1 font-noto text-4xl font-light', className)}
      ref={ref}
      {...props}
    />
  )
})
