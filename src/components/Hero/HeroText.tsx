import clsx from 'clsx'
import { forwardRef } from 'react'

export const HeroText = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return (
    <p
      className={clsx(
        'absolute bottom-24 left-12 font-light tracking-widest',
        'md:bottom-36 md:left-20 md:text-4xl',
        'lg:left-36',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
