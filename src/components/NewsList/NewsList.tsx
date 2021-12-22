import clsx from 'clsx'
import { forwardRef } from 'react'

export const NewsList = forwardRef<
  HTMLOListElement,
  JSX.IntrinsicElements['ol']
>(({ className, ...props }, ref) => {
  return (
    <ol
      className={clsx('flex flex-col gap-4', className)}
      ref={ref}
      {...props}
    />
  )
})
