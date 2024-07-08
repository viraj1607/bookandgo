import React from 'react';

const locations = [
  { name: 'Alberta', imageUrl: require("../imgs/alberta.png") },
  { name: 'British Columbia', imageUrl: require("../imgs/britishcolumbia.png") },
  { name: 'Manitoba', imageUrl: require("../imgs/manitoba.png") },
  { name: 'New Brunswick', imageUrl: require("../imgs/newbrunswick.png") },
  { name: 'Ontario', imageUrl: require("../imgs/ontario.png") },
  { name: 'Saskatchewan', imageUrl: require("../imgs/saskatchewan.png") },
  { name: 'Quebec', imageUrl: require("../imgs/quebec.png") },
  { name: 'Nova Scotia', imageUrl: require("../imgs/novascotia.png") },
];

const Locations = () => {
  return (
    <div className="locations-container w-[1291px] md:h-[293px] h-[360px] bg-white shadow-custom-shadow mt-[60px] mx-auto px-[20px] py-[20px] flex items-center justify-center flex-col rounded-t-3xl">
      <div className="locations-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 md:gap-8 justify-center">
        {locations.map((location, index) => (
          <div key={index} className="flex flex-row items-center">
            <div className="location-image mr-[10px] md:mr-[20px] w-[87.223px] h-[87.223px] rounded-full truncate">
              <img className='object-cover w-full h-full' src={location.imageUrl} alt={location.name} />
            </div>
            <div className="location-name">{location.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
