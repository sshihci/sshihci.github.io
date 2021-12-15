import { HeaderNav as HeaderNavRoot } from './HeaderNav'
import { HeaderNavItem } from './HeaderNavItem'

type HeaderNav = typeof HeaderNavRoot & {
  Item: typeof HeaderNavItem
}

const HeaderNav = HeaderNavRoot as HeaderNav
HeaderNav.Item = HeaderNavItem

export default HeaderNav
