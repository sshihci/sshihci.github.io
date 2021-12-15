import clsx from 'clsx'
import { forwardRef } from 'react'

export const HeaderNav = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['nav']
>(({ className, ...props }, ref) => {
  return (
    <nav
      className={clsx('flex flex-row gap-9', className)}
      ref={ref}
      {...props}
    />
  )
})
