import React from 'react';
import adImage from '../imgs/heroimg1.jpg';

const AdBanner1 = () => {
  return (
    <div
      className="w-full h-[100px] md:h-[134px] flex-shrink-0 bg-lightgray mt-[40px] md:mt-[60px] lg:mt-[140px]"
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

export default AdBanner1;
