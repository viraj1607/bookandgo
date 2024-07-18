import React from 'react';
import videoFile from '../imgs/fvideo.mp4';

const FlightsHeroSection = () => {
  return (
    <div className="hero-section w-full lg:h-[100vh] overflow-hidden">
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FlightsHeroSection;
