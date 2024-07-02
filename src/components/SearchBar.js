import React, { useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RxCalendar } from 'react-icons/rx';
import { RiAccountCircleLine } from 'react-icons/ri';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Autocomplete, TextField, Slider, Typography } from '@mui/material';

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
    <>
      <div className="max-w-4xl mx-auto p-6 border-2 border-gray-300 rounded-xl bg-white shadow-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-blue-900">Travel Better With Us !</h2>
          <p className="text-lg text-gray-600">
            Explore beautiful places in the world with {''}
            <span className="font-bold">
              <span className="text-blue-900">book</span>
              <span className="text-red-700">n</span>
              <span className="text-blue-900">go</span>
            </span>
          </p>
          <div className="w-2/3 border-t-2 border-gray-300 mt-4 mx-auto"></div>
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
        <div className="flex justify-between mb-6">
          <div className="w-1/5 border-2 border-gray-200 rounded-lg p-4 text-center">
            <HiOutlineLocationMarker className="text-black opacity-70 mx-auto mb-2" />
            <h4 className="text-black font-bold mb-2">Location</h4>
            <Autocomplete
              value={location}
              onChange={handleLocationChange}
              options={locationSuggestions}
              getOptionLabel={(option) => option?.label || ''}
              isOptionEqualToValue={(option, value) => {
                if (!option || !value) return false;
                return option.value === value.value;
              }}
              renderInput={(params) => (
                <TextField {...params} label="Location" variant="outlined" />
              )}
              className="w-full"
            />
          </div>

          <div className="w-1/5 border-2 border-gray-200 rounded-lg p-4 text-center">
            <RxCalendar className="text-black opacity-70 mx-auto mb-2" />
            <h4 className="text-black font-bold mb-2">Check-In</h4>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              dateFormat="dd MMM yyyy"
              placeholderText="Select Date"
              className="w-full"
            />
          </div>

          <div className="w-1/5 border-2 border-gray-200 rounded-lg p-4 text-center">
            <RxCalendar className="text-black opacity-70 mx-auto mb-2" />
            <h4 className="text-black font-bold mb-2">Check-Out</h4>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              dateFormat="dd MMM yyyy"
              placeholderText="Select Date"
              className="w-full"
            />
          </div>

          <div className="w-1/5 border-2 border-gray-200 rounded-lg p-4 text-center">
            <RiAccountCircleLine className="text-black opacity-70 mx-auto mb-2" />
            <h4 className="text-black font-bold mb-2">Rooms & Guests</h4>
            <Autocomplete
              value={roomsAndGuests}
              onChange={handleRoomsAndGuestsChange}
              options={roomsAndGuestsOptions}
              getOptionLabel={(option) => option?.label || ''}
              isOptionEqualToValue={(option, value) => {
                if (!option || !value) return false;
                return option.value === value.value;
              }}
              renderInput={(params) => (
                <TextField {...params} label="Rooms & Guests" variant="outlined" />
              )}
              className="w-full"
            />
          </div>

          <div className="w-1/5 border-2 border-gray-200 rounded-lg p-4 text-center">
            <span className="text-black opacity-70 mx-auto mb-2">$</span>
            <h4 className="text-black font-bold mb-2">Price</h4>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              step={10}
              className="w-full"
            />
            <Typography variant="body2" color="text-blue-900">
              ${priceRange[0]} - ${priceRange[1]}
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
