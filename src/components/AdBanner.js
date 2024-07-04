import React from 'react';
import adImage from '../imgs/heroimg1.jpg'; // Adjust the path and image name accordingly

const AdBanner = () => {
  return (
    <div
      className="w-full h-[100px] md:h-[134px] flex-shrink-0 bg-lightgray mt-[80px] md:mt-[150px]"
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

export default AdBanner;
