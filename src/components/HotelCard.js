import React from "react";
import Rating from "@mui/material/Rating";

const HotelCard = ({ hotelData = {} }) => {
  const {
    img,
    hotelName,
    city,
    landmark,
    price,
    rating,
    description,
    aminities,
  } = hotelData;

  if (!img || !hotelName) {
    return <div className="text-red-500">Hotel data is missing.</div>;
  }

  return (
    <div className="flex flex-col md:flex-row h-fit shadow-custom-grey p-4 my-8 mx-4 md:mx-16 rounded-xl">
      <div>
        <img className="rounded-xl" src={img} alt={hotelName} />
        <img className="rounded-xl w-full md:w-auto" src={img} />
      </div>
      <div className="md:ml-4 mt-4 md:mt-0">
        <div className="flex flex-col md:flex-row justify-between mb-2">
          <div>
            <h2 className="font-bold text-2xl md:text-[35px]">{hotelName}</h2>
            <p className="text-[#6F6F6F] text-lg md:text-[20px]">{city}</p>
            <span className="text-[#00B0F3]">{landmark}</span>
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
          defaultValue={rating}
          precision={0.1}
          readOnly
        />
        <p>{description}</p>
        <div className="flex flex-wrap">
          {aminities && aminities.map((val, ind) => (
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
  );
};

export default HotelCard;
