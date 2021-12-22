import clsx from 'clsx'
import { useCallback } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { range } from '~/lib/range'
import { PagerDot } from './PagerDot'

type PagerProps = {
  goToPrevPage: () => void
  goToNextPage: () => void
  goTo: (page: number) => void
  hasPrevPage: boolean
  hasNextPage: boolean
  totalPage: number
  currentPage: number
  className?: string
}

export const Pager = ({
  goToNextPage,
  goToPrevPage,
  hasNextPage,
  hasPrevPage,
  totalPage,
  className,
  currentPage,
  goTo,
}: PagerProps): JSX.Element => {
  const getGoTo = useCallback((page: number) => () => goTo(page), [goTo])

  return (
    <div className={clsx('flex flex-row gap-2 items-center', className)}>
      <div className="flex flex-row justify-center">
        <button disabled={!hasPrevPage} onClick={goToPrevPage} type="button">
          <AiOutlineLeft size={24} />
        </button>
      </div>

      <div className="flex flex-row gap-2 items-center">
        {range(1, totalPage + 1).map((page) => (
          <PagerDot
            isCurrent={currentPage === page}
            key={page}
            onClick={getGoTo(page)}
            page={page}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center">
        <button disabled={!hasNextPage} onClick={goToNextPage} type="button">
          <AiOutlineRight size={24} />
        </button>
      </div>
    </div>
  )
}
