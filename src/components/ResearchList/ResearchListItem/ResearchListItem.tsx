import clsx from 'clsx'
import { forwardRef } from 'react'

export const ResearchListItem = forwardRef<
  HTMLLIElement,
  JSX.IntrinsicElements['li']
>(({ className, ...props }, ref) => (
  <li
    className={clsx(
      'flex flex-col gap-3',
      'lg:flex-row lg:gap-11 lg:mx-auto',
      className,
    )}
    {...props}
    ref={ref}
  />
))
