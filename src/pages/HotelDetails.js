import React, { useEffect, useState } from 'react';
import HotelInfo from '../components/HotelInfo';
import RoomCard from '../components/RoomCard'; 
import UnitCard from '../components/UnitCard';
import { useLocation } from 'react-router-dom';
import hotelDetailImg from "../imgs/hotelDetailImg.png";
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
    <div className="hotel-details-container flex gap-6 p-10">
      <div className="hotel-info-column w-8/12">
        <div className="hotel-info-container">
          {hotelData ? <HotelInfo hotelData={hotelData} /> : <p>No hotel data available.</p>}
        </div>
        <span className="font-bold text-2xl md:text-[35px] mr-4 p-10">
            Choose your unit
          </span>
        <div className="unit-selection-container w-full overflow-x-auto"> 
          <div className="unit-card-container flex flex-row gap-6 p-10"> 
            {sampleUnits.map((unit, index) => (
              <UnitCard key={index} unitData={unit} className="w-1/3" />  
            ))}
          </div>
        </div>
      </div>
      <div className="room-card-container w-4/12">
        <RoomCard />
        {/* {hotelData && hotelData.rooms && hotelData.rooms.length > 0 ? (
          // Render rooms
        ) : (
          <p>No rooms available.</p>
        )} */}
        <div className="w-full mt-4">
          <img src={hotelDetailImg} alt="Hotel Image" className="w-full" />
        </div>
      </div>
      
    </div>
   
  

  );
}

export default HotelDetails;
