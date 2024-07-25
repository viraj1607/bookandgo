import React from 'react';
import { Button } from '@mui/material';

const RoomCard = ({ rooms }) => {
  return (
    <div className="room-card bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Deluxe Room with Balcony</h2>
      <p className="text-gray-600">Perfect for couples or solo travelers.</p>
      <ul className="list-disc mt-2">
        <li>King-sized bed</li>
        <li>Private balcony with city views</li>
        <li>Free Wi-Fi</li>
        <li>Flat-screen TV with cable channels</li>
      </ul>
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-bold">$150 + taxes</p>
        <Button variant="contained" color="primary">
          Book Now
        </Button>
      </div>
    </div>
  );
  
};

export default RoomCard;