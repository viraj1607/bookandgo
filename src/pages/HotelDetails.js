import React, { useEffect } from 'react';
import HotelInfo from '../components/HotelInfo';
import { useLocation } from 'react-router-dom';
import { getHotelDetails } from '../custom-functions/getHotelDetails';

const HotelDetails = () => {
  const { state } = useLocation();
  const { hotelData } = state || {};

  useEffect(()=>{
      getHotelDetails("6696c3a14b2414bee03eebc1")
  },[])
  return (
    <div>
      {hotelData ? <HotelInfo hotelData={hotelData} /> : <p>No hotel data available.</p>}
    </div>
  );
}

export default HotelDetails;
