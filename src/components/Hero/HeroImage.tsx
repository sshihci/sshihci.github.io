import clsx from 'clsx'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ComponentProps } from 'react'

export const HeroImage = ({
  className,
  ...props
}: ComponentProps<typeof GatsbyImage>): JSX.Element => {
  return (
    <div className="overflow-hidden relative">
      <GatsbyImage
        className={clsx('object-cover w-full h-[32rem]', className)}
        {...props}
      />

      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-60" />
    </div>
  )
}
