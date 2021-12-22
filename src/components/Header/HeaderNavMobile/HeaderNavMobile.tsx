import clsx from 'clsx'
import { forwardRef, MouseEventHandler, useCallback } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useBoolean } from '~/hooks/useBoolean'

export const HeaderNavMobile = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['nav']
>(({ className, children, ...props }, ref) => {
  const [isOpen, { setTrue, setFalse }] = useBoolean()

  const stopPropagation = useCallback<MouseEventHandler<HTMLDivElement>>(
    (e) => {
      e.stopPropagation()
      setFalse()
    },
    [setFalse],
  )

  return (
    <nav className={clsx('block', 'lg:hidden', className)} ref={ref} {...props}>
      <div className={clsx(!isOpen ? 'block' : 'hidden')}>
        <button
          className="flex flex-col items-center"
          onClick={setTrue}
          type="button"
        >
          <AiOutlineMenu size={36} />

          <span className="text-xs">メニュー</span>
        </button>
      </div>

      <div
        className={clsx(
          isOpen ? 'block' : 'hidden',
          'fixed top-0 left-0 z-20 w-screen h-screen bg-gray-100 bg-opacity-90',
          'py-24 px-12',
        )}
        onClick={setFalse}
      >
        <div className="relative">
          <button
            className="absolute top-0 right-0 p-2"
            onClick={setFalse}
            type="button"
          >
            <AiOutlineClose size={36} />
          </button>
        </div>

        <div
          className="flex flex-col gap-4 w-full h-full"
          onClick={stopPropagation}
        >
          {children}
        </div>
      </div>
    </nav>
  )
})
