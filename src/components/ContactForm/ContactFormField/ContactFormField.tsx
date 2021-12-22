import clsx from 'clsx'
import { forwardRef } from 'react'

export const ContactFormField = forwardRef<
  HTMLFieldSetElement,
  JSX.IntrinsicElements['fieldset']
>(({ className, ...props }, ref) => {
  return (
    <fieldset
      className={clsx('flex flex-col gap-1', 'sm:flex-row sm:gap-4', className)}
      ref={ref}
      {...props}
    />
  )
})
