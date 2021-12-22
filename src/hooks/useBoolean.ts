import { useCallback, useState } from 'react'

export type UseBoolean = [
  boolean,
  {
    toggle: () => void
    setTrue: () => void
    setFalse: () => void
    setValue: (value: boolean) => void
  },
]

export const useBoolean = (initial = false): UseBoolean => {
  const [value, setValue] = useState(initial)

  const toggle = useCallback(() => setValue((prev) => !prev), [])
  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])

  return [value, { setFalse, setTrue, setValue, toggle }]
}
