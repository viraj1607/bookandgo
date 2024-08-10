import React from 'react';
import HolidayInfo from '../components/HolidayInfo';
import RoomCard from '../components/RoomCard';
import holidayDetailImg from "../imgs/hotelDetailImg.png";
import holidayDetailImg3 from "../imgs/hiltongardeninn.webp";
import holidayDetailImg1 from "../imgs/hiltongardeninn.webp";
import holidayDetailImg2 from "../imgs/hiltongardeninn.webp";

const HolidayPackagesDetail = () => {
  // Sample data for the page
  const holidayData = {
    name: "Hilton Garden Inn",
    description: "The stylish Hilton Garden Inn New York/Central Park South-Midtown West hotel boasts a central location in the heart of Midtown Manhattan, offering easy access to a wealth of shopping opportunities, restaurants, bars and entertainment.",
    imageURLs: [holidayDetailImg3, holidayDetailImg1, holidayDetailImg2],
    amenities: ["Free Wi-Fi", "Breakfast Included", "Pet Friendly", "Parking Available"],
    reviews: 4.5
  };

  return (
    <div className="flex gap-8 py-10 md:px-10 lg:px-14 md:flex-row flex-col">
      <div className="holiday-info-column px-[35px] md:w-8/12">
        <div className="holiday-info-container">
          <HolidayInfo holidayData={holidayData} />
        </div>
      </div>
      <div className="room-card-container md:w-4/12">
        <RoomCard />
        <div className="w-full mt-4 hidden md:block">
          <img src={holidayDetailImg} alt="Holiday Image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default HolidayPackagesDetail;
