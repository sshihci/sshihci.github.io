import { ResearchList as RootResearchList } from './ResearchList'
import ResearchListItem from './ResearchListItem'

type ResearchList = typeof RootResearchList & {
  Item: typeof ResearchListItem
}

const ResearchList = RootResearchList as ResearchList
ResearchList.Item = ResearchListItem

export default ResearchList
