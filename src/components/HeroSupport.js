import React from 'react';
import heroImage from '../imgs/Herohotellist.png';

const HeroSupport = () => {
  return (
    <div className="w-full h-[189px]">
      <img src={heroImage} alt="Support Hero" className="w-full h-full object-cover" />
    </div>
  );
};

export default HeroSupport;
