import { Introduction as IntroductionRoot } from './Introduction'
import { IntroductionDescription } from './IntroductionDescription'
import { IntroductionImage } from './IntroductionImage'
import IntroductionName from './IntroductionName'
import { IntroductionProfile } from './IntroductionProfile'
import MainSubject from './MainSubject'

type Introduction = typeof IntroductionRoot & {
  Name: typeof IntroductionName
  MainSubject: typeof MainSubject
  Description: typeof IntroductionDescription
  Profile: typeof IntroductionProfile
  Image: typeof IntroductionImage
}

const Introduction = IntroductionRoot as Introduction
Introduction.Name = IntroductionName
Introduction.MainSubject = MainSubject
Introduction.Description = IntroductionDescription
Introduction.Profile = IntroductionProfile
Introduction.Image = IntroductionImage

export default Introduction
