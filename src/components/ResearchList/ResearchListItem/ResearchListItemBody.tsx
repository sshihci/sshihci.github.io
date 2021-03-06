import clsx from 'clsx'
import { forwardRef } from 'react'

export const ResearchListItemBody = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => (
  <p
    className={clsx(
      'lg:max-w-3xl tracking-wider leading-loose text-justify',
      className,
    )}
    {...props}
    ref={ref}
  />
))
