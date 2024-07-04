import React from 'react';

const locations = [
  { name: 'Alberta', imageUrl: 'https://via.placeholder.com/87' },
  { name: 'British Columbia', imageUrl: 'https://via.placeholder.com/87' },
  { name: 'Manitoba', imageUrl: 'https://via.placeholder.com/87' },
  { name: 'New Brunswick', imageUrl: 'https://via.placeholder.com/87' },
  { name: 'Ontario', imageUrl: 'https://via.placeholder.com/87' },
  { name: 'Saskatchewan', imageUrl: 'https://via.placeholder.com/87' },
  { name: 'Quebec', imageUrl: 'https://via.placeholder.com/87' },
  { name: 'Nova Scotia', imageUrl: 'https://via.placeholder.com/87' },
];

const Locations = () => {
  return (
    <div className="locations-container w-[1291px] md:h-[293px] h-[420px] bg-white shadow-custom-shadow mt-[60px] mx-auto p-[20px] flex items-center justify-center flex-col rounded-t-3xl">
      <div className="locations-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-8 justify-center">
        {locations.map((location, index) => (
          <div key={index} className="flex flex-row items-center">
            <div className="location-image mr-[20px] w-[87.223px] h-[87.223px] rounded-full truncate">
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
