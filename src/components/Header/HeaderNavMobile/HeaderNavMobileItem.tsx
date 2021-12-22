import { useLocation } from '@reach/router'
import clsx from 'clsx'
import { GatsbyLinkProps, Link } from 'gatsby'
import { useMemo } from 'react'

export const HeaderNavMobileItem = ({
  className,
  ...props
}: Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'>): JSX.Element => {
  const location = useLocation()

  const isActive = useMemo(
    () =>
      location.href &&
      location.origin &&
      decodeURI(location.href.replace(location.origin, '')) === props.to,
    [props.to, location.href, location.origin],
  )

  return (
    <Link
      className={clsx(
        'inline-block py-3 px-8 max-w-max text-3xl hover:underline decoration-cyan-400 underline-offset-4',
        isActive && 'underline',
        className,
      )}
      {...props}
    />
  )
}
