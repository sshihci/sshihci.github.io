import { GatsbySSR } from 'gatsby'
import { App } from './App'

export const wrapRootElement: GatsbySSR['wrapRootElement'] = App
