import React from 'react';
import facebookIcon from './icons/facebook.svg';
import linkedinIcon from './icons/linkedin.svg';
import youtubeIcon from './icons/youtube.svg';
import instagramIcon from './icons/instagram.svg';
import logo from '../imgs/logo.png';

const Footer = () => {
  return (
    <div className="footer-container flex items-center justify-between w-full h-auto bg-[#002475] px-6 md:px-[30px] lg:px-[50px] xl:p-20 py-10 md:py-[20px] lg:py-[30px] box-border">
      <div className="footer-content flex flex-col md:flex-row items-start justify-between w-full gap-8 md:gap-0">
        <div className="footer-logo flex flex-col items-start gap-[10px] md:gap-[20px]">
          <img className='w-[90px] md:w-[148px]' src={logo} alt="Logo" />
          <div className="footer-icons flex mt-auto gap-[10px] md:gap-[20px]">
            <button className="flex items-center w-[15px] md:w-[20px] h-[15px] md:h-[20px] cursor-pointer" onClick={() => window.location.href = 'https://www.facebook.com'}>
              <img src={facebookIcon} alt="Facebook" />
            </button>
            <button className="flex items-center w-[15px] md:w-[20px] h-[15px] md:h-[20px] cursor-pointer" onClick={() => window.location.href = 'https://www.linkedin.com'}>
              <img src={linkedinIcon} alt="LinkedIn" />
            </button>
            <button className="flex items-center w-[15px] md:w-[20px] h-[15px] md:h-[20px] cursor-pointer" onClick={() => window.location.href = 'https://www.youtube.com'}>
              <img src={youtubeIcon} alt="YouTube" />
            </button>
            <button className="flex items-center w-[15px] md:w-[20px] h-[15px] md:h-[20px] cursor-pointer" onClick={() => window.location.href = 'https://www.instagram.com'}>
              <img src={instagramIcon} alt="Instagram" />
            </button>
          </div>
        </div>
        <div className="flex gap-[30px] lg:gap-[80px] max-[376px]:flex-col">
          <div className="flex flex-col">
            <h3 className="text-white text-[17px] font-semibold mb-[10px]">Top Destinations</h3>
            <ul className="list-none p-0 gap-[2px] md:gap-6 flex flex-col">
              <li className="text-white font-inter text-base font-medium leading-6">Hotels in New York</li>
              <li className="text-white font-inter text-base font-medium leading-6">Hotels in Montreal</li>
              <li className="text-white font-inter text-base font-medium leading-6">Hotels in Vancouver</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-[17px] font-semibold mb-[10px]">Top countries & regions</h3>
            <ul className="list-none p-0 gap-[2px] md:gap-6 flex flex-col">
              <li className="text-white font-inter text-base font-medium leading-6">India</li>
              <li className="text-white font-inter text-base font-medium leading-6">Canada</li>
              <li className="text-white font-inter text-base font-medium leading-6">America</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-[17px] font-semibold mb-[10px]">Support & FAQs</h3>
            <ul className="list-none p-0 gap-[2px] md:gap-6 flex flex-col">
              <li className="text-white font-inter text-base font-medium leading-6">Your Bookings</li>
              <li className="text-white font-inter text-base font-medium leading-6">FAQs</li>
              <li className="text-white font-inter text-base font-medium leading-6">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
