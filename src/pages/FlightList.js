import React, { useState } from "react";
import FlightCard from "../components/FlightCard";
import FiltersFlight from "../components/FiltersFlight";

const flightList = [
  {
    img: "https://via.placeholder.com/150",
    flightName: "Delta Airlines",
    city: "New York",
    landmark: "JFK Airport",
    price: "150",
    rating: 4.5,
    description: "Comfortable flight with great service.",
    amenities: ["In-flight Entertainment", "WiFi", "Meals Included"],
  },
  {
    img: "https://via.placeholder.com/150",
    flightName: "American Airlines",
    city: "Los Angeles",
    landmark: "LAX Airport",
    price: "200",
    rating: 4.7,
    description: "Excellent service and comfort.",
    amenities: ["In-flight Entertainment", "WiFi", "Meals Included"],
  },
  // Add more flights as needed
];

const FlightList = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("Popular");

  const handleSortOptionClick = (option) => {
    setSelectedSortOption(option);
  };

  return (
    <div>
      <div className="bg-[#E5F4FF] p-4">
        <ul className="flex justify-evenly flex-wrap">
          <li className="font-bold">Sort By:</li>
          {["Departure", "Duration", "Arrival", "Price"].map((option) => (
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
      <div className="flex flex-wrap">
        <div className="w-full md:w-[72%] lg:w-[78%]">
          {flightList.map((val, ind) => {
            return <FlightCard key={ind} flightData={val} />;
          })}
        </div>
        <div className="hidden md:block w-[20%] md:w-[28%] lg:w-[22%]">
          <FiltersFlight />
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
          <FiltersFlight />
        </div>
      )}
    </div>
  );
};

export default FlightList;
