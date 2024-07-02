import React from "react";
import Logo from "../imgs/logo.png";
import ProfileIcon from "./icons/profile.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header bg-[#002475] p-4 flex items-center justify-between">
      <Link to="/">
        <img className="h-14 cursor-pointer" src={Logo} alt="Logo" />
      </Link>
      <Link to="/userprofile">
        <img className="h-10 cursor-pointer" src={ProfileIcon} alt="Profile" />
      </Link>
    </div>
  );
};

export default Header;
