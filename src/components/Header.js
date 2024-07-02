import React from 'react';
import Logo from "../imgs/logo.png";
import ProfileIcon from "./icons/profile.svg"; // Adjust the path if necessary

const Header = () => {
  return (
    <div className='header bg-[#002475] p-4 flex items-center justify-between'>
        <img className='h-14 cursor-pointer' src={Logo} alt="Logo" />
        <img className='h-10 cursor-pointer' src={ProfileIcon} alt="Profile" />
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-[#002475] p-4'>
        <Link to="/"><img className='h-14 cursor-pointer' src={Logo} alt="Logo" /></Link>
    </div>
  );
}

export default Header;
