import React from 'react'
import Logo from "../imgs/logo.png"

const Header = () => {
  return (
    <div className='bg-[#002475] p-4'>
        <img className='h-14 cursor-pointer' src={Logo}></img>
    </div>
  )
}

export default Header