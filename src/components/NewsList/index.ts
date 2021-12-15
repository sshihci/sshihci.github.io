import { NewsList as NewsListRoot } from './NewsList'
import NewsListItem from './NewsListItem'

type NewsList = typeof NewsListRoot & {
  Item: typeof NewsListItem
}

const NewsList = NewsListRoot as NewsList
NewsList.Item = NewsListItem

export default NewsList
