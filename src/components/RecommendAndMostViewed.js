// recomend.js

import React from 'react';
import jetblue from '../imgs/jetblue.jpeg';
import american from '../imgs/american.jpg';
import delta from '../imgs/delta.jpeg';
import spiritAirlines from '../imgs/spirit-airlines.jpg';

export const recommendedHotelsList = [
  {
    name: "Hilton Garden Inn",
    location: "New York",
    price: 200,
    imageUrl: jetblue, // Replace with actual image URL
  },
  {
    name: "DoubleTree",
    location: "New York",
    price: 243,
    imageUrl: american, // Replace with actual image URL
  },
  {
    name: "Holiday Inn Express",
    location: "New York",
    price: 187,
    imageUrl: delta, // Replace with actual image URL
  },
  {
    name: "Hyatt Grand",
    location: "New York",
    price: 266,
    imageUrl: spiritAirlines, // Replace with actual image URL
  },
];

export const mostViewedHotelsList = [
  {
    name: "Hilton Garden Inn",
    location: "New York",
    price: 200,
    imageUrl: jetblue, // Replace with actual image URL
  },
  {
    name: "DoubleTree",
    location: "New York",
    price: 243,
    imageUrl: american, // Replace with actual image URL
  },
  {
    name: "Holiday Inn Express",
    location: "New York",
    price: 187,
    imageUrl: delta, // Replace with actual image URL
  },
  {
    name: "Hyatt Grand",
    location: "New York",
    price: 266,
    imageUrl: spiritAirlines, // Replace with actual image URL
  },
];

const RecommendAndMostViewed = ({ title, hotels }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-4 w-full max-w-screen-xl">   
      <div className='section-recommended'>
      <h1 className='section-recommended-text'>{title}</h1>
      </div>   
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px] pt-4">
            {hotels?.map((hotel, index) => (
              <div key={index} className="card bg-white rounded-lg shadow-lg">
                <div className="card-image" style={{ backgroundImage: `url(${hotel.imageUrl})` }}></div>
                <hr className="my-2" />
                  <div className="card-content p-2">
                    <div className="flex justify-between items-center">
                      <h3 className="card-title">{hotel.name}</h3>
                      <p className="card-price">${hotel.price}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="card-location">{hotel.location}</p>
                      <span className="card-per-night">per night</span>
                    </div>
                  </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default RecommendAndMostViewed;
