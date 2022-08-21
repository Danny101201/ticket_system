import React, { useState } from 'react'


import NormalNavBar from '../NavBar/NormalNavBar'
import MobileNavBar from '../NavBar/MobileNavBar'


function Header() {


  return (
    <div className='relative'>
      {/* window navbar */}
      <NormalNavBar />
      {/* mobileNavbar */}
      <MobileNavBar />
    </div>
  )
}

export default Header