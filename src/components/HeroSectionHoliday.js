import React from 'react';
import heroImageHoliday from '../imgs/holiday.jpg'; // Import your single holiday image

const HeroSectionHoliday = () => {
  return (
    <div
      className="hero-section bg-cover bg-center h-[600px] md:h-[100vh]"
      style={{ backgroundImage: `url(${heroImageHoliday})` }}
    >
      {/* Add any additional content or elements here */}
    </div>
  );
};

export default HeroSectionHoliday;
