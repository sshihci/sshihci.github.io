import clsx from 'clsx'
import { forwardRef } from 'react'

export const FooterSubTitle = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return (
    <p
      className={clsx('font-noto text-sm font-light text-cyan-600', className)}
      ref={ref}
      {...props}
    />
  )
})
