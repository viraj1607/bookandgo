import React from 'react';
import adImage from '../imgs/heroimg1.jpg';

const HolidaysAd = () => {
  return (
    <div
      className="w-[390px] md:w-[90%] h-[170px] md:h-[230px] flex-shrink-0 rounded-[39px] bg-[#D9D9D9] mx-auto mt-6 md:mt-10"
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
