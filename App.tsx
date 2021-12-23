import { domAnimation, LazyMotion } from 'framer-motion'
import { GatsbyBrowser, GatsbySSR } from 'gatsby'
import { ToastProvider } from 'react-toast-notifications'

type App = GatsbyBrowser['wrapRootElement'] & GatsbySSR['wrapRootElement']

export const App: App = ({ element }) => {
  return (
    <ToastProvider>
      <LazyMotion features={domAnimation} strict>
        {element}
      </LazyMotion>
    </ToastProvider>
  )
}
