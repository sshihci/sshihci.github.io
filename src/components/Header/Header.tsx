import clsx from 'clsx'
import { forwardRef } from 'react'

export const Header = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['header']
>(({ className, ...props }, ref) => {
  return (
    <header
      className={clsx(
        'flex flex-row justify-between items-center px-20 h-40',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
