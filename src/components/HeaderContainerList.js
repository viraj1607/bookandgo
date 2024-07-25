import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HotelsIcon from './icons/hotels.svg';
import FlightsIcon from './icons/flights.svg';
import HolidayPackagesIcon from './icons/holiday-packages.svg';

const HeaderContainer = () => {
  const { t } = useTranslation();

  return (
    
    <div className="flex items-center w-[350px] max-[376px]:w-[280px] md:w-[540px] lg:w-[800px] h-[80px] lg:h-[110px] md:h-[80px] rounded-3xl shadow-custom-shadow bg-white justify-between mt-[-50px] mx-auto webkit-sticky sticky z-50 top-5">
      <Link to="/" className="hover:bg-[#E5F4FF] w-[85px] md:w-[177px] lg:w-[246px] h-[80px] md:h-[110px] lg:h-[110px] shrink-0 flex items-center justify-center flex-col transition-colors duration-300 ease-in-out cursor-pointer rounded-l-3xl hotels">
        <img src={HotelsIcon} alt={t('hotels')} className="w-[45px] lg:w-[55.518px] h-[39.623px] lg:h-[32.1163px] shrink-0" />
        <p className="hidden md:block text-slate-700 text-center md:text-[15px] lg:text-[20px] font-semibold mt-[15px] md:mt-[10px] lg:mt-[15px]">{t('hotels')}</p>
      </Link>
      <div className="w-[4px] lg:w-[5px] h-[65px] lg:h-[92px] shrink-0 bg-slate-300 rounded-md"></div>
      <Link to="/flights" className="hover:bg-[#E5F4FF] w-[85px] md:w-[177px] lg:w-[246px] h-[80px] md:h-[110px] lg:h-[110px] shrink-0 flex items-center justify-center flex-col transition-colors duration-300 ease-in-out cursor-pointer flights">
        <img src={FlightsIcon} alt={t('flights')} className="w-[71.6968] lg:w-[88.178px] h-[32.1163px] lg:h-[39.499px] shrink-0" />
        <p className="hidden md:block text-slate-700 text-center md:text-[15px] lg:text-[20px] font-semibold mt-[15px] md:mt-[10px] lg:mt-[15px]">{t('flights')}</p>
      </Link>
      <div className="w-[4px] lg:w-[5px] h-[65px] lg:h-[92px] shrink-0 bg-slate-300 rounded-md"></div>
      <Link to="/holiday-packages" className="hover:bg-[#E5F4FF] w-[85px] md:w-[177px] lg:w-[246px] h-[80px] md:h-[110px] lg:h-[110px] shrink-0 flex items-center justify-center flex-col transition-colors duration-300 ease-in-out cursor-pointer rounded-r-3xl holiday-packages">
        <img src={HolidayPackagesIcon} alt={t('holiday_packages')} className="w-[31.2028] lg:w-[44.643px] h-[32.1163px] lg:h-[45.95px] shrink-0" />
        <p className="hidden md:block text-slate-700 text-center md:text-[15px] lg:text-[20px] font-semibold mt-[15px] md:mt-[10px] lg:mt-[15px]">{t('holiday_packages')}</p>
      </Link>
    </div>
  );
};

export default HeaderContainer;
