import clsx from 'clsx'
import { forwardRef } from 'react'

export const SectionTitle = forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h2']
>(({ className, ...props }, ref) => {
  return (
    <div className="flex flex-row gap-5 items-center">
      <div className="w-36 border-0 h-[1.125px] bg-cyan-600" />

      <h2
        className={clsx(
          'flex-1 font-noto text-4xl font-light text-gray-600',
          className,
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
})
