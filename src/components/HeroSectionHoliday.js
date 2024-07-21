import React from 'react';
import heroImageHoliday from '../imgs/holiday.jpg';
import DealComponent from './DealComponent';

const HeroSectionHoliday = () => {
  return (
    <div
      className="hero-section bg-cover bg-center h-[600px] lg:h-[100vh]"
      style={{ backgroundImage: `url(${heroImageHoliday})` }}
    >
      <DealComponent />
    </div>
  );
};

export default HeroSectionHoliday;
