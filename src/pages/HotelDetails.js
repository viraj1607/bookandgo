import React, { useEffect } from 'react';
import HotelInfo from '../components/HotelInfo';
import RoomCard from '../components/RoomCard'; 
import { useLocation } from 'react-router-dom';
import { getHotelDetails } from '../custom-functions/getHotelDetails';

const HotelDetails = () => {
  const { state } = useLocation();
  const { hotelData } = state || {};

  useEffect(()=>{
      getHotelDetails("6696c3a14b2414bee03eebc1")
  },[])
  return (
    <div className="hotel-details-container">
      <div className="hotel-info-container">
        {hotelData ? <HotelInfo hotelData={hotelData} /> : <p>No hotel data available.</p>}
      </div>
      <div className="room-card-container">
      {hotelData && hotelData.rooms && hotelData.rooms.length > 0 ? (
        <RoomCard rooms={hotelData.rooms} />
      ) : (
        <p>No rooms available.</p>
      )}
      </div>
    </div>
  );
}

export default HotelDetails;
