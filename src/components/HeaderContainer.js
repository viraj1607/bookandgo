import React from 'react';
import HotelsIcon from './icons/hotels.svg';
import FlightsIcon from './icons/flights.svg';
import HolidayPackagesIcon from './icons/holiday-packages.svg';

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <div className="section hotels">
        <img src={HotelsIcon} alt="Hotels" className="icon" />
        <p className="text">Hotels</p>
      </div>
      <div className="divider"></div>
      <div className="section flights">
        <img src={FlightsIcon} alt="Flights" className="icon" />
        <p className="text">Flights</p>
      </div>
      <div className="divider"></div>
      <div className="section holiday-packages">
        <img src={HolidayPackagesIcon} alt="Holiday Packages" className="icon" />
        <p className="text">Holiday Packages</p>
      </div>
    </div>
  );
};

export default HeaderContainer;
