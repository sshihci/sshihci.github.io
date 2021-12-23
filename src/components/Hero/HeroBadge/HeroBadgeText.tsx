import clsx from 'clsx'
import { forwardRef } from 'react'

export const HeroBadgeText = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return (
    <p
      className={clsx(
        'text-3xl leading-normal text-gray-100 break-all',
        'sm:w-56 sm:text-5xl',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
