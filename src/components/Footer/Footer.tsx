import clsx from 'clsx'
import { forwardRef } from 'react'

export const Footer = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['footer']
>(({ className, ...props }, ref) => {
  return (
    <footer
      className={clsx(
        'flex flex-row justify-between items-center px-24 h-52 bg-gray-200',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
