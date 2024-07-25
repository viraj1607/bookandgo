import React, { useEffect } from 'react';
import HotelInfo from '../components/HotelInfo';
import RoomCard from '../components/RoomCard'; 
import UnitCard from '../components/UnitCard';
import { useLocation } from 'react-router-dom';
import hotelDetailImg from "../imgs/hotelDetailImg.png";
import { getHotelDetails } from '../custom-functions/getHotelDetails';

const HotelDetails = () => {
  const { state } = useLocation();
  const { hotelData } = state || {};

  const sampleUnits = [
    {
      imageUrl: 'path/to/unit1.jpg',
      title: 'Standard Room',
      size: '250 sq ft',
      internet: 'Free Wi-Fi',
      sleeps: '2 guests',
      bed: '1 Queen Bed',
      petFriendly: 'No Pets Allowed',
      price: 120,
    },
    {
      imageUrl: 'path/to/unit2.jpg',
      title: 'Deluxe Suite',
      size: '400 sq ft',
      internet: 'High-Speed Internet',
      sleeps: '4 guests',
      bed: '1 King Bed + 1 Sofa Bed',
      petFriendly: 'Pet Friendly',
      price: 180,
    },
    {
      imageUrl: 'path/to/unit3.jpg',
      title: 'Family Room',
      size: '550 sq ft',
      internet: 'Free Wi-Fi',
      sleeps: '6 guests',
      bed: '2 Queen Beds',
      petFriendly: 'No Pets Allowed',
      price: 220,
    },
  ];

  // useEffect(()=>{
  //     getHotelDetails("6696c3a14b2414bee03eebc1")
  // },[])
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
