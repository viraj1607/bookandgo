import React from 'react';
import { useNavigate } from 'react-router-dom';


const RoomCard = ({ price }) => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate('/hotelcheckout'); // Navigate to the HotelCheckout page
  };


  return (
    <div className="room-card max-[426px]:mx-8 p-6 rounded-[31px] h-auto flex-shrink-0 border-[0.75px] border-[#CDCDCD] bg-white">
      <h2 className="text-xl font-bold text-black font-inter">
        Deluxe Room with Balcony
      </h2>
      <p className="text-black font-inter text-[15px] font-normal leading-normal">
        Perfect for couples or solo travelers.
      </p>
      <ul className="list-disc mt-2 ml-4">
        <li className="text-black font-inter text-[15px] font-normal leading-normal">
          King-sized bed
        </li>
        <li className="text-black font-inter text-[15px] font-normal leading-normal">
          Private balcony with city views
        </li>
        <li className="text-black font-inter text-[15px] font-normal leading-normal">
          Free Wi-Fi
        </li>
        <li className="text-black font-inter text-[15px] font-normal leading-normal">
          Flat-screen TV with cable channels
        </li>
      </ul>
      <div className="flex justify-between items-center mt-4">
        <div>
          <span className="text-lg font-bold text-black font-inter">
            ${price}
          </span>
          <span className="text-black font-inter text-[15px] font-light leading-normal">
            + taxes
          </span>
        </div>
        <button 
          onClick={handleBookNowClick}
          className="w-[105px] lg:w-[135px] h-[35px] lg:h-[41px] flex-shrink-0 rounded-[11px] bg-gradient-to-r from-[#0060D0] to-[#00316A] text-white font-semibold text-[14px] lg:text-[17px]"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
