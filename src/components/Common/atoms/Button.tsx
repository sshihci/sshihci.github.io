import clsx from 'clsx'
import { forwardRef } from 'react'
import { LinkStyle } from './LinkStyle'

export const Button = forwardRef<
  HTMLButtonElement,
  JSX.IntrinsicElements['button']
>(
  (
    {
      className,

      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={clsx('', LinkStyle, className)}
        ref={ref}
        type="button"
        {...props}
      />
    )
  },
)
