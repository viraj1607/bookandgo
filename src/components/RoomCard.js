import React from 'react';

const RoomCard = ({ rooms }) => {
  return (
    <div className="room-card">
      {/* Iterate over rooms and display room information */}
      {rooms.map((room) => (
        <div key={room.id} className="room-card-item">
          {/* Display room image, name, price, and other details */}
          <img src={room.image} alt={room.name} />
          <h3>{room.name}</h3>
          <p>Price: ${room.price}</p>
          {/* Add more room details as needed */}
        </div>
      ))}
    </div>
  );
};

export default RoomCard;