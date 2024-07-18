import React, { useState, useEffect } from 'react';
import heroImage1 from '../imgs/heroimg1.jpg';
import heroImage2 from '../imgs/heroimg2.jpg';
import heroImage3 from '../imgs/heroimg3.jpg';

const images = [heroImage1,heroImage2,heroImage3];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero-section lg:h-[100vh]"
      style={{ backgroundImage: `url(${images[currentImage]}` }}
    >
    </div>
    
  );
};

export default HeroSection;
