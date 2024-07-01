import React, { useRef } from 'react';

const offers = [
  {
    category: "DOM HOTELS",
    title: "Trips to Alberta & British Columbia",
    description: "Grab Up to 40% OFF* on Hotels",
    cta: "BOOK NOW",
    imageUrl: '../imgs/heroimg1.jpg',
  },
  {
    category: "INTL FLIGHTS",
    title: "Get Up to 40% OFF* + No-tax fee",
    description: "on flights, hotels & Holiday packages",
    cta: "BOOK NOW",
    imageUrl: "https://via.placeholder.com/463x170", // Replace with actual image URL
  },
  {
    category: "DOM HOTELS",
    title: "Trips to Alberta & British Columbia",
    description: "Grab Up to 40% OFF* on Hotels",
    cta: "BOOK NOW",
    imageUrl: "https://via.placeholder.com/463x170", // Replace with actual image URL
  },
  {
    category: "DOM FLIGHTS",
    title: "Flights by American Airlines",
    description: "connecting Saskatchewan",
    cta: "BOOK NOW",
    imageUrl: "https://via.placeholder.com/463x170", // Replace with actual image URL
  },
  {
    category: "INTL HOTELS",
    title: "Trips to New York & Washington",
    description: "Grab Up to 30% OFF* on Hotels",
    cta: "BOOK NOW",
    imageUrl: "https://via.placeholder.com/463x170", // Replace with actual image URL
  },
  {
    category: "DOM FLIGHTS",
    title: "Flights by American Airlines",
    description: "connecting Saskatchewan",
    cta: "BOOK NOW",
    imageUrl: "https://via.placeholder.com/463x170", // Replace with actual image URL
  },
  {
    category: "INTL FLIGHTS",
    title: "Flights to Europe",
    description: "Enjoy 25% off on all flights to Europe",
    cta: "BOOK NOW",
    imageUrl: "https://via.placeholder.com/463x170", // Replace with actual image URL
  },
  {
    category: "DOM HOTELS",
    title: "Staycation Deals",
    description: "Get up to 50% off on local hotels",
    cta: "BOOK NOW",
    imageUrl: "https://via.placeholder.com/463x170", // Replace with actual image URL
  },
];

const Offers = () => {
  const offersContainerRef = useRef(null);

  const scrollRight = () => {
    if (offersContainerRef.current) {
      offersContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="offers-container p-6 rounded-lg shadow-md">
      <h2 className="offers-title mb-4">Offers</h2>
      <div className="offers-scroll" ref={offersContainerRef}>
        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div key={index} className="offer-card">
              <img src={offer.imageUrl} alt={offer.title} className="offer-image" />
              <div className="offer-details">
                <p className="offer-category">{offer.category}</p>
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-description">{offer.description}</p>
                <a href="#" className="offer-cta">{offer.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="arrow-icon" onClick={scrollRight}>
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="25" viewBox="0 0 45 25" fill="none">
          <path d="M2 13H39" stroke="#0081DE" stroke-width="3" stroke-linecap="round"/>
          <path d="M32 2L42.5 13L32 23" stroke="#0081DE" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Offers;
