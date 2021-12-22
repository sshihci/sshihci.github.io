import clsx from 'clsx'
import { forwardRef } from 'react'

export const ContactFormFieldTextarea = forwardRef<
  HTMLTextAreaElement,
  JSX.IntrinsicElements['textarea']
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={clsx(
        'block flex-1 font-noto text-lg text-gray-600 placeholder:text-gray-400 bg-gray-200 rounded-t-xl border-0',
        'focus:border-b-2 focus:ring-0 focus:outline-none focus:border-cyan-500',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
