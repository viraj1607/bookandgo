import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import LoginSignup from "../components/LoginSignup";

const Layout = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupOpen]);

  return (
    <div>
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}
      <Header onSignInClick={handlePopupOpen} />
      {/* <div className={`${isPopupOpen ? "blurred" : ""}`}> */}
        <Outlet />
      {/* </div> */}
      <Footer />
      {isPopupOpen && <LoginSignup onClose={handlePopupClose} />}
    </div>
  );
};

export default Layout;
