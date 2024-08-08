import React, { useRef } from 'react';
import bgImage from '../imgs/offers.png';
import { useTranslation } from 'react-i18next';

const offers = [
  {
    category: "dom_hotels",
    title: "Trips to Alberta & British Columbia",
    description: "Grab Up to 40% OFF* on Hotels",
    cta: "book_now",
    imageUrl: require("../imgs/01.png"),
  },
  {
    category: "intl_flights",
    title: "Get Up to 40% OFF* + No-tax fee",
    description: "on flights, hotels & Holiday packages",
    cta: "book_now",
    imageUrl: require("../imgs/02.png"),
  },
  {
    category: "dom_hotels",
    title: "Trips to Alberta & British Columbia",
    description: "Grab Up to 40% OFF* on Hotels",
    cta: "book_now",
    imageUrl: require("../imgs/03.png"),
  },
  {
    category: "dom_flights",
    title: "Flights by American Airlines",
    description: "connecting Saskatchewan",
    cta: "book_now",
    imageUrl: require("../imgs/04.png"),
  },
  {
    category: "intl_hotels",
    title: "Trips to New York & Washington",
    description: "Grab Up to 30% OFF* on Hotels",
    cta: "book_now",
    imageUrl: require("../imgs/05.png"),
  },
  {
    category: "dom_flights",
    title: "Flights by American Airlines",
    description: "connecting Saskatchewan",
    cta: "book_now",
    imageUrl: require("../imgs/06.png"),
  },
  {
    category: "intl_flights",
    title: "Flights to Europe",
    description: "Enjoy 25% off on all flights to Europe",
    cta: "book_now",
    imageUrl: require("../imgs/01.png"),
  },
  {
    category: "dom_hotels",
    title: "Staycation Deals",
    description: "Get up to 50% off on local hotels",
    cta: "book_now",
    imageUrl: require("../imgs/02.png"),
  },
];

const Offers = () => {
  const { t } = useTranslation();
  const offersContainerRef = useRef(null);

  const scrollRight = () => {
    if (offersContainerRef.current) {
      offersContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="offers-container relative flex flex-col p-6 shadow-custom-shadow-2 md:w-[1296px] lg:h-[479px] rounded-[25px] md:mt-[100px] md:mb-[20px] mx-auto md:p-[20px]" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h2 className="offers-title text-[40px] font-bold">{t('offers_title')}</h2>
      <div className="flex flex-row w-full h-[calc(100% - 60px)] overflow-x-auto overflow-y-hidden p-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} ref={offersContainerRef}>
        <div className="offers-grid grid grid-cols-[repeat(4,_463px)] grid-rows-[repeat(2,_170px)] gap-[20px] w-full">
          {offers.map((offer, index) => (
            <div key={index} className="offer-card flex felx-row items-start w-[463px] h-[170px] border-solid border-2 border-slate-200 rounded-[20px] overflow-hidden bg-white">
              <img src={offer.imageUrl} alt={offer.title} className="offer-image w-[114px] lg:w-[139px] p-[5px] object-cover" />
              <div className="offer-details flex flex-col justify-center p-[16px]">
                <p className="offer-category text-[12px] font-medium text-slate-500">{t(offer.category)}</p>
                <h3 className="offer-title w-[262px] text-[22px] font-semibold my-[5px]">{offer.title}</h3>
                <p className="offer-description text-[12px] text-slate-600 font-medium">{offer.description}</p>
                <a href="#" className="offer-cta text-[13px] font-bold no-underline mt-[7px] block text-sky-600">{t(offer.cta)}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="arrow-icon absolute top-[20px] right-[20px] w-[40.5px] h-[21px] shrink-0 cursor-pointer" onClick={scrollRight}>
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="25" viewBox="0 0 45 25" fill="none">
          <path d="M2 13H39" stroke="#0081DE" stroke-width="3" stroke-linecap="round" />
          <path d="M32 2L42.5 13L32 23" stroke="#0081DE" stroke-width="3" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default Offers;
