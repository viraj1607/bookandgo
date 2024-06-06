import React from 'react';

const hotels = [
  {
    name: "Hilton Garden Inn",
    location: "New York",
    price: 200,
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    amenities: ["Free WiFi", "Breakfast Included", "Parking Available", "Pet Friendly"],
    rating: 5,
  },
  {
    name: "DoubleTree by Hilton",
    location: "New York",
    price: 243,
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    amenities: ["Free WiFi", "Breakfast Included", "Parking Available", "Pet Friendly"],
    rating: 5,
  },
  {
    name: "Holiday Inn Express",
    location: "New York",
    price: 187,
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    amenities: ["Free WiFi", "Breakfast Included", "Parking Available", "Pet Friendly"],
    rating: 5,
  },
  {
    name: "Hyatt Grand",
    location: "New York",
    price: 266,
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    amenities: ["Free WiFi", "Breakfast Included", "Parking Available", "Pet Friendly"],
    rating: 5,
  },
];

const SearchDisplay = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">For <span className="text-red-500">New York</span></h2>
        <div className="flex justify-center mb-4">
          <span>23 May'24 - 24 May'24</span>
        </div>
        <div className="flex space-x-4 overflow-x-auto justify-center">
          {hotels.map((hotel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 w-72 flex-none">
              <img src={hotel.imageUrl} alt={hotel.name} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{hotel.name}</h3>
              <p>{hotel.location}</p>
              <p className="text-lg font-bold">${hotel.price} per night</p>
              <div className="flex items-center space-x-2 mt-2">
                {hotel.amenities.map((amenity, idx) => (
                  <span key={idx} className="text-blue-500">{amenity}</span>
                ))}
              </div>
              <div className="flex mt-2">
                {Array(hotel.rating).fill().map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchDisplay;
