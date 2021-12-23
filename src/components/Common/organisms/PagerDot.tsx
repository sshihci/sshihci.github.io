import { m } from 'framer-motion'
import { useMemo } from 'react'
import { VscCircleFilled, VscCircleLargeFilled } from 'react-icons/vsc'
import { useBoolean } from '~/hooks/useBoolean'

type PagerDotProps = {
  onClick: () => void
  isCurrent: boolean
  page: number
}

export const PagerDot = ({
  onClick,
  isCurrent,
  page,
}: PagerDotProps): JSX.Element => {
  const [isHovered, { setTrue, setFalse }] = useBoolean()

  const Dot = useMemo(() => {
    return isCurrent ? VscCircleLargeFilled : VscCircleFilled
  }, [isCurrent])

  return (
    <div className="flex flex-row justify-center">
      <button
        className="relative w-4 h-4"
        onClick={onClick}
        onMouseEnter={setTrue}
        onMouseLeave={setFalse}
        onTouchEnd={setFalse}
        onTouchStart={setTrue}
        type="button"
      >
        <m.div animate={{ scale: isHovered ? 0.1 : 1 }}>
          <Dot size={12} />
        </m.div>

        <m.div
          animate={{ scale: isHovered ? 1 : 0 }}
          className="absolute -top-2"
        >
          <span>{page}</span>
        </m.div>
      </button>
    </div>
  )
}
