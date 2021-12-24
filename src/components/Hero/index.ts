import { Hero as HeroRoot } from './Hero'
import { HeroImage } from './HeroImage'
import { HeroText } from './HeroText'

type Hero = typeof HeroRoot & {
  Image: typeof HeroImage
  Text: typeof HeroText
}

const Hero = HeroRoot as Hero
Hero.Image = HeroImage
Hero.Text = HeroText

export default Hero
