import React from 'react';
import adImage from '../imgs/heroimg1.jpg';

const HolidaysAd = () => {
  return (
    <div
      className="w-[1350px] h-[467px] flex-shrink-0 rounded-[39px] bg-[#D9D9D9] mx-auto md:mt-12"
      style={{
        backgroundImage: `url(${adImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
    </div>
  );
};

export default HolidaysAd;
