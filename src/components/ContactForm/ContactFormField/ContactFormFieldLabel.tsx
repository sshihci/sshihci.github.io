import clsx from 'clsx'
import { forwardRef } from 'react'

export const ContactFormFieldLabel = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, children, ...props }, ref) => {
  return (
    <p
      className={clsx(
        'flex flex-row justify-start items-center text-lg text-right min-w-[8rem]',
        'sm:justify-end sm:text-base',
        'lg:min-w-[4rem]',
        className,
      )}
      ref={ref}
      {...props}
    >
      <legend>{children}</legend>
    </p>
  )
})
