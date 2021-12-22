import { useCallback, useState } from 'react'

type UseNumber = [
  number,
  {
    incrementN: (n: number) => void
    decrementN: (n: number) => void
    increment: () => void
    decrement: () => void
    setValue: (n: number) => void
  },
]

export const useNumber = (initial = 0): UseNumber => {
  const [value, setValue] = useState(initial)

  const incrementN = useCallback(
    (n: number) => setValue((prev) => prev + n),
    [],
  )
  const increment = useCallback(() => incrementN(1), [incrementN])

  const decrementN = useCallback(
    (n: number) => setValue((prev) => prev - n),
    [],
  )
  const decrement = useCallback(() => decrementN(1), [decrementN])

  return [value, { decrement, decrementN, increment, incrementN, setValue }]
}
