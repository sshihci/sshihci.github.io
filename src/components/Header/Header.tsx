import clsx from 'clsx'
import { forwardRef } from 'react'

export const Header = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['header']
>(({ className, ...props }, ref) => {
  return (
    <header
      className={clsx(
        'flex flex-row justify-between items-center px-8 h-32',
        'lg:px-12 lg:h-40',
        'xl:px-20',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
