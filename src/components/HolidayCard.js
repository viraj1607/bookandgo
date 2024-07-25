import React from 'react';

const HolidayCard = ({ holidayData }) => {
  const { img, packageName, duration, price, amenities } = holidayData;

  return (
    <div className="flex flex-col items-start md:flex-row justify-between p-3 my-4 mx-auto w-[300px] md:w-[500px] lg:w-[706px] xl:w-[960px] h-[380px] md:h-[238px] rounded-[20px] bg-white shadow-lg">
      <div className='flex'>
        <div className="flex items-center space-x-2 md:space-x-4 flex-col md:flex-row">
          <div className="w-[275px] lg:w-[425px] xl:w-[580px] h-[130px] lg:h-[220px] xl:h-[215px]">
            <img src={img} alt={packageName} className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] md:text-[27px] lg:text-[30px] font-medium text-black">{packageName}</span>
            <span className="text-[15px] md:text-[20px] text-gray-600">{duration}</span>
            <div className="flex flex-wrap">
              {amenities.map((amenity, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs md:text-sm mr-2 mb-2">
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start md:items-end">
        <span className="text-[20px] md:text-[25px] lg:text-[35px] font-semibold text-black">${price}</span>
        <span className="text-[10px] md:text-[15px] text-gray-600">+taxes per person</span>
      </div>
    </div>
  );
};

export default HolidayCard;
