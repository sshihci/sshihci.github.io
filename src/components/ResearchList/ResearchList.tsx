import clsx from 'clsx'
import { forwardRef } from 'react'

export const ResearchList = forwardRef<
  HTMLUListElement,
  JSX.IntrinsicElements['ul']
>(({ className, ...props }, ref) => (
  <ul
    className={clsx('flex flex-col gap-12', className)}
    {...props}
    ref={ref}
  />
))
