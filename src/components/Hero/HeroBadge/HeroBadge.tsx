import clsx from 'clsx'
import { forwardRef } from 'react'

export const HeroBadge = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>(({ className, ...props }, ref) => {
  return (
    <div className="absolute top-0 right-0 z-10 drop-shadow-2xl max-h-[60%] max-w-[80%] aspect-video">
      <div
        className={clsx(
          'pt-2 pr-8 pb-20 pl-40 w-full h-full bg-cyan-500',
          'sm:pb-44 sm:pl-64',
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
