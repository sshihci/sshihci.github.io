import clsx from 'clsx'
import { forwardRef } from 'react'

export const HeroText = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return (
    <p
      className={clsx(
        'absolute bottom-12 left-12 font-light tracking-widest',
        'sm:bottom-36 sm:left-36 sm:text-4xl',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
