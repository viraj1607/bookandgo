import React from 'react';

const hotels = [
  {
    name: "Hilton Garden Inn",
    location: "New York",
    price: 200,
    imageUrl: "/path/to/hilton-garden-inn.jpg", // Replace with actual image URL
    amenities: ["Free WiFi", "Breakfast Included", "Parking Available", "Pet Friendly"],
    rating: 5,
  },
  {
    name: "DoubleTree",
    location: "New York",
    price: 243,
    imageUrl: "/path/to/doubletree-by-hilton.jpg", // Replace with actual image URL
    amenities: ["Free WiFi", "Breakfast Included", "Parking Available", "Pet Friendly"],
    rating: 5,
  },
  {
    name: "Holiday Inn Express",
    location: "New York",
    price: 187,
    imageUrl: "/path/to/holiday-inn-express.jpg", // Replace with actual image URL
    amenities: ["Free WiFi", "Breakfast Included", "Parking Available", "Pet Friendly"],
    rating: 5,
  },
  {
    name: "Hyatt Grand",
    location: "New York",
    price: 266,
    imageUrl: "/path/to/hyatt-grand.jpg", // Replace with actual image URL
    amenities: ["Free WiFi", "Breakfast Included", "Parking Available", "Pet Friendly"],
    rating: 5,
  },
];

const SearchDisplay = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-4 w-full max-w-screen-xl">
        <div className="relative bg-half-rectangle p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex">
              <h2 className="typography-heading">For <span className="typography-subheading">New York</span></h2>
            </div>
            <span className="date-range">23 May'24 - 24 May'24</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px] pt-4">
            {hotels.map((hotel, index) => (
              <div key={index} className="card bg-white rounded-lg shadow-lg">
                <div className="card-image" style={{ backgroundImage: `url(${hotel.imageUrl})` }}></div>
                <div className="card-content p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="card-title">{hotel.name}</h3>
                    <p className="card-price">${hotel.price}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="card-location">{hotel.location}</p>
                    <span className="card-per-night">per night</span>
                  </div>
                  <div className="card-amenities mt-2 pt-4">
                    <div className="card-amenity">
                      <span className="icon"></span> {/* Add the icon for Free WiFi */}
                      <span>Free WiFi</span>
                    </div>
                    <div className="card-amenity">
                      <span className="icon"></span> {/* Add the icon for Breakfast Included */}
                      <span>Breakfast Included</span>
                    </div>
                    <div className="card-amenity">
                      <span className="icon"></span> {/* Add the icon for Parking Available */}
                      <span>Parking Available</span>
                    </div>
                    <div className="card-amenity">
                      <span className="icon"></span> {/* Add the icon for Pet Friendly */}
                      <span>Pet Friendly</span>
                    </div>
                  </div>
                  <div className="flex mt-2 card-stars">
                    {Array(hotel.rating).fill().map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <g clipPath="url(#clip0_76_6122)">
                          <path d="M12.9661 4.98673C12.881 4.7235 12.6475 4.53653 12.3713 4.51164L8.61915 4.17094L7.13544 0.698184C7.02604 0.443676 6.77689 0.278931 6.50007 0.278931C6.22324 0.278931 5.97409 0.443676 5.86469 0.698779L4.38099 4.17094L0.628234 4.51164C0.352501 4.53713 0.119615 4.7235 0.0340187 4.98673C-0.0515777 5.24997 0.0274725 5.53869 0.236058 5.7207L3.07224 8.20805L2.23592 11.8921C2.17472 12.1629 2.27986 12.4429 2.50461 12.6054C2.62542 12.6927 2.76676 12.7371 2.90928 12.7371C3.03217 12.7371 3.15407 12.704 3.26347 12.6385L6.50007 10.7041L9.73547 12.6385C9.97223 12.781 10.2707 12.768 10.4949 12.6054C10.7198 12.4424 10.8248 12.1623 10.7636 11.8921L9.92729 8.20805L12.7635 5.72119C12.9721 5.53869 13.0517 5.25046 12.9661 4.98673Z" fill="#FFC107"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_76_6122">
                            <rect width="13" height="13" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDisplay;
