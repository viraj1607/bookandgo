import React, { useState } from 'react';
import { Autocomplete, TextField, Typography } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FlightsSearchBar = () => {
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [travelersClass, setTravelersClass] = useState(null);
  const [tripType, setTripType] = useState('oneway');

  const handleFromLocationChange = (event, newValue) => {
    setFromLocation(newValue);
  };

  const handleToLocationChange = (event, newValue) => {
    setToLocation(newValue);
  };

  const handleTravelersClassChange = (event, newValue) => {
    setTravelersClass(newValue);
  };

  const locationSuggestions = [
    { label: 'New York', value: 'New York' },
    { label: 'London', value: 'London' },
    { label: 'Paris', value: 'Paris' },
    { label: 'Toronto', value: 'Toronto' },
    { label: 'New Delhi', value: 'New Delhi' },
    { label: 'Mumbai', value: 'Mumbai' },
  ];

  const travelersClassOptions = [
    { label: '1 Traveller, Economy/Premium', value: '1 Traveller' },
    { label: '2 Travellers, Economy/Premium', value: '2 Travellers' },
    { label: '3 Travellers, Economy/Premium', value: '3 Travellers' },
    { label: '4 Travellers, Economy/Premium', value: '4 Travellers' },
  ];

  return (
    <div className="relative max-w-[1205px] h-[610px] xl:w-[100%] lg:w-[90%] md:w-[90%] mx-auto pt-15 md:pt-[4rem] px-6 pb-6 md:border-2 md:border-gray-300 md:rounded-[40px] bg-white md:shadow-md mt-[-65px] md:mt-[-40px] md:h-[410px] md:flex md:flex-col" style={{ boxShadow: '0px 12px 24px 0px rgba(0, 0, 0, 0.10)' }}>
      <div className="text-center mb-6">
        <h2 className="text-4xl hidden md:block font-semibold text-[#008EC4]">Good Morning!</h2>
        <p className="text-sm md:text-lg text-gray-600">
          Discover the world's best destinations with{' '}
          <span className="font-bold">
            <span className="text-blue-900">book</span>
            <span className="text-red-700">n</span>
            <span className="text-blue-900">go</span>
          </span>
        </p>
        <div className="w-[370px] xl:w-[100%] lg:w-[90%] md:w-[90%] h-0 border-t-2 border-gray-300 mt-4 mx-auto"></div>
        <div className="flex justify-center space-x-8 mt-4">
          <label className="inline-flex items-center md:ml-0">
            <input type="radio" className="form-radio text-blue-600" name="tripType" value="oneway" checked={tripType === 'oneway'} onChange={() => setTripType('oneway')} />
            <span className="ml-2">One Way</span>
          </label>
          <label className="inline-flex items-center md:ml-0">
            <input type="radio" className="form-radio text-blue-600" name="tripType" value="roundtrip" checked={tripType === 'roundtrip'} onChange={() => setTripType('roundtrip')} />
            <span className="ml-2">Round Trip</span>
          </label>
          <label className="inline-flex items-center md:ml-0">
            <input type="radio" className="form-radio text-blue-600" name="tripType" value="multicity" checked={tripType === 'multicity'} onChange={() => setTripType('multicity')} />
            <span className="ml-2">Multi City</span>
          </label>
        </div>
      </div>
      <div className="w-[360px] h-[auto] xl:w-[100%] lg:w-[100%] md:w-[95%] flex-shrink-0 border-2 border-gray-300 rounded-xl md:border-2 md:border-gray-300 md:rounded-2xl mx-auto p-4 md:p-6 md:flex md:flex-row flex md:flex-nowrap flex-wrap justify-between items-start gap-4 md:gap-0">
        <div className="flex flex-col justify-between w-[calc(50%-10px)] md:w-[200px] lg:mx-2 md:mx-2 mb-4 md:mb-0">
          <h4 className="text-[#606060] font-normal text-[16px] leading-[110%] md:text-[16px]">From</h4>
          <Autocomplete
            value={fromLocation}
            onChange={handleFromLocationChange}
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

        <div className="w-[2px] h-[60px] md:w-[3px] md:h-[92px] bg-gray-300 flex-shrink-0 hidden md:block"></div>

        <div className="flex flex-col justify-between w-[calc(50%-10px)] md:w-[200px] xl:mx-auto lg:mx-2 md:mx-2 mb-4 md:mb-0">
          <h4 className="text-[#606060] font-normal text-[16px] leading-[110%] md:text-[16px]">To</h4>
          <Autocomplete
            value={toLocation}
            onChange={handleToLocationChange}
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

        <div className="w-[2px] h-[60px] md:w-[3px] md:h-[92px] bg-gray-300 flex-shrink-0 hidden md:block"></div>

        <div className="flex flex-col justify-between w-[calc(50%-10px)] md:w-[200px] xl:mx-auto lg:mx-2 md:mx-2 mb-4 md:mb-0">
          <h4 className="text-[#606060] font-normal text-[16px] leading-[110%] md:text-[16px]">Departure</h4>
          <DatePicker
            selected={departureDate}
            onChange={(date) => setDepartureDate(date)}
            dateFormat="dd MMM yyyy"
            placeholderText="Select Date"
            className="text-[#000] leading-trim text-edge-cap text-[24px] xl:text-[30px] lg:text-[25px] md:text-[18px] font-bold leading-[110%] w-full"
          />
          <Typography variant="body2" className="text-[#606060] font-normal text-[20px] leading-[110%]">Friday</Typography>
        </div>

        <div className="w-[2px] h-[60px] md:w-[3px] md:h-[92px] bg-gray-300 flex-shrink-0 hidden md:block"></div>

        <div className="flex flex-col justify-between w-[calc(50%-10px)] md:w-[200px] xl:mx-auto lg:mx-2 md:mx-2 mb-4 md:mb-0">
          <h4 className="text-[#606060] font-normal text-[16px] leading-[110%] md:text-[16px]">Return</h4>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            dateFormat="dd MMM yyyy"
            placeholderText="Select Date"
            className="text-[#000] leading-trim text-edge-cap text-[24px] xl:text-[30px] lg:text-[25px] md:text-[18px] font-bold leading-[110%] w-full"
            disabled={tripType === 'oneway'}
          />
          <Typography variant="body2" className="text-[#606060] font-normal text-[20px] leading-[110%]">Friday</Typography>
        </div>

        <div className="w-[2px] h-[60px] md:w-[3px] md:h-[92px] bg-gray-300 flex-shrink-0 hidden md:block"></div>

        <div className="flex flex-col justify-between w-[calc(50%-10px)] md:w-[200px] xl:mx-auto lg:mx-2 md:mx-2 mb-4 md:mb-0">
          <h4 className="text-[#606060] font-normal text-[16px] leading-[110%] md:text-[16px]">Travellers & Class</h4>
          <Autocomplete
            value={travelersClass}
            onChange={handleTravelersClassChange}
            options={travelersClassOptions}
            getOptionLabel={(option) => option.label || ''}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                InputProps={{ ...params.InputProps, disableUnderline: true }}
                className="text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%] w-full"
                placeholder="Select Travellers & Class"
              />
            )}
            classes={{
              input: "text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%]",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FlightsSearchBar;
