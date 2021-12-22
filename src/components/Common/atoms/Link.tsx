import { useLocation } from '@reach/router'
import clsx from 'clsx'
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby'
import { useMemo } from 'react'
import { LinkStyle } from './LinkStyle'

export const Link = ({
  className,
  to,
  ...props
}: Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'>): JSX.Element => {
  const location = useLocation()
  const isSameSite = useMemo(() => {
    if (to.startsWith('/')) return true
    try {
      const toUrl = new URL(to)
      const locationUrl = new URL(location.href)
      return toUrl.origin === locationUrl.origin
    } catch (e) {
      console.error(e)
      return false
    }
  }, [location.href, to])

  if (isSameSite) {
    return (
      <GatsbyLink
        className={clsx('', LinkStyle, className)}
        to={to}
        {...props}
      />
    )
  }
  return (
    <a
      className={clsx('', LinkStyle, className)}
      href={to}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  )
}
