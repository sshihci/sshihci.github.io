import { Header as HeaderRoot } from './Header'
import HeaderNav from './HeaderNav'
import HeaderNavMobile from './HeaderNavMobile'
import { HeaderSubTitle } from './HeaderSubTitle'
import { HeaderTitle } from './HeaderTitle'
import { HeaderTitleWrapper } from './HeaderTitleWrapper'

type Header = typeof HeaderRoot & {
  Title: typeof HeaderTitle
  SubTitle: typeof HeaderSubTitle
  TitleWrapper: typeof HeaderTitleWrapper
  Nav: typeof HeaderNav
  NavMobile: typeof HeaderNavMobile
}

const Header = HeaderRoot as Header
Header.Title = HeaderTitle
Header.SubTitle = HeaderSubTitle
Header.TitleWrapper = HeaderTitleWrapper
Header.Nav = HeaderNav
Header.NavMobile = HeaderNavMobile

export default Header
