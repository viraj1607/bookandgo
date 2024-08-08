import React from 'react';
import heroImage from '../imgs/Herohotellist.png'; // Ensure you have this image in your imgs folder

const HeroHolidayList = () => {
  return (
    <div className="w-[100%] h-[60px] md:h-[140px] xl:h-[170px] flex-shrink-0">
      <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
    </div>
  );
};

export default HeroHolidayList;
