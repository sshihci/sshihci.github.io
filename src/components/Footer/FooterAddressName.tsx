import clsx from 'clsx'
import { forwardRef } from 'react'

export const FooterAddressName = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return (
    <p
      className={clsx('px-1 text-lg font-light text-cyan-600', className)}
      ref={ref}
      {...props}
    />
  )
})
