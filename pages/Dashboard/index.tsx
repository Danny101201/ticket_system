import Layout from 'Components/element/Layout/Layout'
import React from 'react'

import Breadcrumb from 'Components/UI/Breadcrumb/index'
import TicketTable from 'Components/element/Dashboard/TicketTable'

import { PATH } from 'constants/Path'
import dummyTickets from 'data/dummy-tickets.json'
let BreadcrumbPaths = [
  { label: 'Home', src: PATH.home },
  { label: 'Dashboard', src: PATH.dashboard }
]
const Dashboard: NextPageWithLayout = () => {
  return (
    <div className="bg-white p-5 flex  flex-col">
      <Breadcrumb paths={BreadcrumbPaths} />
      <div className="flex flex-col items-center justify-cemter">
        <button className="bg-yellow-500 text-white py-3 px-8 rounded-md active:bg-yellow-600 shadow-md">Add new Tickets</button>
        <div className='text-center mt-2'>
          <p>Total Tickets : <span>50</span></p>
          <p>Pemding Tickets : <span>5</span></p>
        </div>
      </div>
      <div>Recently Added tickets</div>
      <TicketTable Lists={dummyTickets} />
    </div>
  )
}

Dashboard.getLayout = (page: React.ReactNode) => {
  return (
    <Layout title="Dashboard Page ">
      {page}
    </Layout>
  )

}
export default Dashboard