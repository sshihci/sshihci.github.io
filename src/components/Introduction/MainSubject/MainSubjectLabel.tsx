import clsx from 'clsx'
import { forwardRef } from 'react'
import { Square } from '~/components/Common/atoms/Square'

export const MainSubjectLabel = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, children, ...props }, ref) => {
  return (
    <p
      className={clsx('font-noto text-lg text-gray-600', className)}
      ref={ref}
      {...props}
    >
      <Square className="text-cyan-400" />

      {children}
    </p>
  )
})
