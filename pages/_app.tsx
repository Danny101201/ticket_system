import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'


import { Provider } from 'react-redux'
import { store } from 'app/store'
import Header from 'next/head'


export type NextPageWithLayout<T = any> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page => page))
  return (
    <Provider store={store}>
      <Header>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.20.0/dist/full.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.tailwindcss.com" defer></script>
      </Header>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  )
}

export default MyApp
