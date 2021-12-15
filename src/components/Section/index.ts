import { Section as SectionRoot } from './Section'
import { SectionBody } from './SectionBody'
import { SectionTitle } from './SectionTitle'

type Section = typeof SectionRoot & {
  Title: typeof SectionTitle
  Body: typeof SectionBody
}

const Section = SectionRoot as Section
Section.Title = SectionTitle
Section.Body = SectionBody

export default Section
