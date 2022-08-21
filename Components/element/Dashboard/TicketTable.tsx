import Link from 'next/link';
import { type } from 'os';
import React from 'react'



interface TicketTableProps {
  Lists: ListsType[]
}
function TicketTable({ Lists }: TicketTableProps) {
  return (
    <table className="table-auto ">
      <thead>
        <tr className="border-b border-b-2 border-gray-200 font-bold">
          <td className="py-2">#</td>
          <td className="py-2">Subjects</td>
          <td className="py-2">Status</td>
          <td className="py-2">Opened Data</td>
        </tr>
      </thead>
      <tbody>
        {Lists.length ?
          Lists.map((row) => (
            <tr key={row.id}>
              <td className='py-2'>{row.id}</td>
              <td className='py-2'>
                <Link href={`/ticket/${row.id}`}>{row.subject}</Link>
              </td>
              <td className='py-2'>{row.status}</td>
              <td className='py-2'>{new Date(row.addedAt).toLocaleString()}</td>
            </tr>
          )) :
          <tr className='grid w-screen'>
            <td className="col-span-full py-5 text-gray-400 text-2xl md:text-left text-center">
              No ticket show{" "}
            </td>
          </tr>
        }
      </tbody>
    </table>
  )
}

export default TicketTable