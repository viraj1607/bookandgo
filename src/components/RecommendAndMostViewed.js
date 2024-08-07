import React from "react";
import jetblue from "../imgs/jetblue.jpeg";
import american from "../imgs/american.jpg";
import delta from "../imgs/delta.jpeg";
import spiritAirlines from "../imgs/spirit-airlines.jpg";

export const recommendedHotelsList = [
  {
    name: "Hilton Garden Inn",
    location: "New York",
    price: 200,
    imageUrl: require("../imgs/hiltongardeninn.webp"),
  },
  {
    name: "DoubleTree",
    location: "New York",
    price: 243,
    imageUrl: require("../imgs/doubletreebyhilton.webp"),
  },
  {
    name: "Holiday Inn Express",
    location: "New York",
    price: 187,
    imageUrl: require("../imgs/holidayinnexpress.webp"),
  },
  {
    name: "Hyatt Grand",
    location: "New York",
    price: 266,
    imageUrl: require("../imgs/hyattgrand.webp"),
  },
];

export const Mostviewflights = [
  {
    name: "Hyatt Grand",
    location: "New York",
    price: 266,
    imageUrl: require("../imgs/hyattgrand.webp"),
  },
  {
    name: "DoubleTree",
    location: "New York",
    price: 243,
    imageUrl: require("../imgs/doubletreebyhilton.webp"),
  },
  {
    name: "Hilton Garden Inn",
    location: "New York",
    price: 200,
    imageUrl: require("../imgs/hiltongardeninn.webp"),
  },
  {
    name: "Holiday Inn Express",
    location: "New York",
    price: 187,
    imageUrl: require("../imgs/holidayinnexpress.webp"),
  },
];

const RecommendAndMostViewed = ({ title, hotels }) => {
  return (
    <div className="flex justify-center items-center my-4">
      <div className="p-4 w-full max-w-screen-xl">
        <div className="section-recommended">
          <h1 className="font-bold text-center text-[30px]">{title}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px] pt-4">
          {hotels?.map((hotel, index) => (
            <div key={index} className="card bg-white rounded-2xl shadow-lg">
              <img src={hotel.imageUrl} className="rounded-t-2xl"></img>
              {/* <div className="card-image" style={{ backgroundImage: `url(${hotel.imageUrl})` }}></div> */}
              {/* <hr className="my-2" /> */}
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
