import React from 'react';
import Logo from "../imgs/logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-[#002475] p-4'>
        <Link to="/"><img className='h-14 cursor-pointer' src={Logo} alt="Logo" /></Link>
    </div>
  );
}

export default Header;
