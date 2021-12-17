import { HeroBadge as HeroBadgeRoot } from './HeroBadge'
import { HeroBadgeText } from './HeroBadgeText'

type HeroBadge = typeof HeroBadgeRoot & {
  Text: typeof HeroBadgeText
}

const HeroBadge = HeroBadgeRoot as HeroBadge
HeroBadge.Text = HeroBadgeText

export default HeroBadge
