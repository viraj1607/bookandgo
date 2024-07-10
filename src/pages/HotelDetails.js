import React from 'react';
import HotelInfo from '../components/HotelInfo';
import { useLocation } from 'react-router-dom';

const HotelDetails = () => {
  const { state } = useLocation();
  const { hotelData } = state || {};
  return (
    <div>
      {hotelData ? <HotelInfo hotelData={hotelData} /> : <p>No hotel data available.</p>}
    </div>
  );
}

export default HotelDetails;
