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
    <div className="locations-container">
      <div className="locations-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 ">
        {locations.map((location, index) => (
          <div key={index} className="location-item">
            <div className="location-image">
              <img src={location.imageUrl} alt={location.name} />
            </div>
            <div className="location-name">{location.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
