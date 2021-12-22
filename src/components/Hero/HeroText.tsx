import clsx from 'clsx'
import { forwardRef } from 'react'

export const HeroText = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return (
    <p
      className={clsx(
        'absolute top-52 left-36 text-4xl font-light tracking-widest leading-normal',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
