import React from "react";
import Logo from "../imgs/logo.png";
import ProfileIcon from "./icons/profile.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import LanguageIcon from '../components/icons/language.svg'; // Assuming you have a language icon

const Header = ({ onSignInClick }) => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="header bg-[#002475] p-4 md:px-[80px] md:py-4 flex items-center justify-between">
      <Link to="/">
        <img className="h-12 cursor-pointer" src={Logo} alt="Logo" />
      </Link>
      <div className="flex items-center space-x-6">
        <div className="items-center space-x-2 cursor-pointer hidden md:flex">
          <img className="h-6 " src={LanguageIcon} alt="Language" />
          <select className="bg-transparent text-white cursor-pointer">
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
        </div>
        <Link to="/support" className="text-white font-semibold">Support</Link>
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
            className="text-white font-semibold cursor-pointer"
            onClick={onSignInClick}
          >
            Sign In
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
