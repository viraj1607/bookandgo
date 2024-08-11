import React from 'react';
import Rating from '@mui/material/Rating';

const HolidayInfo = ({ holidayData }) => {
  if (!holidayData) {
    return <div>Holiday not found</div>;
  }

  const { imageURLs, name, description, amenities, reviews } = holidayData;

  return (
    <div className="holiday-info-container">
      <div className="flex flex-col h-fit">
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <div className="col-span-2 row-span-2 rounded-[21px] md:rounded-[31px] bg-[#D9D9D9]">
            <img
              src={imageURLs[0]}
              alt="Image 1"
              className="w-full h-full object-cover rounded-[21px] md:rounded-[31px]"
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-[21px] md:rounded-[31px] bg-[#D9D9D9]">
            <img
              src={imageURLs[1]}
              alt="Image 2"
              className="w-full h-full object-cover rounded-[21px] md:rounded-[31px]"
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-[21px] md:rounded-[31px] bg-[#D9D9D9]">
            <img
              src={imageURLs[2]}
              alt="Image 3"
              className="w-full h-full object-cover rounded-[21px] md:rounded-[31px]"
            />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <span className="font-bold text-[20px] lg:text-[35px] mr-4">
            {name}
          </span>
          <Rating name="half-rating-read" defaultValue={reviews} precision={0.1} readOnly />
        </div>
        <p className="mt-4">{description}</p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Amenities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center text-black text-sm font-semibold"
              >
                <span className="ml-2">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayInfo;
