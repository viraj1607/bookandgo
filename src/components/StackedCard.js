import React from 'react';

const StackedCard = () => {
  return (
    <div className="stacked-card-container pt-20 md:pt-9">
      <div className="relative">
        <div className="bg-third-rectangle"></div>
        <div className="bg-second-rectangle"></div>
        <div className="bg-main-rectangle flex justify-center items-center">
          <div className="text-center">
            <h1 className="main-text">
              Next Destination to Explore
              <br />
              the <span className="highlight-text">World's</span> Beauty
            </h1>
            <div className="logo"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedCard;
