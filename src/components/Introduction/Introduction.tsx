import clsx from 'clsx'
import { forwardRef } from 'react'

export const Introduction = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['article']
>(({ className, ...props }, ref) => {
  return (
    <article
      className={clsx(
        'flex flex-col md:flex-row gap-16 items-center',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
