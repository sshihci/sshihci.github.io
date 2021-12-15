import clsx from 'clsx'
import { forwardRef } from 'react'

export const FooterTitle = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return (
    <p
      className={clsx(
        'px-1 font-noto text-4xl font-light text-cyan-600',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
