import { useLocation } from '@reach/router'
import clsx from 'clsx'
import { GatsbyLinkProps, Link } from 'gatsby'
import { useMemo } from 'react'

export const HeaderNavItem = ({
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
        'font-noto text-lg text-gray-600 hover:underline transition-all duration-500 decoration-cyan-400 underline-offset-4',
        isActive && 'underline',
        className,
      )}
      {...props}
    />
  )
}
