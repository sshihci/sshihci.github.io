import clsx from 'clsx'
import { forwardRef } from 'react'

export const HeaderSubTitle = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return (
    <p
      className={clsx('font-noto text-sm font-light text-gray-600', className)}
      ref={ref}
      {...props}
    />
  )
})
