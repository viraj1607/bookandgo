import React from 'react';
import Button from '@mui/material/Button'; // or your preferred button library

const UnitCard = ({ unitData }) => {
  return (
    <div className="unit-card bg-white rounded-lg shadow-md">
    <img src={unitData.imageUrl} alt={unitData.title} className="w-full h-48 object-cover rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-xl font-bold">{unitData.title}</h3>
      <ul className="list-disc space-y-2">
        <li>{unitData.size}</li>
        <li>{unitData.internet}</li>
        <li>{unitData.sleeps}</li>
        <li>{unitData.bed}</li>
        <li>{unitData.petFriendly}</li>
      </ul>
      <div className="flex justify-between items-center mt-4">
        <div className="unit-card-price">
            <p className="text-2xl font-bold">${unitData.price}</p>
            <p className="text-gray-500">includes taxes & fees</p>
        </div>
        <Button variant="contained" color="primary">Reserve Now</Button>
      </div>
    </div>
  </div>
  );
};

export default UnitCard;