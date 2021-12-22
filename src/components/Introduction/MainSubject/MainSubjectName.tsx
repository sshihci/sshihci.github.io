import clsx from 'clsx'
import { forwardRef } from 'react'

export const MainSubjectName = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, ...props }, ref) => {
  return (
    <p
      className={clsx('font-noto text-lg text-gray-600', className)}
      ref={ref}
      {...props}
    />
  )
})
