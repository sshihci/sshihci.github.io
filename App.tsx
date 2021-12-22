import { GatsbyBrowser, GatsbySSR } from 'gatsby'
import { ToastProvider } from 'react-toast-notifications'

type App = GatsbyBrowser['wrapRootElement'] & GatsbySSR['wrapRootElement']

export const App: App = ({ element }) => {
  return <ToastProvider>{element}</ToastProvider>
}
