import React, { useState } from "react";
import HotelsIcon from "./icons/hotels.svg";
import FlightsIcon from "./icons/flights.svg";
import HolidayPackagesIcon from "./icons/holiday-packages.svg";

const HeaderContainer = () => {
  const [selectedSection, setSelectedSection] = useState("hotels");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="header-container flex items-center w-[800px] h-[110px] rounded-3xl shadow-custom-shadow bg-white justify-between mt-[-350px] mx-auto webkit-sticky sticky z-50 top-5">
      <div
        className={`section hotels ${
          selectedSection === "hotels" ? "bg-[#E5F4FF]" : ""
        }`}
        onClick={() => handleSectionClick("hotels")}
      >
        <img src={HotelsIcon} alt="Hotels" className="icon" />
        <p className="text">Hotels</p>
      </div>
      <div className="divider"></div>
      <div
        className={`section flights ${
          selectedSection === "flights" ? "bg-[#E5F4FF]" : ""
        }`}
        onClick={() => handleSectionClick("flights")}
      >
        <img src={FlightsIcon} alt="Flights" className="icon" />
        <p className="text">Flights</p>
      </div>
      <div className="divider"></div>
      <div
        className={`section holiday-packages ${
          selectedSection === "holiday-packages" ? "bg-[#E5F4FF]" : ""
        }`}
        onClick={() => handleSectionClick("holiday-packages")}
      >
        <img
          src={HolidayPackagesIcon}
          alt="Holiday Packages"
          className="icon"
        />
        <p className="text">Holiday Packages</p>
      </div>
    </div>
  );
};

export default HeaderContainer;
