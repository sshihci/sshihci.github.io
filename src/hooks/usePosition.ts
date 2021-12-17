import { RefObject, useCallback, useEffect, useState } from 'react'

export type Position = Pick<
  DOMRectReadOnly,
  'bottom' | 'height' | 'left' | 'right' | 'width' | 'top'
>

export const usePosition = <T extends Element>(
  ref: RefObject<T>,
): Position | null => {
  const [position, setPosition] = useState<Position | null>(null)

  const updatePosition = useCallback(() => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPosition({
      bottom: rect.bottom + window.scrollY,
      height: rect.height,
      left: rect.left + window.scrollX,
      right: rect.right + window.scrollX,
      top: rect.top + window.scrollY,
      width: rect.width,
    })
  }, [ref])

  useEffect(() => {
    updatePosition()
    window.addEventListener('resize', updatePosition)
    return () => {
      window.removeEventListener('resize', updatePosition)
    }
  }, [updatePosition])

  return position
}
