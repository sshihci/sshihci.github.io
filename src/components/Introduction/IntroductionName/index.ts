import { IntroductionName as IntroductionNameRoot } from './IntroductionName'
import { IntroductionNameEnglish } from './IntroductionNameEnglish'
import { IntroductionNameJapanese } from './IntroductionNameJapanese'

type IntroductionName = typeof IntroductionNameRoot & {
  Japanese: typeof IntroductionNameJapanese
  English: typeof IntroductionNameEnglish
}

const IntroductionName = IntroductionNameRoot as IntroductionName
IntroductionName.Japanese = IntroductionNameJapanese
IntroductionName.English = IntroductionNameEnglish

export default IntroductionName
