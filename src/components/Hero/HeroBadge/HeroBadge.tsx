import clsx from 'clsx'
import { forwardRef } from 'react'

export const HeroBadge = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>(({ className, ...props }, ref) => {
  return (
    <div className="absolute top-0 right-0 z-10 drop-shadow-2xl h-[448px] w-[640px]">
      <div
        className={clsx(
          'flex justify-center items-center pb-44 pl-64 w-full h-full bg-cyan-500',
          className,
        )}
        ref={ref}
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
        }}
        {...props}
      />
    </div>
  )
})
