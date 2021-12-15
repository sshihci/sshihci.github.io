import clsx from 'clsx'
import { forwardRef } from 'react'

export const NewsListItem = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['section']
>(({ className, ...props }, ref) => {
  return (
    <li>
      <section
        className={clsx(
          'flex flex-col-reverse mx-auto max-w-4xl border-b border-cyan-600',
          className,
        )}
        {...props}
        ref={ref}
      />
    </li>
  )
})
