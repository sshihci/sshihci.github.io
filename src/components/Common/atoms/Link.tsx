import clsx from 'clsx'
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby'
import { useIsSameSite } from '~/hooks/useIsSameSite'
import { LinkStyle } from './LinkStyle'

export const Link = ({
  className,
  to,
  ...props
}: Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'>): JSX.Element => {
  const isSameSite = useIsSameSite(to)

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
