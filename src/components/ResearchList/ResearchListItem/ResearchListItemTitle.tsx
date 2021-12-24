import clsx from 'clsx'
import { forwardRef } from 'react'
import { Square } from '~/components/Common/atoms/Square'

export const ResearchListItemTitle = forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p']
>(({ className, children, ...props }, ref) => (
  <p
    className={clsx('flex flex-row items-start', 'lg:mt-6', className)}
    {...props}
    ref={ref}
  >
    <Square className="mr-1 text-cyan-400" />

    <span className="inline-block lg:w-24">{children}</span>
  </p>
))
