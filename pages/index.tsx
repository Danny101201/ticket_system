import React, { useEffect } from 'react'

import Layout from 'Components/element/Layout/Layout'

import { NextPageWithLayout } from './_app'
import { GetStaticProps, NextPage } from 'next'

interface HomeProp {
  time: Date
}
const Home: NextPageWithLayout<{
  time: Date
}> = ({ time }) => {
  useEffect(() => {
    fetch('/posts').then(res => console.log(res.json()))
  }, [])
  return (
    <>
    <div>Home</div>
      times :{time}
      <p>123</p>
    </>
  )
}
export async function getStaticProps(context: GetStaticProps) {
  console.log('next is running in getStaticProps')
  return {
    props: {
      time: new Date().toISOString()
    }, // will be passed to the page component as props
    revalidate: 10
  }
}
Home.getLayout = (page) => {
  return (
    <Layout title="Home">
      {page}
    </Layout>
  )

}

export default Home