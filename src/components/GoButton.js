import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GoButton = ({ onSubmit, size }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGoButtonClick = () => {
    navigate('/hotellist');
    onSubmit();
  };

  return (
    <div className="flex justify-center mt-[-35px]">
      <div 
        className={`flex justify-center items-center ${size === 'large' ? 'w-[175px] h-[50px]' : 'w-[180px] md:w-[280px] h-[69px]'} rounded-[34.5px] bg-[#EB2226] shadow-[0px_5px_10px_4px_rgba(0,0,0,0.20)] cursor-pointer transition-transform transform hover:scale-105`}
        onClick={handleGoButtonClick}
      >
        <span className={`text-white font-inter ${size === 'large' ? 'text-[30px]' : 'text-[50px]'} font-semibold leading-[110%]`}>{t('go')}</span>
        <div className="ml-[10px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="38" viewBox="0 0 50 38" fill="none">
            <path d="M4 4L19 19L4 34" stroke="white" strokeWidth="7" strokeLinecap="round" />
            <path d="M30 4L45 19L30 34" stroke="white" strokeWidth="7" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GoButton;
