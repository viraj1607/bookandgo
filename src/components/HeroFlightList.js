import React from 'react';
import heroImage from '../imgs/Herohotellist.png'; // Ensure you have an image in your imgs folder

const HeroFlightList = () => {
  return (
    <div className="w-[100%] h-[170px] flex-shrink-0">
      <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
    </div>
  );
};

export default HeroFlightList;
