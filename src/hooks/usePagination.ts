import { useCallback, useMemo } from 'react'
import { useNumber } from './useNumber'

type UsePagination<T> = {
  currentPage: number
  nextPage: number | null
  hasNextPage: boolean
  prevPage: number | null
  hasPrevPage: boolean
  totalPage: number
  currentItems: ReadonlyArray<T>
  goToNextPage: () => void
  goToPrevPage: () => void
  goTo: (page: number) => void
}

type UsePaginationOptions<T> = {
  initial?: number
  perPage: number
  items: ReadonlyArray<T>
}

export const usePagination = <T>({
  perPage,
  items,
  initial = 1,
}: UsePaginationOptions<T>): UsePagination<T> => {
  const [currentPage, { increment, decrement, setValue }] = useNumber(initial)

  const totalPage = useMemo(() => {
    return Math.ceil(items.length / perPage)
  }, [perPage, items.length])

  const nextPage = useMemo(() => {
    if (currentPage < totalPage) {
      return currentPage + 1
    }
    return null
  }, [currentPage, totalPage])

  const hasNextPage = useMemo(() => {
    return nextPage !== null
  }, [nextPage])

  const prevPage = useMemo(() => {
    if (currentPage > 1) {
      return currentPage - 1
    }
    return null
  }, [currentPage])

  const hasPrevPage = useMemo(() => {
    return prevPage !== null
  }, [prevPage])

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * perPage
    const end = currentPage * perPage
    return items.slice(start, end)
  }, [currentPage, items, perPage])

  const goToNextPage = useCallback(() => {
    if (nextPage) {
      increment()
    }
  }, [increment, nextPage])

  const goToPrevPage = useCallback(() => {
    if (prevPage) {
      decrement()
    }
  }, [decrement, prevPage])

  const goTo = useCallback(
    (page: number) => {
      if (page > 0 && page <= totalPage) {
        setValue(page)
      }
    },
    [setValue, totalPage],
  )

  return {
    currentItems,
    currentPage,
    goTo,
    goToNextPage,
    goToPrevPage,
    hasNextPage,
    hasPrevPage,
    nextPage,
    prevPage,
    totalPage,
  }
}
