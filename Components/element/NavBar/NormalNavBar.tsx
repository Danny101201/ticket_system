import React from 'react'
import Link from 'next/link'

import { PATH } from 'constants/Path'
function NormalNavBar() {
  return (
    <div className="px-5 py-3 bg-[#FFE9AE] hidden md:block">
      <div className='flex items-center justify-between'>
        <div className="text-3xl">Logo .</div>
        <ul className="flex gap-5 text-gray-400 ">
          <li className="hover:text-black cursor-pointer">
            <Link href={PATH.dashboard}>
              DashBoard
            </Link>
          </li>
          <li className="hover:text-black cursor-pointer">
            <Link href={PATH.tickets}>
              tickets
            </Link>
          </li>
          <li className="hover:text-black cursor-pointer">
            <Link href={PATH.Login}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NormalNavBar