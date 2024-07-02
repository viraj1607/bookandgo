import React from 'react';
import facebookIcon from './icons/facebook.svg';
import linkedinIcon from './icons/linkedin.svg';
import youtubeIcon from './icons/youtube.svg';
import instagramIcon from './icons/instagram.svg';
import logo from '../imgs/logo.png'; // Ensure this path is correct

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
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
