import Layout from 'Components/element/Layout/Layout'
import React from 'react'

const Tickets: NextPageWithLayout = () => {
  return (
    <div>Tickets</div>
  )
}

Tickets.getLayout = (page: React.ReactNode) => {
  return (
    <Layout title="Tickets Page ">
      {page}
    </Layout>
  )

}
export default Tickets