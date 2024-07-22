import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HotelsIcon from './icons/hotels.svg';
import FlightsIcon from './icons/flights.svg';
import HolidayPackagesIcon from './icons/holiday-packages.svg';

const HeaderContainer = () => {
  const { t } = useTranslation();

  return (
    <div className="header-container flex items-center w-[800px] h-[110px] rounded-3xl shadow-custom-shadow bg-white justify-between mt-[-350px] mx-auto webkit-sticky sticky z-50 top-5">
      <Link to="/" className="section w-[246px] h-[110px] shrink-0 flex items-center justify-center flex-col transition-colors duration-300 ease-in-out cursor-pointer rounded-l-3xl hotels">
        <img src={HotelsIcon} alt={t('hotels')} className="icon" />
        <p className="text">{t('hotels')}</p>
      </Link>
      <div className="divider"></div>
      <Link to="/flights" className="section w-[246px] h-[110px] shrink-0 flex items-center justify-center flex-col transition-colors duration-300 ease-in-out cursor-pointer flights">
        <img src={FlightsIcon} alt={t('flights')} className="icon" />
        <p className="text">{t('flights')}</p>
      </Link>
      <div className="divider"></div>
      <Link to="/holiday-packages" className="section w-[246px] h-[110px] shrink-0 flex items-center justify-center flex-col transition-colors duration-300 ease-in-out cursor-pointer rounded-r-3xl holiday-packages">
        <img src={HolidayPackagesIcon} alt={t('holiday_packages')} className="icon" />
        <p className="text">{t('holiday_packages')}</p>
      </Link>
    </div>
  );
};

export default HeaderContainer;
