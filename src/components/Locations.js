import React from 'react';
import { useTranslation } from 'react-i18next';

const locations = [
  { name: 'alberta', imageUrl: require("../imgs/alberta.png") },
  { name: 'british_columbia', imageUrl: require("../imgs/britishcolumbia.png") },
  { name: 'manitoba', imageUrl: require("../imgs/manitoba.png") },
  { name: 'new_brunswick', imageUrl: require("../imgs/newbrunswick.png") },
  { name: 'ontario', imageUrl: require("../imgs/ontario.png") },
  { name: 'saskatchewan', imageUrl: require("../imgs/saskatchewan.png") },
  { name: 'quebec', imageUrl: require("../imgs/quebec.png") },
  { name: 'nova_scotia', imageUrl: require("../imgs/novascotia.png") },
];

const Locations = () => {
  const { t } = useTranslation();

  return (
    <div className="locations-container w-[1291px] md:h-[293px] h-[360px] bg-white shadow-custom-shadow mt-[60px] mx-auto px-[20px] py-[20px] flex items-center justify-center flex-col rounded-t-3xl">
      <div className="locations-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 md:gap-8 justify-center">
        {locations.map((location, index) => (
          <div key={index} className="flex flex-row items-center">
            <div className="location-image mr-[10px] md:mr-[20px] w-[87.223px] h-[87.223px] rounded-full truncate">
              <img className='object-cover w-full h-full' src={location.imageUrl} alt={t(location.name)} />
            </div>
            <div className="location-name">{t(location.name)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
