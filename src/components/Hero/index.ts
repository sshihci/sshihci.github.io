import { Hero as HeroRoot } from './Hero'
import HeroBadge from './HeroBadge'
import { HeroImage } from './HeroImage'
import { HeroText } from './HeroText'

type Hero = typeof HeroRoot & {
  Image: typeof HeroImage
  Text: typeof HeroText
  Badge: typeof HeroBadge
}

const Hero = HeroRoot as Hero
Hero.Image = HeroImage
Hero.Text = HeroText
Hero.Badge = HeroBadge

export default Hero
