import clsx from 'clsx'
import { useTime, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Hexagon } from '../atoms/Hexagon'

type HexagonMapProps = {
  className?: string
  duration?: number
}

export const HexagonMap = ({
  className,
  duration = 1000,
}: HexagonMapProps): JSX.Element => {
  const ref = useRef(null)
  const time = useTime()
  const state = useTransform(time, (prev) => (prev % duration) / duration)

  return (
    <div
      className={clsx('inline-flex flex-col gap-3 animate-pulse', className)}
      ref={ref}
    >
      <div className="flex flex-row gap-6">
        {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
          <Hexagon state={state} delay={i * DELAY} key={i} parentRef={ref} size="15" />
        ))} */}

        <Hexagon parentRef={ref} size="15" state={state} />

        <Hexagon parentRef={ref} size="15" state={state} />

        <Hexagon parentRef={ref} size="15" state={state} />

        <Hexagon parentRef={ref} size="15" state={state} />

        <Hexagon parentRef={ref} size="15" state={state} />

        <Hexagon parentRef={ref} size="15" state={state} />
      </div>

      <div className="flex flex-row gap-6">
        <Hexagon parentRef={ref} size="15" state={state} />

        <Hexagon parentRef={ref} size="15" state={state} />

        <Hexagon parentRef={ref} size="15" state={state} />

        <Hexagon parentRef={ref} size="15" state={state} />

        <Hexagon parentRef={ref} size="15" state={state} />

        <Hexagon parentRef={ref} size="15" state={state} />
      </div>

      <div className="flex flex-row gap-6">
        <Hexagon parentRef={ref} size="15" state={state} />

        <Hexagon parentRef={ref} size="15" state={state} />

        <Hexagon parentRef={ref} size="15" state={state} />

        <Hexagon parentRef={ref} size="15" state={state} />

        <Hexagon parentRef={ref} size="15" state={state} />

        <Hexagon parentRef={ref} size="15" state={state} />
      </div>
    </div>
  )
}
