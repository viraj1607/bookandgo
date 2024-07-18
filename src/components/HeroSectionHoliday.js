import React from 'react';
import heroImageHoliday from '../imgs/holiday.jpg';

const HeroSectionHoliday = () => {
  return (
    <div
      className="hero-section bg-cover bg-center h-[600px] lg:h-[100vh]"
      style={{ backgroundImage: `url(${heroImageHoliday})` }}
    >
    </div>
  );
};

export default HeroSectionHoliday;
