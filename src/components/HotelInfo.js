import React from "react";
import Rating from "@mui/material/Rating";
import { Chip, IconButton } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import PoolIcon from "@mui/icons-material/Pool";
import ChildCareIcon from "@mui/icons-material/ChildCare";

const getIcon = (amenity) => {
  switch (amenity) {
    case "Breakfast Included":
      return <RestaurantIcon style={{ color: "#00B0F3" }} />;
    case "Bar":
      return <LocalBarIcon style={{ color: "#00B0F3" }} />;
    case "Swimming Pool":
      return <PoolIcon style={{ color: "#00B0F3" }} />;
    case "Kids Play Area":
      return <ChildCareIcon style={{ color: "#00B0F3" }} />;
    default:
      return null;
  }
};

const HotelInfo = ({ hotelData }) => {
  if (!hotelData) {
    return <div>Hotel not found</div>;
  }

  //   const {
  //     img,
  //     hotelName,
  //     city,
  //     landmark,
  //     price,
  //     rating,
  //     description,
  //     amenities,
  //   } = hotelData;

  return (
    <div className="hotel-info-container w-full md:w-3/4 p-4 ">
      <div className="flex flex-col h-fit p-4 my-8 mx-4 md:mx-16">
        <div className="grid grid-cols-3 grid-rows-2 gap-8">
          <div className="col-span-2 row-span-2">
            <img
              src={hotelData.imageURLs[0]}
              alt="Image 1"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={hotelData.imageURLs[1]}
              alt="Image 2"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={hotelData.imageURLs[2]}
              alt="Image 3"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <span className="font-bold text-2xl md:text-[35px] mr-4">
            {hotelData.hotelName}
          </span>
          <Rating
            name="half-rating-read"
            defaultValue={hotelData.reviews}
            precision={0.1}
            readOnly
          />
        </div>
        <p className="mt-4">{hotelData.description}</p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Amenities</h3>
          <div className="flex flex-wrap gap-4">
            {hotelData.amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center text-black text-sm font-semibold"
              >
                {getIcon(amenity)}
                <span className="ml-2">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
