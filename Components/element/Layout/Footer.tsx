import React, { useState } from 'react'

function Footer() {
  const [thisYear, setThisYear] = useState<number>(new Date().getFullYear())
  return (
    <div className="text-center bg-[#FFE9AE] text-white drop-shadow-lg py-2">© {thisYear} 1791 Co., Ltd. All Rights Reserved.</div>
  )
}

export default Footer