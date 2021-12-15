import clsx from 'clsx'
import { forwardRef } from 'react'

export const FooterAddressWrapper = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>(({ className, ...props }, ref) => {
  return (
    <div
      className={clsx('flex flex-col gap-2', className)}
      ref={ref}
      {...props}
    />
  )
})
