import React, { useContext, useEffect, useState } from "react";
import HotelInfo from "../components/HotelInfo";
import RoomCard from "../components/RoomCard";
import { useNavigate } from "react-router-dom";
import hotelDetailImg from "../imgs/hotelDetailImg.png";
import { getHotelDetails } from "../custom-functions/getHotelDetails";
import { useParams } from "react-router-dom";
import { AppContext } from "../AppContext";

const HotelDetails = () => {
  const [hotelData, setHotelData] = useState(null);
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const { setHotelBooking } = useContext(AppContext);

  useEffect(() => {
    if (document.documentElement.classList.contains("a-fullscreen")) {
      document.documentElement.classList.remove("a-fullscreen");
    }

    const fetchHotelDetails = async () => {
      const detail = await getHotelDetails(hotelId);
      setHotelData(detail);
      setHotelBooking((prevBooking) => ({
        ...prevBooking,
        hotelName: detail.name,
      }));
    };

    if (hotelId) {
      fetchHotelDetails();
    }
  }, [hotelId, setHotelBooking]);

  const handleVirtualTour = () => {
    if (hotelData && hotelData.image360) {
      navigate(`/virtual-tour/${hotelId}`, {
        state: { imageUrl: hotelData.image360 },
      });
    } else {
      alert("Virtual tour not available for this hotel.");
    }
  };

  return (
    <div className="flex gap-8 py-10 md:px-10 lg:px-14 md:flex-row flex-col">
      <div className="hotel-info-column px-[35px] md:w-8/12">
        <div className="hotel-info-container">
          {hotelData ? (
            <>
              <HotelInfo hotelData={hotelData} />
              <button
                onClick={handleVirtualTour}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Virtual Tour
              </button>
            </>
          ) : (
            <p>No hotel data available.</p>
          )}
        </div>
      </div>
      <div className="room-card-container md:w-4/12">
        {hotelData && <RoomCard price={hotelData.price} />}

        <div className="w-full mt-4 hidden md:block">
          <img src={hotelDetailImg} alt="Hotel Image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
