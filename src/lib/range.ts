/**
 * @example ```typescript
 * range(0, 10) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * range(1, 11) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * ```
 */
export const range = (start: number, end: number): number[] =>
  [...Array(end - start)].map((_, i) => start + i)
