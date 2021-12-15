import { NewsListItem as NewsListItemRoot } from './NewsListItem'
import { NewsListItemDate } from './NewsListItemDate'
import { NewsListItemTitle } from './NewsListItemTitle'

type NewsListItem = typeof NewsListItemRoot & {
  Date: typeof NewsListItemDate
  Title: typeof NewsListItemTitle
}

const NewsListItem = NewsListItemRoot as NewsListItem
NewsListItem.Date = NewsListItemDate
NewsListItem.Title = NewsListItemTitle

export default NewsListItem
