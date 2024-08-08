import React, { useRef } from 'react';
import bgImage from '../imgs/offers.png';

const destinations = [
  {
    city: "Vancouver",
    price: "$7500",
    imageUrl: require('../imgs/vancouver.png')
  },
  {
    city: "Montreal",
    price: "$1500",
    imageUrl: require('../imgs/montreal.png')
  },
  {
    city: "Calgary",
    price: "$1700",
    imageUrl: require('../imgs/calgary.png')
  },
  {
    city: "Quebec",
    price: "$1800",
    imageUrl: require('../imgs/quebec 0.png')
  },
  {
    city: "Toronto",
    price: "$1400",
    imageUrl: require('../imgs/toronto.png')
  },
];

const BestSellingDestinations = () => {
  const containerRef = useRef(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex flex-col p-4 shadow-custom-shadow-2 max-[376px]:w-[285px] w-[380px] md:w-[675px] lg:w-[90%] max-[376px]:h-[395px] md:h-[479px] rounded-[25px] mt-[40px] md:mt-[65px] lg:mt-[100px] lg:mt-[100px] mb-[40px] md:mb-[20px] mx-auto md:p-[20px]" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h2 className="max-[376px]:text-[23px] text-[22px] md:text-[40px] font-bold">Best selling destinations</h2>
      <div className="flex flex-row w-full h-[390px] overflow-x-auto overflow-y-hidden p-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} ref={containerRef}>
        <div className="grid grid-cols-[repeat(6,_252px)] gap-[20px] w-full">
          {destinations.map((destination, index) => (
            <div key={index} className="flex flex-col items-start w-[252px] h-[270px] md:h-[354px] p-2 border rounded-3xl bg-white shadow-lg">
              <img src={destination.imageUrl} alt={destination.city} className="w-[238px] h-[195px] md:h-[282px] rounded-2xl object-cover" />
              <div className="mt-2 ml-2">
                <h3 className="text-xl font-semibold">{destination.city}</h3>
                <p className="text-sm text-gray-600">From {destination.price} per person</p>
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

export default BestSellingDestinations;
