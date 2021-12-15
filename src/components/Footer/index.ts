import { Footer as FooterRoot } from './Footer'
import { FooterAddress } from './FooterAddress'
import { FooterAddressName } from './FooterAddressName'
import { FooterAddressWrapper } from './FooterAddressWrapper'
import { FooterSubTitle } from './FooterSubTitle'
import { FooterTitle } from './FooterTitle'
import { FooterTitleWrapper } from './FooterTitleWrapper'

type Footer = typeof FooterRoot & {
  TitleWrapper: typeof FooterTitleWrapper
  SubTitle: typeof FooterSubTitle
  Title: typeof FooterTitle
  AddressWrapper: typeof FooterAddressWrapper
  Address: typeof FooterAddress
  AddressName: typeof FooterAddressName
}

const Footer = FooterRoot as Footer
Footer.TitleWrapper = FooterTitleWrapper
Footer.SubTitle = FooterSubTitle
Footer.Title = FooterTitle
Footer.AddressWrapper = FooterAddressWrapper
Footer.Address = FooterAddress
Footer.AddressName = FooterAddressName

export default Footer
