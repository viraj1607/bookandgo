import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HotelsIcon from './icons/hotels.svg';
import FlightsIcon from './icons/flights.svg';
import HolidayPackagesIcon from './icons/holiday-packages.svg';

const HeaderContainer = () => {
  const { t } = useTranslation();

  return (
    
    <div className="flex items-center w-[350px] max-[376px]:w-[280px] md:w-[540px] lg:w-[800px] h-[60px] lg:h-[75px] md:h-[60px] rounded-2xl lg:rounded-3xl shadow-custom-shadow bg-white justify-between mt-[-50px] mx-auto webkit-sticky sticky z-50 top-5 border border-[rgba(0,0,0,0.20)]">
      <Link to="/" className="hover:bg-[#E5F4FF] w-[85px] md:w-[177px] lg:w-[246px] shrink-0 flex items-center justify-center flex-col transition-colors duration-300 ease-in-out cursor-pointer rounded-l-3xl hotels">
        <img src={HotelsIcon} alt={t('hotels')} className="w-[35px] md:w-[45px] lg:w-[55.518px] h-[30.8179px] md:h-[39.623px] lg:h-[32.1163px] shrink-0" />
        
      </Link>
      <div className="w-[4px] lg:w-[4px] h-[50px] lg:h-[55px] shrink-0 bg-slate-300 rounded-md"></div>
      <Link to="/flights" className="hover:bg-[#E5F4FF] w-[85px] md:w-[177px] lg:w-[246px] shrink-0 flex items-center justify-center flex-col transition-colors duration-300 ease-in-out cursor-pointer flights">
        <img src={FlightsIcon} alt={t('flights')} className="w-[60px] md:w-[71.6968px] lg:w-[88.178px] h-[26.8768 px] md:h-[32.1163px] lg:h-[39.499px] shrink-0" />
        
      </Link>
      <div className="w-[4px] lg:w-[4px] h-[50px] lg:h-[55px] shrink-0 bg-slate-300 rounded-md"></div>
      <Link to="/holiday-packages" className="hover:bg-[#E5F4FF] w-[85px] md:w-[177px] lg:w-[246px] h-[80px] md:h-[110px] lg:h-[110px] shrink-0 flex items-center justify-center flex-col transition-colors duration-300 ease-in-out cursor-pointer rounded-r-3xl holiday-packages">
        <img src={HolidayPackagesIcon} alt={t('holiday_packages')} className="w-[31.2028px] lg:w-[44.643px] h-[32.1163px] lg:h-[45.95px] shrink-0" />
        
      </Link>
    </div>
  );
};

export default HeaderContainer;
