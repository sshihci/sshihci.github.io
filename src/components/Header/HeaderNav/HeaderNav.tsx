import clsx from 'clsx'
import { forwardRef } from 'react'

export const HeaderNav = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['nav']
>(({ className, ...props }, ref) => {
  return (
    <nav
      className={clsx(
        'hidden',
        'lg:flex lg:flex-row lg:gap-2',
        'xl:gap-9',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
