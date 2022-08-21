import Layout from 'Components/element/Layout/Layout'
import React from 'react'

import FormAddNewTicket from 'Components/UI/form/FormAddNewTicket'
import Breadcrumb from 'Components/UI/Breadcrumb/index'

import { PATH } from 'constants/Path'
const AddNewTicketsPaths = [
  {
    label: 'Home',
    src: PATH.home
  },
  {
    label: 'dashboard',
    src: PATH.dashboard
  },
  {
    label: 'AddNewTickets',
    src: PATH.AddNewTickets
  },
]
const AddNewTickets: NextPageWithLayout = () => {
  return (
    <div className=''>
      <div className="pt-2 pl-2">
        <Breadcrumb paths={AddNewTicketsPaths} />
      </div>
      <div className="flex items-center justify-center pt-10">
        <FormAddNewTicket />
      </div>
    </div>
  )
}
AddNewTickets.getLayout = (page: React.ReactNode) => {
  return (
    <Layout title="AddNewTickets">{page}</Layout>
  )
}
export default AddNewTickets