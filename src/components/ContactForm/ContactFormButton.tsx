import clsx from 'clsx'
import { Button } from '../Common/atoms/Button'

export const ContactFormButton = ({
  className,
  ...props
}: Omit<JSX.IntrinsicElements['button'], 'ref'>): JSX.Element => {
  return <Button className={clsx('', className)} type="submit" {...props} />
}
