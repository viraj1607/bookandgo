import React, { useState } from "react";
import HolidayCard from "../components/HolidayCard";
import FiltersHoliday from "../components/FiltersHoliday";
import HeroHolidayList from "../components/HeroHolidayList";
import HeaderContainerList from "../components/HeaderContainerList";
import vanImage from "../imgs/van1.png";

const holidayList = [
  {
    img: vanImage,
    packageName: "All-Inclusive 3N",
    duration: "3N/4D Vancouver",
    price: "1500",
    amenities: [
      "Breakfast Included",
      "Swimming Pool",
      "Kids Play Area",
      "Indoor Games",
      "Bar",
      "Paid Airport Transfers",
      "Paid Shuttle Services",
    ],
  },
  {
    img: vanImage,
    packageName: "All-Inclusive 4N",
    duration: "4N/5D Vancouver",
    price: "1800",
    amenities: [
      "Breakfast Included",
      "Swimming Pool",
      "Kids Play Area",
      "Indoor Games",
      "Bar",
      "Paid Airport Transfers",
      "Paid Shuttle Services",
    ],
  },
  // Add more holiday packages as needed
];

const HolidayList = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("Popular");

  const handleSortOptionClick = (option) => {
    setSelectedSortOption(option);
  };

  return (
    <div>
      <HeroHolidayList />
      <HeaderContainerList />
      <div className="bg-[#E5F4FF] p-4 mt-4">
        <ul className="flex justify-evenly flex-wrap">
          <li className="font-bold">Sort By:</li>
          {["Package Name", "Duration", "Price"].map((option) => (
            <li
              key={option}
              className={`cursor-pointer ${
                selectedSortOption === option
                  ? "font-bold custom-underline"
                  : ""
              }`}
              onClick={() => handleSortOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-nowrap">
        <div className="w-full md:w-[72%] lg:w-[78%]">
          {holidayList.map((val, ind) => {
            return <HolidayCard key={ind} holidayData={val} />;
          })}
        </div>
        <div className="hidden md:block w-[20%] md:w-[28%] lg:w-[22%]">
          <FiltersHoliday />
        </div>
      </div>

      <button
        onClick={() => setShowFilters(!showFilters)}
        className="md:hidden fixed bottom-4 right-4 bg-[#002475] text-white p-2 rounded z-[60] border-2"
      >
        {showFilters ? "Close Filters" : "Open Filters"}
      </button>

      {showFilters && (
        <div className="md:hidden fixed inset-0 bg-white p-4 z-50">
          <FiltersHoliday />
        </div>
      )}
    </div>
  );
};

export default HolidayList;
