import clsx from 'clsx'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ComponentProps } from 'react'

export const IntroductionImage = ({
  className,
  ...props
}: ComponentProps<typeof GatsbyImage>): JSX.Element => {
  return (
    <GatsbyImage
      className={clsx('flex-shrink-0 w-64 h-64 rounded-md', className)}
      {...props}
    />
  )
}
