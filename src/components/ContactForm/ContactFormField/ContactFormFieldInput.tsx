import clsx from 'clsx'
import { forwardRef } from 'react'

export const ContactFormFieldInput = forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements['input']
>(({ className, ...props }, ref) => {
  return (
    <input
      className={clsx(
        'block flex-1 text-lg placeholder:text-gray-400 bg-gray-200 rounded-t-xl border-0',
        'focus:border-b-2 focus:ring-0 focus:outline-none focus:border-cyan-500',
        className,
      )}
      ref={ref}
      type="text"
      {...props}
    />
  )
})
