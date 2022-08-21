import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode,
  title: string
}
function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout