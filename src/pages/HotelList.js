import React, { useContext, useEffect, useState } from "react";
import HotelCard from "../components/HotelCard";
import Filters from "../components/Filters";
import HeroHotelList from "../components/HeroHotelList";
import HeaderContainerList from "../components/HeaderContainerList";
import { AppContext } from "../AppContext";

const HotelList = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("Popular");
  const { hotels } = useContext(AppContext);

  const handleSortOptionClick = (option) => {
    setSelectedSortOption(option);
  };

  useEffect(() => {
    console.log("Hotels Data:", hotels); // Log hotels data for debugging
  }, [hotels]);

  return (
    <div>
      <HeroHotelList />
      <HeaderContainerList />
      <div className="bg-[#E5F4FF] p-4 mt-4">
        <ul className="flex justify-evenly flex-wrap">
          <li className="font-bold">Sort By:</li>
          {["Popular", "Ratings", "Price(High)", "Price(Low)"].map((option) => (
            <li
              key={option}
              className={`cursor-pointer ${selectedSortOption === option ? "font-bold custom-underline" : ""
                }`}
              onClick={() => handleSortOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-[80%]">
          {hotels.length > 0 ? (
            hotels.map((val, ind) => {
              console.log("Hotel Data:", val); // Log each hotel's data
              return <HotelCard key={ind} hotelData={val} />;
            })
          ) : (
            <p>No hotels available</p>
          )}
        </div>
        <div className="hidden md:block w-[20%]">
          <Filters />
        </div>
      </div>

      <button
        onClick={() => setShowFilters(!showFilters)}
        className="md:hidden fixed bottom-4 right-4 bg-[#002475] text-white p-2 rounded z-[60]"
      >
        {showFilters ? "Close Filters" : "Open Filters"}
      </button>

      {showFilters && (
        <div className="md:hidden fixed inset-0 bg-white p-4 z-50">
          <Filters />
        </div>
      )}
    </div>
  );
};

export default HotelList;
