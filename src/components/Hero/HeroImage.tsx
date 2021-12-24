import clsx from 'clsx'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { ComponentProps } from 'react'

type HeroImageProps = Omit<ComponentProps<typeof GatsbyImage>, 'image'> & {
  mobileImage: IGatsbyImageData
  desktopImage: IGatsbyImageData
}

export const HeroImage = ({
  className,
  mobileImage,
  desktopImage,
  ...props
}: HeroImageProps): JSX.Element => {
  return (
    <div className="overflow-hidden relative">
      <GatsbyImage
        className={clsx(
          'hidden md:block object-cover w-full h-[32rem]',
          className,
        )}
        image={desktopImage}
        imgClassName="object-right-top"
        {...props}
      />

      <GatsbyImage
        className={clsx(
          'block md:hidden object-cover w-full h-[32rem]',
          className,
        )}
        image={mobileImage}
        imgClassName="object-right-top"
        {...props}
      />
    </div>
  )
}
