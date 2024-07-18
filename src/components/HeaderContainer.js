import React from 'react';
import { Link } from 'react-router-dom';
import HotelsIcon from './icons/hotels.svg';
import FlightsIcon from './icons/flights.svg';
import HolidayPackagesIcon from './icons/holiday-packages.svg';

const HeaderContainer = () => {
  return (
    <div className="header-container flex items-center w-[800px] h-[110px] rounded-3xl shadow-custom-shadow bg-white justify-between mt-[-350px] mx-auto webkit-sticky sticky z-50 top-5">
      <Link to="/" className="section hotels">
        <img src={HotelsIcon} alt="Hotels" className="icon" />
        <p className="text">Hotels</p>
      </Link>
      <div className="divider"></div>
      <Link to="/flights" className="section flights">
        <img src={FlightsIcon} alt="Flights" className="icon" />
        <p className="text">Flights</p>
      </Link>
      <div className="divider"></div>
      <Link to="/holiday-packages" className="section holiday-packages">
        <img src={HolidayPackagesIcon} alt="Holiday Packages" className="icon" />
        <p className="text">Holiday Packages</p>
      </Link>
    </div>
  );
};

export default HeaderContainer;
