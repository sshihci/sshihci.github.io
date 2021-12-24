import { ResearchListItem as RootResearchListItem } from './ResearchListItem'
import { ResearchListItemBody } from './ResearchListItemBody'
import { ResearchListItemTitle } from './ResearchListItemTitle'

type ResearchListItem = typeof RootResearchListItem & {
  Title: typeof ResearchListItemTitle
  Body: typeof ResearchListItemBody
}

const ResearchListItem = RootResearchListItem as ResearchListItem
ResearchListItem.Title = ResearchListItemTitle
ResearchListItem.Body = ResearchListItemBody

export default ResearchListItem
