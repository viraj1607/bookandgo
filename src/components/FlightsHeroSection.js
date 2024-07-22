import React from 'react';
import videoFile from '../imgs/fvideo.mp4';
import DealComponent from './DealComponent';

const FlightsHeroSection = () => {
  return (
    <div className="hero-section bg-cover bg-center h-[600px] lg:h-[100vh]">
      <DealComponent />
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div>
  );
};

export default FlightsHeroSection;
