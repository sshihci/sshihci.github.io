import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Key, ReactNode, useRef } from 'react'
import { usePagination } from '~/hooks/usePagination'
import { usePosition } from '~/hooks/usePosition'
import { Pager } from './Pager'

type PaginationItemProps = {
  children?: ReactNode
  index: number
}

const PaginationItem = ({
  children,
  index,
}: PaginationItemProps): JSX.Element => {
  const ref = useRef(null)
  const position = usePosition(ref)

  return (
    <motion.div
      animate={{ opacity: 1, x: 0 }}
      exit={{
        opacity: 0,
        position: 'absolute',
        top: (position?.height ?? 0) * index,
        width: '100%',
        x: -300,
      }}
      initial={{ opacity: 0, x: 300 }}
      ref={ref}
      role="listitem"
      transition={{
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  )
}

export type PaginationRenderItemProps<T, V> = {
  item: Readonly<T>
  index: number
  commonProps: V
}

export type PaginationRenderItem<T, V> = (
  props: PaginationRenderItemProps<T, V>,
) => ReactNode

export type PaginationProps<T, V> = {
  items: ReadonlyArray<T>
  perPage: number
  renderItem: PaginationRenderItem<T, V>
  keyExtractor: (item: T) => Key
  commonProps: V
  className?: string
  listClassName?: string
}

export const Pagination = <T, V>({
  items,
  perPage,
  renderItem,
  commonProps,
  keyExtractor,
  listClassName,
  className,
}: PaginationProps<T, V>): JSX.Element => {
  const {
    currentPage,
    totalPage,
    currentItems,
    goToPrevPage,
    goToNextPage,
    hasNextPage,
    hasPrevPage,
    goTo,
  } = usePagination({
    items,
    perPage,
  })

  return (
    <div className={clsx('', className)}>
      <div
        className={clsx('flex relative flex-col', listClassName)}
        role="list"
      >
        <AnimatePresence>
          {currentItems.map((item, index) => (
            <PaginationItem index={index} key={keyExtractor(item)}>
              {renderItem({ commonProps, index, item })}
            </PaginationItem>
          ))}
        </AnimatePresence>
      </div>

      <Pager
        className="mx-auto max-w-max"
        currentPage={currentPage}
        goTo={goTo}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
        totalPage={totalPage}
      />
    </div>
  )
}
