import React, { useContext, useState } from "react";
import { Autocomplete, TextField, Slider, Typography } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import { getHotelList } from "../custom-functions/getHotelList";
import GoButton from "./GoButton";
import { AppContext } from "../AppContext";

const SearchBarHotelList = () => {
  const { t } = useTranslation();
  const [location, setLocation] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [roomsAndGuests, setRoomsAndGuests] = useState(null);
  const { setHotels } = useContext(AppContext);

  const handleLocationChange = (event, newValue) => {
    setLocation(newValue);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleRoomsAndGuestsChange = (event, newValue) => {
    setRoomsAndGuests(newValue);
  };

  const locationSuggestions = [
    { label: "Toronto", value: "Toronto" },
    { label: "Montreal", value: "Montreal" },
    { label: "Vancouver", value: "Vancouver" },
    { label: "Calgary", value: "Calgary" },
    { label: "Edmonton", value: "Edmonton" },
    { label: "Ottawa", value: "Ottawa" },
    { label: "Winnipeg", value: "Winnipeg" },
    { label: "Quebec City", value: "Quebec City" },
    { label: "Hamilton", value: "Hamilton" },
    { label: "Kitchener", value: "Kitchener" },
    { label: "London", value: "London" },
    { label: "Halifax", value: "Halifax" },
    { label: "Victoria", value: "Victoria" },
    { label: "Saskatoon", value: "Saskatoon" },
    { label: "St. John's", value: "St. John's" },
    { label: "Windsor", value: "Windsor" },
    { label: "Oshawa", value: "Oshawa" },
    { label: "Barrie", value: "Barrie" },
    { label: "Kelowna", value: "Kelowna" },
  ];

  const roomsAndGuestsOptions = [
    { label: "1 Room, 1 Guest", value: "1r1g" },
    { label: "1 Room, 2 Guests", value: "1r2g" },
    { label: "2 Rooms, 2 Guests", value: "2r2g" },
    { label: "2 Rooms, 4 Guests", value: "2r4g" },
    { label: "3 Rooms, 5 Guests", value: "3r5g" },
    { label: "4 Rooms, 5 Guests", value: "4r5g" },
  ];

  const handleSubmit = async () => {
    const hotels = await getHotelList(location, priceRange);
    setHotels(hotels);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Location Input */}
      <div className="flex items-center justify-between px-4 py-3 border rounded-[15px] border-[1.5px] border-gray-300 w-[218px] h-[60px]">
        <div>
          <Typography className="text-[15px] text-gray-600 font-normal leading-[110%]">
            {t("location")}
          </Typography>
          <Autocomplete
            value={location}
            onChange={handleLocationChange}
            options={locationSuggestions}
            getOptionLabel={(option) => option.label || ""}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                InputProps={{ ...params.InputProps, disableUnderline: true }}
                className="text-[#000] text-[20px] font-bold leading-[110%] w-[30px]"
                style={{ width: "185px" }}
                placeholder="New York" // Replace with actual placeholder or value
              />
            )}
          />
        </div>
      </div>

      {/* Check-In Date */}
      <div className="flex items-center justify-between px-4 py-3 border rounded-[15px] border-[1.5px] border-gray-300 w-[218px] h-[60px]">
        <div>
          <Typography className="text-[15px] text-gray-600 font-normal leading-[110%]">
            {t("check_in")}
          </Typography>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            dateFormat="dd MMM yyyy"
            placeholderText={t("Select Date")}
            className="text-[#000] text-[20px] font-bold leading-[110%] w-full"
          />
        </div>
      </div>

      {/* Check-Out Date */}
      <div className="flex items-center justify-between px-4 py-3 border rounded-[15px] border-[1.5px] border-gray-300 w-[218px] h-[60px]">
        <div>
          <Typography className="text-[15px] text-gray-600 font-normal leading-[110%]">
            {t("check_out")}
          </Typography>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            dateFormat="dd MMM yyyy"
            placeholderText={t("Select Date")}
            className="text-[#000] text-[20px] font-bold leading-[110%] w-full"
          />
        </div>
      </div>

      {/* Rooms & Guests */}
      <div className="flex items-center justify-between px-4 py-3 border rounded-[15px] border-[1.5px] border-gray-300 w-[218px] h-[60px]">
        <div>
          <Typography className="text-[15px] text-gray-600 font-normal leading-[110%]">
            {t("rooms_and_guests")}
          </Typography>
          <Autocomplete
            value={roomsAndGuests}
            onChange={handleRoomsAndGuestsChange}
            options={roomsAndGuestsOptions}
            getOptionLabel={(option) => option.label || ""}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                InputProps={{ ...params.InputProps, disableUnderline: true }}
                className="text-[#000] text-[20px] font-bold leading-[110%] w-full"
                style={{ width: "185px" }}
                placeholder="1 Room 2 Adults" // Replace with actual placeholder or value
              />
            )}
          />
        </div>
      </div>

      {/* Price Slider */}
      <div className="flex items-center justify-between px-4 py-3 border rounded-[15px] border-[1.5px] border-gray-300 w-[218px] h-[60px]">
        <div>
          <Typography className="text-[15px] text-gray-600 font-normal leading-[110%]">
            {t("price")}
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            step={10}
            className="w-full h-1"
          />
          <Typography className="text-[#000] text-[20px] font-bold leading-[110%]">
            ${priceRange[0]} - ${priceRange[1]}
          </Typography>
        </div>
      </div>

      {/* Go Button */}
      <GoButton onSubmit={handleSubmit} size="large" />
    </div>
  );
};

export default SearchBarHotelList;
