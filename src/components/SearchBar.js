import React, { useState } from 'react';
import { Autocomplete, TextField, Slider, Typography } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchCard = () => {
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
    { label: 'New York', value: 'New York' },
    { label: 'London', value: 'London' },
    { label: 'Paris', value: 'Paris' },
    { label: 'Toronto', value: 'Toronto' },
    { label: 'New Delhi', value: 'New Delhi' },
    { label: 'Mumbai', value: 'Mumbai' },
  ];

  const roomsAndGuestsOptions = [
    { label: '1 Room, 1 Guest', value: '1r1g' },
    { label: '1 Room, 2 Guests', value: '1r2g' },
    { label: '2 Rooms, 2 Guests', value: '2r2g' },
    { label: '2 Rooms, 4 Guests', value: '2r4g' },
    { label: '3 Rooms, 5 Guests', value: '3r5g' },
    { label: '4 Rooms, 5 Guests', value: '4r5g' },
  ];

  return (
    <div className="max-w-[1205px] h-[443px] mx-auto pt-15 px-6 pb-6 border-2 border-gray-300 rounded-[40px] bg-white shadow-md mt-[-65px]" style={{ boxShadow: '0px 12px 24px 0px rgba(0, 0, 0, 0.10)' }}>
      <div className="text-center mb-6">
        <h2 className="text-4xl font-semibold text-[#008EC4]">Good Morning!</h2>
        <p className="text-lg text-gray-600">
          Explore beautiful places in the world with{' '}
          <span className="font-bold">
            <span className="text-blue-900">book</span>
            <span className="text-red-700">n</span>
            <span className="text-blue-900">go</span>
          </span>
        </p>
        <div className="w-[1035px] h-0 border-t-2 border-gray-300 mt-4 mx-auto"></div>
        <div className="flex justify-center space-x-8 mt-4">
          <label className="inline-flex items-center">
            <input type="radio" className="form-radio text-blue-600" name="groupType" value="family" />
            <span className="ml-2">Family</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" className="form-radio text-blue-600" name="groupType" value="group" />
            <span className="ml-2">Group Deals</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" className="form-radio text-blue-600" name="groupType" value="upto4" />
            <span className="ml-2">Up to 4 Rooms</span>
          </label>
        </div>
      </div>
      <div className="w-[1162px] h-[139px] flex-shrink-0 border-2 border-gray-300 rounded-2xl mx-auto p-4 flex justify-between items-center">
        <div className="flex flex-col justify-between w-[200px]">
          <h4 className="text-[#606060] font-normal text-[20px] leading-[110%]">Location</h4>
          <Autocomplete
            value={location}
            onChange={handleLocationChange}
            options={locationSuggestions}
            getOptionLabel={(option) => option.label || ''}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                InputProps={{ ...params.InputProps, disableUnderline: true }}
                className="text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%] w-full"
                placeholder="Select Location"
              />
            )}
            classes={{
              input: "text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%]",
            }}
          />
          <Typography variant="body2" className="text-[#606060] font-normal text-[20px] leading-[110%]">USA</Typography>
        </div>

        <div className="w-[3px] h-[92px] bg-gray-300 flex-shrink-0"></div>

        <div className="flex flex-col justify-between w-[200px]">
          <h4 className="text-[#606060] font-normal text-[20px] leading-[110%]">Check-In</h4>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            dateFormat="dd MMM yyyy"
            placeholderText="Select Date"
            className="text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%] w-full"
          />
          <Typography variant="body2" className="text-[#606060] font-normal text-[20px] leading-[110%]">Thursday</Typography>
        </div>

        <div className="w-[3px] h-[92px] bg-gray-300 flex-shrink-0"></div>

        <div className="flex flex-col justify-between w-[200px]">
          <h4 className="text-[#606060] font-normal text-[20px] leading-[110%]">Check-Out</h4>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            dateFormat="dd MMM yyyy"
            placeholderText="Select Date"
            className="text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%] w-full"
          />
          <Typography variant="body2" className="text-[#606060] font-normal text-[20px] leading-[110%]">Friday</Typography>
        </div>

        <div className="w-[3px] h-[92px] bg-gray-300 flex-shrink-0"></div>

        <div className="flex flex-col justify-between w-[200px]">
          <h4 className="text-[#606060] font-normal text-[20px] leading-[110%]">Rooms & Guests</h4>
          <Autocomplete
            value={roomsAndGuests}
            onChange={handleRoomsAndGuestsChange}
            options={roomsAndGuestsOptions}
            getOptionLabel={(option) => option.label || ''}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                InputProps={{ ...params.InputProps, disableUnderline: true }}
                className="text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%] w-full"
                placeholder="Select Rooms & Guests"
              />
            )}
            classes={{
              input: "text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%]",
            }}
          />
        </div>

        <div className="w-[3px] h-[92px] bg-gray-300 flex-shrink-0"></div>

        <div className="flex flex-col justify-between w-[200px]">
          <h4 className="text-[#606060] font-normal text-[20px] leading-[110%]">Price</h4>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            step={10}
            className="w-full h-1"
          />
          <Typography variant="body2" className="text-[#606060] font-normal text-[20px] leading-[110%]">
            ${priceRange[0]} - ${priceRange[1]}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
