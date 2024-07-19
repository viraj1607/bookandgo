import React from 'react';
import animationVideo from '../imgs/bookngologoanimation.mp4';

const LogoAnimation = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
      <video className="w-full h-full object-cover" autoPlay muted>
        <source src={animationVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LogoAnimation;
