import clsx from 'clsx'
import { forwardRef } from 'react'

export const HeroBadgeText = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return (
    <p
      className={clsx(
        'w-56 font-noto text-5xl leading-normal text-gray-100 break-all',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
