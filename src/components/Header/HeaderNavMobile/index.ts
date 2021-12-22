import { HeaderNavMobile as RootHeaderNavMobile } from './HeaderNavMobile'
import { HeaderNavMobileItem } from './HeaderNavMobileItem'

type HeaderNavMobile = typeof RootHeaderNavMobile & {
  Item: typeof HeaderNavMobileItem
}

const HeaderNavMobile = RootHeaderNavMobile as HeaderNavMobile
HeaderNavMobile.Item = HeaderNavMobileItem

export default HeaderNavMobile
