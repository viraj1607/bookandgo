import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoButton = () => {
  const navigate = useNavigate();

  const handleGoButtonClick = () => {
    navigate('/target-page'); // Change '/target-page' to your desired route
  };

  return (
    <div className="go-button" onClick={handleGoButtonClick}>
      <span className="go-button-text">GO</span>
      <div className="go-button-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="38" viewBox="0 0 50 38" fill="none">
          <path d="M4 4L19 19L4 34" stroke="white" strokeWidth="7" strokeLinecap="round"/>
          <path d="M30 4L45 19L30 34" stroke="white" strokeWidth="7" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
};

export default GoButton;