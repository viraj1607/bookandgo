import React, { useEffect } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const HotelCard = ({ hotelData = {} }) => {
  const {
    imageURLs,
    name,
    city,
    nearby,
    price,
    reviews,
    description,
    amenities,
    _id
  } = hotelData;

  const truncateText = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };

  useEffect(() => {
    console.log("Hotel ID:", _id); // Log hotel ID
    console.log("Hotel Name:", name); // Log hotel name
  }, [_id, name]);

  return (
    <Link to={`/hoteldetails/${_id}`} state={{ hotelData }}>
      <div className="flex flex-col md:flex-row shadow-custom-grey p-4 my-8 mx-4 md:mx-16 rounded-xl">
        <div className="w-full md:w-1/3">
          <div className="w-full h-64 overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src={imageURLs[0]}
              alt={name}
            />
          </div>
        </div>
        <div className="md:ml-4 mt-4 md:mt-0 w-full md:w-2/3">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <div>
              <h2 className="font-bold text-2xl md:text-[35px]">{name}</h2>
              <p className="text-[#6F6F6F] text-lg md:text-[20px]">{city}</p>
              <span className="text-[#00B0F3]">{nearby}</span>
            </div>
            <div className="mt-4 md:mt-0">
              <h2 className="font-bold text-2xl md:text-[35px]">${price}</h2>
              <span className="text-[#6F6F6F] text-right">
                +taxes <br /> per night
              </span>
            </div>
          </div>
          <Rating
            name="half-rating-read"
            defaultValue={reviews}
            precision={0.1}
            readOnly
          />
          <p>{truncateText(description, 150)}</p>
          <div className="flex flex-wrap">
            {amenities &&
              amenities.map((val, ind) => (
                <span
                  key={ind}
                  className="border-grey border-2 px-2 m-2 rounded-lg"
                >
                  {val}
                </span>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
