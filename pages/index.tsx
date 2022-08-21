import React from 'react'

import Layout from 'Components/element/Layout/Layout'

import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <div>Home</div>
  )
}
Home.getLayout = (page) => {
  return (
    <Layout title="Home">
      {page}
    </Layout>
  )

}

export default Home