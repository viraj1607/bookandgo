import React, { useEffect, useState } from 'react';
import HotelInfo from '../components/HotelInfo';
import { getHotelDetails } from '../custom-functions/getHotelDetails';
import { useParams } from 'react-router-dom';

const HotelDetails = () => {
  const [hotelData,setHotelData]=useState(null)
  const { hotelId } = useParams();


  useEffect(()=>{
    const fetchHotelDetails = async () => {
      const detail = await getHotelDetails(hotelId);
      setHotelData(detail);
    };

    if (hotelId) {
      fetchHotelDetails();
    }
  },[hotelData])
  return (
    <div>
      {hotelData ? <HotelInfo hotelData={hotelData} /> : <p>No hotel data available.</p>}
    </div>
  );
}

export default HotelDetails;
