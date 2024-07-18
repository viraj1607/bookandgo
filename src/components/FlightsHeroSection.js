import React from 'react';
import videoFile from '../imgs/fvideo.mp4'; // Update this path to your video file location

const FlightsHeroSection = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Add any additional content or elements here */}
    </div>
  );
};

export default FlightsHeroSection;
