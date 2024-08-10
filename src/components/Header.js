import React, { useState, useEffect } from "react";
import Logo from "../imgs/logo.png";
import ProfileIcon from "./icons/profile.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import LanguageIcon from '../components/icons/language.svg'; // Assuming you have a language icon
import { useTranslation } from 'react-i18next';

const Header = ({ onSignInClick }) => {
  const { isAuthenticated } = useAuth();
  const { t, i18n } = useTranslation();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        const headerHeight = header.offsetHeight;
        const scrollY = window.scrollY;
        setIsHeaderVisible(scrollY < headerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="header" className="header bg-[#002475] p-4 md:px-[80px] md:py-4 flex items-center justify-between">
        <Link to="/">
          <img className="h-12 cursor-pointer" src={Logo} alt="Logo" />
        </Link>
        <div className="flex items-center space-x-6">
          <div className="items-center space-x-2 cursor-pointer hidden md:flex">
            <img className="h-6 " src={LanguageIcon} alt="Language" />
            <select
              className="bg-transparent text-white cursor-pointer"
              onChange={handleLanguageChange}
            >
              <option value="en" className="text-black">English</option>
              <option value="fr" className="text-black">French</option>
            </select>
          </div>
          <Link to="/support" className="text-white font-semibold">{t('support')}</Link>
          {isAuthenticated ? (
            <div className="flex items-center">
              {localStorage.getItem("user") === "admin@gmail.com" && (
                <Link to="/admin/hotel">
                  <span className="mr-8 text-white font-semibold">Admin Panel</span>
                </Link>
              )}
              <Link to="/userprofile">
                <img
                  className="h-10 cursor-pointer"
                  src={ProfileIcon}
                  alt="Profile"
                />
              </Link>
            </div>
          ) : (
            <span
              className="relative text-white font-semibold cursor-pointer z-[100]"
              onClick={onSignInClick}
            >
              {t('sign_in')}
            </span>
          )}
        </div>
      </div>
      <div
        className={`fixed z-50 top-4 right-4 items-center space-x-2 cursor-pointer hidden md:flex transition-all duration-300 bg-[#002475] p-2 rounded-md ${isHeaderVisible ? 'opacity-0' : 'opacity-100'}`}
      >
        <img className="h-6" src={LanguageIcon} alt="Language" />
        <select
          className="bg-transparent text-white cursor-pointer"
          onChange={handleLanguageChange}
        >
          <option value="en" className="text-black">English</option>
          <option value="fr" className="text-black">French</option>
        </select>
      </div>
    </>
  );
};

export default Header;
