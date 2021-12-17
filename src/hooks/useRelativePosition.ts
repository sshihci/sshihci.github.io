import { RefObject, useMemo } from 'react'
import { usePosition } from './usePosition'

export type RelativePosition = {
  ratio: number
}

export const useRelativePosition = <T extends Element, V extends Element>(
  parentRef: RefObject<T>,
  ref: RefObject<V>,
): RelativePosition | null => {
  const parentPosition = usePosition(parentRef)
  const position = usePosition(ref)

  const relativePosition = useMemo<RelativePosition | null>(() => {
    if (!parentPosition || !position) {
      return null
    }

    // (x1, y1)is corner of parent, (x2, y2) is center of child
    const x1 = parentPosition.width
    const y1 = parentPosition.height
    const x2 = position.left - parentPosition.left + position.width / 2
    const y2 = -(position.top - parentPosition.top) + position.height / 2

    const r1_2 = x1 ** 2 + y1 ** 2

    const ratio = (x1 * x2 + y1 * y2) / r1_2

    return {
      ratio,
    }
  }, [parentPosition, position])

  return relativePosition
}
