import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import bgImage from '../imgs/offers.png';

const destinations = [
  {
    city: "India",
    price: "$1500",
    imageUrl: require('../imgs/india.png')
  },
  {
    city: "Europe",
    price: "$1500",
    imageUrl: require('../imgs/europe.png')
  },
  {
    city: "Thailand",
    price: "$1500",
    imageUrl: require('../imgs/thailand.png')
  },
  {
    city: "Bali",
    price: "$1500",
    imageUrl: require('../imgs/bali.png')
  },
  {
    city: "Maldives",
    price: "$1500",
    imageUrl: require('../imgs/maldives.png')
  },
];

const InternationalDestinations = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex flex-col p-4 shadow-custom-shadow-2 max-[376px]:w-[285px] w-[380px] md:w-[675px] lg:w-[90%] max-[376px]:h-[395px] md:h-[479px] rounded-[25px] mt-[40px] md:mt-[65px] lg:mt-[100px] lg:mt-[100px] mb-[40px] md:mb-[20px] mx-auto md:p-[20px]" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h2 className="text-[22px] md:text-[40px] font-bold">{t('international_destinations')}</h2>
      <div className="flex flex-row w-full h-[390px] overflow-x-auto overflow-y-hidden p-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} ref={containerRef}>
        <div className="grid grid-cols-[repeat(6,_252px)] gap-[20px] w-full">
          {destinations.map((destination, index) => (
            <div key={index} className="flex flex-col items-start w-[252px] h-[270px] md:h-[354px] p-2 border rounded-3xl bg-white shadow-lg">
              <img src={destination.imageUrl} alt={t(destination.city)} className="w-[238px] h-[195px] md:h-[282px] rounded-2xl object-cover" />
              <div className="mt-2 ml-2">
                <h3 className="text-xl font-semibold">{t(destination.city)}</h3>
                <p className="text-sm text-gray-600">{t('from_price_per_person', { price: destination.price })}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-[20px] right-[20px] w-[40.5px] h-[21px] shrink-0 cursor-pointer" onClick={scrollRight}>
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="25" viewBox="0 0 45 25" fill="none">
          <path d="M2 13H39" stroke="#0081DE" strokeWidth="3" strokeLinecap="round" />
          <path d="M32 2L42.5 13L32 23" stroke="#0081DE" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default InternationalDestinations;
