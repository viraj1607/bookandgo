// FlightList.js
import React, { useState } from "react";
import FlightCard from "../components/FlightCard";
import FiltersFlight from "../components/FiltersFlight";
import HeroFlightList from "../components/HeroFlightList";
import HeaderContainerList from "../components/HeaderContainerList";

// Ensure these images are in your imgs folder
import deltaLogo from "../imgs/delta-airlines.png";
import americanLogo from "../imgs/american-airlines.png";
import jetblueLogo from "../imgs/jetblue-airlines.png";
import spiritLogo from "../imgs/spirit-airlines.png";

const flightList = [
  {
    img: deltaLogo, // Delta Airlines logo
    flightName: "Delta Airlines",
    departureTime: "06:00",
    arrivalTime: "09:00",
    departureCity: "New York",
    arrivalCity: "Los Angeles",
    price: "350",
    duration: "6h 30m",
    stops: "Non-stop",
    departureCode: "JFK",
    arrivalCode: "LAX"
  },
  {
    img: americanLogo, // American Airlines logo
    flightName: "American Airlines",
    departureTime: "13:00",
    arrivalTime: "16:45",
    departureCity: "Chicago",
    arrivalCity: "Miami",
    price: "280",
    duration: "3h 45m",
    stops: "1 Stop",
    departureCode: "ORD",
    arrivalCode: "MIA"
  },
  {
    img: jetblueLogo, // JetBlue Airlines logo
    flightName: "JetBlue Airlines",
    departureTime: "08:30",
    arrivalTime: "12:30",
    departureCity: "San Francisco",
    arrivalCity: "New York",
    price: "420",
    duration: "5h 00m",
    stops: "Non-stop",
    departureCode: "SFO",
    arrivalCode: "JFK"
  },
  {
    img: spiritLogo, // Spirit Airlines logo
    flightName: "Southwest Airlines",
    departureTime: "19:15",
    arrivalTime: "21:30",
    departureCity: "Houston",
    arrivalCity: "Denver",
    price: "220",
    duration: "2h 15m",
    stops: "Non-stop",
    departureCode: "HOU",
    arrivalCode: "DEN"
  },
];

const FlightList = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("Popular");

  const handleSortOptionClick = (option) => {
    setSelectedSortOption(option);
  };

  return (
    <div>
      <HeroFlightList />
      <HeaderContainerList />
      <div className="bg-[#E5F4FF] p-4 mt-4">
        <ul className="flex justify-evenly flex-wrap">
          <li className="font-bold">Sort By:</li>
          {["Departure", "Duration", "Arrival", "Price"].map((option) => (
            <li
              key={option}
              className={`cursor-pointer ${
                selectedSortOption === option ? "font-bold custom-underline" : ""
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
          {flightList.map((flight, index) => (
            <FlightCard key={index} flightData={flight} />
          ))}
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
