import React, { useState } from 'react'
import Link from 'next/link'

import { MenuIconSvg } from 'assert/icons/index'
import { PATH } from 'constants/Path'

function MobilenavBar() {
  const [toggle, setToggle] = useState<boolean>(false)
  return (
    <div className="px-5 py-3 bg-[#FFE9AE] block md:hidden ">
      <div className='flex items-center justify-between z-10'>
        <div className="text-3xl">Logo .</div>
        <ul className={`flex flex-col  justify-center  text-gray-400 absolute top-full left-0 bg-[#fdd567] w-screen  transition-all  translate-x-[-100%] ${toggle && 'translate-x-0'}`}>
          <li className="text-black cursor-pointer border-b-2 border-black px-2 py-4 flex items-center ">
            <Link href={PATH.dashboard}>
              DashBoard
            </Link>
          </li>
          <li className="text-black cursor-pointer border-b-2 border-black px-2 py-4 flex items-center ">
            <Link href={PATH.tickets}>
              tickets
            </Link>
          </li>
          <li className="text-black cursor-pointer  px-2 py-4 flex items-center ">
            <Link href={PATH.Login}>
              Login
            </Link>
          </li>
        </ul>
        <MenuIconSvg onClick={() => setToggle(!toggle)} className="cursor-pointer" />
      </div>
    </div>
  )
}

export default MobilenavBar