import clsx from 'clsx'
import { forwardRef } from 'react'
import { LinkStyle } from './LinkStyle'

export type ButtonProps = JSX.IntrinsicElements['button'] & {
  isActive?: boolean
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      isActive,

      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={clsx(
          '',
          LinkStyle,
          isActive &&
            `after:absolute after:right-4 after:leading-6 rounded-2xl before:!right-0 after:content-arrow-right-icon`,
          className,
        )}
        ref={ref}
        type="button"
        {...props}
      />
    )
  },
)
