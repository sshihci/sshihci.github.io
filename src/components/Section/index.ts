import { Section as SectionRoot } from './Section'
import { SectionBody } from './SectionBody'
import { SectionTitle } from './SectionTitle'

type SectionRoot = typeof SectionRoot & {
  Title: typeof SectionTitle
  Body: typeof SectionBody
}

const Section = SectionRoot as SectionRoot
Section.Title = SectionTitle
Section.Body = SectionBody

export default Section
