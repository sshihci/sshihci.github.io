import clsx from 'clsx'
import { forwardRef } from 'react'

export const HeroText = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return (
    <p
      className={clsx(
        'absolute bottom-12 left-12 text-3xl font-light tracking-widest leading-normal',
        'sm:bottom-20 sm:left-36 sm:text-4xl',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
