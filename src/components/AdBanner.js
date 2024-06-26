import React from 'react';

const AdBanner = ({ imageUrl }) => {
  return (
    <div 
      className="ad-banner" 
      style={{ 
        backgroundImage: `url(${imageUrl})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}>
    </div>
  );
};

export default AdBanner;
