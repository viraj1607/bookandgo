import React, { useState } from "react";
import { Autocomplete, TextField, Slider, Typography } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import { getHotelList } from "../custom-functions/getHotelList";
import GoButton from "./GoButton";

const SearchCard = () => {
  const { t } = useTranslation();
  const [location, setLocation] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [roomsAndGuests, setRoomsAndGuests] = useState(null);

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

  const handleSubmit = () => {
    // e.preventDefault();
    getHotelList(location, priceRange);
  };

  return (
    <>
      <div
        className="max-w-[1205px] h-[610px] xl:w-[100%] lg:w-[90%] md:w-[90%] mx-auto pt-15 md:pt-[4rem] px-6 pb-6 md:border-2 md:border-gray-300 md:rounded-[40px] bg-white md:shadow-md mt-[-65px] md:mt-[-40px] md:h-[410px] md:flex md:flex-col"
        style={{ boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.10)" }}
      >
        <div className="text-center mb-6">
          <h2 className="text-4xl hidden md:block font-semibold text-[#008EC4]">
            {t("good_morning")}
          </h2>
          <p className="text-sm md:text-lg text-gray-600">
            {t("explore_beautiful_places")}
            <span className="font-bold">
              <span className="text-blue-900">book</span>
              <span className="text-red-700">n</span>
              <span className="text-blue-900">go</span>
            </span>
          </p>
          <div className="w-[285px] sm:w-[370px] xl:w-[100%] lg:w-[90%] md:w-[90%] h-0 border-t-2 border-gray-300 mt-4 mx-auto"></div>
          <div className="flex justify-center space-x-8 mt-4">
            <label className="inline-flex items-center md:ml-0">
              <input
                type="radio"
                className="form-radio text-blue-600"
                name="groupType"
                value="family"
              />
              <span className="ml-2">{t("family")}</span>
            </label>
            <label className="inline-flex items-center md:ml-0">
              <input
                type="radio"
                className="form-radio text-blue-600"
                name="groupType"
                value="group"
              />
              <span className="ml-2">{t("group_deals")}</span>
            </label>
          </div>
        </div>
        <div className="max-[376px]:w-[270px] w-[360px] h-[auto] xl:w-[100%] lg:w-[100%] md:w-[95%] flex-shrink-0 border-2 border-gray-300 rounded-xl md:border-2 md:border-gray-300 md:rounded-2xl mx-auto p-4 md:p-6 md:flex md:flex-row flex md:flex-nowrap flex-wrap justify-between items-start gap-4 md:gap-0">
          <div className="flex flex-col justify-between w-[calc(50%-10px)] md:w-[200px] lg:mx-2 md:mx-2 mb-4 md:mb-0">
            <h4 className="text-[#606060] font-normal text-[16px] leading-[110%] md:text-[16px]">
              {t("location")}
            </h4>
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
                  className="text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%] w-full"
                  placeholder={t("select_location")}
                />
              )}
              classes={{
                input:
                  "text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%]",
              }}
            />
            <Typography
              variant="body2"
              className="text-[#606060] font-normal text-[20px] leading-[110%]"
            >
              USA
            </Typography>
          </div>

          <div className="w-[2px] h-[60px] md:w-[3px] md:h-[92px] bg-gray-300 flex-shrink-0 hidden md:block"></div>

          <div className="flex flex-col justify-between w-[calc(50%-10px)] md:w-[200px] xl:mx-auto lg:mx-2 md:mx-2 mb-4 md:mb-0">
            <h4 className="text-[#606060] font-normal text-[16px] leading-[110%] md:text-[16px]">
              {t("check_in")}
            </h4>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              dateFormat="dd MMM yyyy"
              placeholderText={t("select_date")}
              className="text-[#000] leading-trim text-edge-cap text-[24px] xl:text-[30px] lg:text-[25px] md:text-[18px] font-bold leading-[110%] w-full"
            />
            <Typography
              variant="body2"
              className="text-[#606060] font-normal text-[20px] leading-[110%]"
            >
              Thursday
            </Typography>
          </div>

          <div className="w-[2px] h-[60px] md:w-[3px] md:h-[92px] bg-gray-300 flex-shrink-0 hidden md:block"></div>

          <div className="flex flex-col justify-between w-[calc(50%-10px)] md:w-[200px] xl:mx-auto lg:mx-2 md:mx-2 mb-4 md:mb-0">
            <h4 className="text-[#606060] font-normal text-[16px] leading-[110%] md:text-[16px]">
              {t("check_out")}
            </h4>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              dateFormat="dd MMM yyyy"
              placeholderText={t("select_date")}
              className="text-[#000] leading-trim text-edge-cap text-[24px] xl:text-[30px] lg:text-[25px] md:text-[18px] font-bold leading-[110%] w-full"
            />
            <Typography
              variant="body2"
              className="text-[#606060] font-normal text-[20px] leading-[110%]"
            >
              Friday
            </Typography>
          </div>

          <div className="w-[2px] h-[60px] md:w-[3px] md:h-[92px] bg-gray-300 flex-shrink-0 hidden md:block"></div>

          <div className="flex flex-col justify-between w-[calc(50%-10px)] md:w-[200px] xl:mx-auto lg:mx-2 md:mx-2 mb-4 md:mb-0">
            <h4 className="text-[#606060] font-normal text-[16px] leading-[110%] md:text-[16px]">
              {t("rooms_and_guests")}
            </h4>
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
                  className="text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%] w-full"
                  placeholder={t("select_rooms_guests")}
                />
              )}
              classes={{
                input:
                  "text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%]",
              }}
            />
          </div>

          <div className="w-[2px] h-[60px] md:w-[3px] md:h-[92px] bg-gray-300 flex-shrink-0 hidden md:block"></div>

          <div className="flex flex-col justify-between w-[calc(50%-10px)] md:w-[200px] xl:mx-auto lg:mx-2 md:mx-2 mb-4 md:mb-0">
            <h4 className="text-[#606060] font-normal text-[16px] leading-[110%] md:text-[16px]">
              {t("price")}
            </h4>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              step={10}
              className="w-full h-1"
            />
            <Typography
              variant="body2"
              className="text-[#606060] font-normal text-[20px] leading-[110%]"
            >
              ${priceRange[0]} - ${priceRange[1]}
            </Typography>
          </div>
        </div>
      </div>
      <GoButton onSubmit={handleSubmit}/>
    </>
  );
};

export default SearchCard;
