// https://github.com/fontsource/fontsource/tree/main/packages/noto-sans-jp
import '@fontsource/noto-sans-jp/300.css'
import '@fontsource/noto-sans-jp/400.css'
import { GatsbyBrowser } from 'gatsby'
import 'tailwindcss/tailwind.css'
import { App } from './App'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = App
