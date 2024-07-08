import React from 'react';
import facebookIcon from './icons/facebook.svg';
import linkedinIcon from './icons/linkedin.svg';
import youtubeIcon from './icons/youtube.svg';
import instagramIcon from './icons/instagram.svg';
import logo from '../imgs/logo.png'; // Ensure this path is correct

const Footer = () => {
  return (
    <div className="footer-container flex items-center justify-between w-full h-auto bg-blue-950 px-6 md:px-[50px] lg:px-[180px] py-10 md:py-[40px] box-border">
      <div className="footer-content flex flex-col md:flex-row items-start justify-between w-full gap-8 md:gap-0">
        <div className="footer-logo flex flex-col items-start gap-[20px]">
          <img className='w-[148px]' src={logo} alt="Logo" />
          <div className="footer-icons">
            <button onClick={() => window.location.href = 'https://www.facebook.com'}>
              <img src={facebookIcon} alt="Facebook" />
            </button>
            <button onClick={() => window.location.href = 'https://www.linkedin.com'}>
              <img src={linkedinIcon} alt="LinkedIn" />
            </button>
            <button onClick={() => window.location.href = 'https://www.youtube.com'}>
              <img src={youtubeIcon} alt="YouTube" />
            </button>
            <button onClick={() => window.location.href = 'https://www.instagram.com'}>
              <img src={instagramIcon} alt="Instagram" />
            </button>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li>Hotels</li>
              <li>Flights</li>
              <li>Holiday Packages</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">Deals</h3>
            <ul className="footer-list">
              <li>INTL Flights</li>
              <li>DOM Hotels</li>
              <li>INTL Hotels</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-heading">Locations</h3>
            <ul className="footer-list">
              <li>India</li>
              <li>Canada</li>
              <li>America</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
