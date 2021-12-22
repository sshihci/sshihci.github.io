import clsx from 'clsx'
import { forwardRef } from 'react'

export const Footer = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['footer']
>(({ className, ...props }, ref) => {
  return (
    <footer
      className={clsx(
        'flex flex-col justify-around px-8 h-52 bg-gray-200',
        'sm:flex-row sm:justify-between sm:items-center',
        'md:px-24',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
