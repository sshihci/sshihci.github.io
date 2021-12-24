import { useLocation } from '@reach/router'
import { useMemo } from 'react'
export const useIsSameSite = (url: string): boolean => {
  const location = useLocation()
  const isSameSite = useMemo(() => {
    if (url.startsWith('/') || url.startsWith('#') || url.startsWith('.'))
      return true
    try {
      const toUrl = new URL(url)
      const locationUrl = new URL(location.href)
      return toUrl.origin === locationUrl.origin
    } catch {
      return false
    }
  }, [location.href, url])

  return isSameSite
}
