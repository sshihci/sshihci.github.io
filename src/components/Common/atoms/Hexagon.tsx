import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { RefObject, useEffect, useRef } from 'react'
import { useRelativePosition } from '~/hooks/useRelativePosition'

type HexagonProps = {
  size: string
  parentRef: RefObject<Element>
  state: MotionValue<number>
}

export const Hexagon = ({
  size,
  parentRef,
  state,
}: HexagonProps): JSX.Element => {
  const ref = useRef(null)
  const relative = useRelativePosition(parentRef, ref)

  const delay = useMotionValue(0)

  useEffect(() => {
    if (relative?.ratio) {
      delay.set(relative.ratio)
    }
  }, [delay, relative?.ratio])

  const num = useTransform<number, number>(
    [state, delay],
    ([prevState, prevDelay]) => ((prevState ?? 0) + (prevDelay ?? 0)) % 1,
  )

  const color = useTransform(
    num,
    [0, 0.5, 1],
    ['#93DAE3', '#42C2D3', '#93DAE3'],
  )

  return (
    <svg
      className="drop-shadow-hexagon"
      height={size}
      ref={ref}
      viewBox="-150 -150 300 300"
      width={size}
    >
      <motion.path
        // animate={{
        //   fill: ['#93DAE3', '#000000', '#93DAE3'],
        // }}
        d="M130 75 L0 150 L-130 75 L-130 -75 L-0 -150 L130 -75 z"
        fill={color}
        // transition={{
        //   duration: DURATION,
        //   ease: 'linear',
        //   repeat: Infinity,
        //   repeatDelay: delay,
        //   repeatType: 'loop',
        // }}
      />
    </svg>
  )
}
