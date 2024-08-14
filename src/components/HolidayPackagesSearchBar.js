import React, { useState } from 'react';
import { Autocomplete, TextField, Typography } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from 'react-i18next';

const locationSuggestions = [
  { label: 'new_york', value: 'New York' },
  { label: 'london', value: 'London' },
  { label: 'paris', value: 'Paris' },
  { label: 'toronto', value: 'Toronto' },
  { label: 'new_delhi', value: 'New Delhi' },
  { label: 'mumbai', value: 'Mumbai' },
];

const filterOptions = [
  { label: 'Filter 1', value: 'filter1' },
  { label: 'Filter 2', value: 'filter2' },
];

const HolidayPackagesSearchBar = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('search');
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [roomsAndGuests, setRoomsAndGuests] = useState(null);
  const [filter, setFilter] = useState(null);

  const handleFromLocationChange = (event, newValue) => {
    setFromLocation(newValue);
  };

  const handleToLocationChange = (event, newValue) => {
    setToLocation(newValue);
  };

  const handleRoomsAndGuestsChange = (event, newValue) => {
    setRoomsAndGuests(newValue);
  };

  const handleFilterChange = (event, newValue) => {
    setFilter(newValue);
  };

  const getDayName = (date) => {
    return date ? date.toLocaleDateString("en-US", { weekday: "long" }) : "";
  };

  return (
    <div className="relative max-w-[1205px] md:h-[443px] xl:w-[100%] lg:w-[90%] md:w-[90%] mx-auto pt-15 md:pt-[4rem] px-6 pb-6 md:border-2 md:border-gray-300 md:rounded-[40px] bg-white md:shadow-md mt-[-65px] md:mt-[-40px] md:flex md:flex-col" style={{ boxShadow: '0px 12px 24px 0px rgba(0, 0, 0, 0.10)' }}>
      <div className="flex justify-between">
        <button className={`flex-1 relative top-[-66px] left-[-26px] pt-[75px] pb-2 text-center ${activeTab === 'search' ? 'bg-[#E5F4FF] md:rounded-tl-[40px]' : ''}`} onClick={() => setActiveTab('search')}>
          <span className="text-[#000] text-2xl leading-[54px] font-medium">{t('search')}</span>
        </button>
        <button className={`flex-1 relative top-[-66px] right-[-26px] pt-[75px] pb-2 text-center ${activeTab === 'trending' ? 'bg-[#F2FAFF] md:rounded-tr-[40px]' : ''}`} onClick={() => setActiveTab('trending')}>
          <span className="text-[#000] text-2xl leading-[54px] font-medium">{t('trending')}</span>
        </button>
      </div>

      {activeTab === 'search' && (
        <div className="max-[376px]:w-[270px] w-[360px] h-[auto] xl:w-[100%] lg:w-[100%] md:w-[95%] flex-shrink-0 border-2 border-gray-300 rounded-xl md:border-2 md:border-gray-300 md:rounded-2xl mx-auto p-4 md:p-6 md:flex md:flex-row flex md:flex-nowrap flex-wrap justify-between items-start gap-4 md:gap-0">
          <div className="flex flex-col justify-between w-[calc(50%-10px)] md:w-[200px] lg:mx-2 md:mx-2 mb-4 md:mb-0">
            <h4 className="text-[#606060] font-normal text-[16px] leading-[110%] md:text-[16px]">{t('from')}</h4>
            <Autocomplete
              value={fromLocation}
              onChange={handleFromLocationChange}
              options={locationSuggestions}
              getOptionLabel={(option) => t(option.label) || ''}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  InputProps={{ ...params.InputProps, disableUnderline: true }}
                  className="text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%] w-full"
                  placeholder={t('select_location')}
                />
              )}
              classes={{
                input: "text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%]",
              }}
            />
            <Typography variant="body2" className="text-[#606060] font-normal text-[20px] leading-[110%]">USA</Typography>
          </div>

          <div className="w-[2px] h-[60px] md:w-[3px] md:h-[92px] bg-gray-300 flex-shrink-0 hidden rounded-sm md:block"></div>

          <div className="flex flex-col justify-between w-[calc(50%-10px)] md:w-[200px] xl:mx-auto lg:mx-2 md:mx-2 mb-4 md:mb-0">
            <h4 className="text-[#606060] font-normal text-[16px] leading-[110%] md:text-[16px]">{t('to')}</h4>
            <Autocomplete
              value={toLocation}
              onChange={handleToLocationChange}
              options={locationSuggestions}
              getOptionLabel={(option) => t(option.label) || ''}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  InputProps={{ ...params.InputProps, disableUnderline: true }}
                  className="text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%] w-full"
                  placeholder={t('select_location')}
                />
              )}
              classes={{
                input: "text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%]",
              }}
            />
            <Typography variant="body2" className="text-[#606060] font-normal text-[20px] leading-[110%]">USA</Typography>
          </div>

          <div className="w-[2px] h-[60px] md:w-[3px] md:h-[92px] bg-gray-300 flex-shrink-0 hidden rounded-sm md:block"></div>

          <div className="flex flex-col justify-between w-[calc(50%-10px)] md:w-[200px] xl:mx-auto lg:mx-2 md:mx-2 mb-4 md:mb-0">
            <h4 className="text-[#606060] font-normal text-[16px] leading-[110%] md:text-[16px]">{t('departure')}</h4>
            <DatePicker
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              dateFormat="dd MMM yyyy"
              placeholderText={t('select_date')}
              className="text-[#000] leading-trim text-edge-cap text-[24px] xl:text-[30px] lg:text-[25px] md:text-[18px] font-bold leading-[110%] w-full"
            />
            <Typography variant="body2" className="text-[#606060] font-normal text-[20px] leading-[110%]">
              {getDayName(departureDate)}
            </Typography>
          </div>

          <div className="w-[2px] h-[60px] md:w-[3px] md:h-[92px] bg-gray-300 flex-shrink-0 hidden rounded-sm md:block"></div>

          <div className="flex flex-col justify-between w-[calc(50%-10px)] md:w-[200px] xl:mx-auto lg:mx-2 md:mx-2 mb-4 md:mb-0">
            <h4 className="text-[#606060] font-normal text-[16px] leading-[110%] md:text-[16px]">{t('rooms_and_guests')}</h4>
            <Autocomplete
              value={roomsAndGuests}
              onChange={handleRoomsAndGuestsChange}
              options={locationSuggestions}
              getOptionLabel={(option) => t(option.label) || ''}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  InputProps={{ ...params.InputProps, disableUnderline: true }}
                  className="text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%] w-full"
                  placeholder={t('select_rooms_and_guests')}
                />
              )}
              classes={{
                input: "text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%]",
              }}
            />
          </div>

          <div className="w-[2px] h-[60px] md:w-[3px] md:h-[92px] bg-gray-300 flex-shrink-0 hidden rounded-sm md:block"></div>

          <div className="flex flex-col justify-between w-[calc(50%-10px)] md:w-[200px] xl:mx-auto lg:mx-2 md:mx-2 mb-4 md:mb-0">
            <h4 className="text-[#606060] font-normal text-[16px] leading-[110%] md:text-[16px]">{t('filter')}</h4>
            <Autocomplete
              value={filter}
              onChange={handleFilterChange}
              options={filterOptions}
              getOptionLabel={(option) => t(option.label) || ''}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  InputProps={{ ...params.InputProps, disableUnderline: true }}
                  className="text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%] w-full"
                  placeholder={t('select_filter')}
                />
              )}
              classes={{
                input: "text-[#000] leading-trim text-edge-cap font-inter text-[30px] font-bold leading-[110%]",
              }}
            />
          </div>
        </div>
      )}

      {activeTab === 'trending' && (
        <div className="relative flex justify-center max-[426px]:top-[-50px]">
          <div className="flex space-x-4 gap-[40px] max-[426px]:gap-[15px] max-[426px]:grid max-[426px]:grid-cols-2">
            {locationSuggestions.slice(0, 5).map((location, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt={t(location.label)}
                  className="size-[150px] max-[426px]:size-[100px] object-cover rounded-xl"
                />
                <Typography variant="body2" className="text-[#606060] font-normal text-[16px] leading-[110%]">{t(location.label)}</Typography>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HolidayPackagesSearchBar;
