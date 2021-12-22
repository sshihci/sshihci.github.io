import clsx from 'clsx'
import { forwardRef } from 'react'

export const SectionTitle = forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h2']
>(({ className, ...props }, ref) => {
  return (
    <div className="flex flex-row gap-5 items-center">
      <div
        className={clsx('w-12 border-0 h-[1.125px] bg-cyan-600', 'sm:w-28')}
      />

      <h2
        className={clsx('flex-1 text-4xl font-light', className)}
        ref={ref}
        {...props}
      />
    </div>
  )
})
