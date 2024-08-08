import React from "react";
import Rating from "@mui/material/Rating";
// Import your custom SVG icons
import { ReactComponent as BreakfastIcon } from "./icons/breakfast.svg";
import { ReactComponent as BarIcon } from "./icons/bar.svg";
import { ReactComponent as PoolIcon } from "./icons/pool.svg";
import { ReactComponent as KidsPlayIcon } from "./icons/kidsplay.svg";
import { ReactComponent as WiFiIcon } from "./icons/wifi.svg";
import { ReactComponent as ParkingIcon } from "./icons/parking.svg";
import { ReactComponent as FitnessCenterIcon } from "./icons/fitnesscenter.svg";
import { ReactComponent as RestaurantIcon } from "./icons/restaurant.svg";
import { ReactComponent as RoomServiceIcon } from "./icons/roomservice.svg";
import { ReactComponent as LaundryServiceIcon } from "./icons/laundryservice.svg";
import { ReactComponent as SpaIcon } from "./icons/spa.svg";
import { ReactComponent as AirportShuttleIcon } from "./icons/airportshuttle.svg";
import { ReactComponent as PetFriendlyIcon } from "./icons/petfriendly.svg";
import { ReactComponent as BusinessCenterIcon } from "./icons/businesscenter.svg";
import { ReactComponent as MeetingRoomsIcon } from "./icons/meetingrooms.svg";
import { ReactComponent as FrontDeskIcon } from "./icons/frontdesk.svg";
import { ReactComponent as ConciergeServiceIcon } from "./icons/conciergeservice.svg";
import { ReactComponent as GiftShopIcon } from "./icons/giftshop.svg";
import { ReactComponent as NonSmokingIcon } from "./icons/nonsmoking.svg";

const getIcon = (amenity) => {
  const iconClass = "w-6 h-6 text-blue-500"; // Tailwind class for blue color

  switch (amenity) {
    case "Breakfast Included":
      return <BreakfastIcon className={iconClass} />;
    case "Bar":
      return <BarIcon className={iconClass} />;
    case "Swimming Pool":
      return <PoolIcon className={iconClass} />;
    case "Kids Play Area":
      return <KidsPlayIcon className={iconClass} />;
    case "Free Wi-Fi":
      return <WiFiIcon className={iconClass} />;
    case "Parking":
      return <ParkingIcon className={iconClass} />;
    case "Fitness Center":
      return <FitnessCenterIcon className={iconClass} />;
    case "Restaurant":
      return <RestaurantIcon className={iconClass} />;
    case "Room Service":
      return <RoomServiceIcon className={iconClass} />;
    case "Laundry Service":
      return <LaundryServiceIcon className={iconClass} />;
    case "Spa":
      return <SpaIcon className={iconClass} />;
    case "Airport Shuttle":
      return <AirportShuttleIcon className={iconClass} />;
    case "Pet Friendly":
      return <PetFriendlyIcon className={iconClass} />;
    case "Business Center":
      return <BusinessCenterIcon className={iconClass} />;
    case "Meeting Rooms":
      return <MeetingRoomsIcon className={iconClass} />;
    case "24-hour Front Desk":
      return <FrontDeskIcon className={iconClass} />;
    case "Concierge Service":
      return <ConciergeServiceIcon className={iconClass} />;
    case "Gift Shop":
      return <GiftShopIcon className={iconClass} />;
    case "Non-smoking Rooms":
      return <NonSmokingIcon className={iconClass} />;
    default:
      return null;
  }
};

const HotelInfo = ({ hotelData }) => {
  if (!hotelData) {
    return <div>Hotel not found</div>;
  }

  const {
    imageURLs,
    name, // Use the correct property name
    description,
    amenities,
    reviews,
  } = hotelData;

  console.log("hotelName:", name); // Add this line to check if hotelName is being passed correctly

  return (
    <div className="hotel-info-container">
      <div className="flex flex-col h-fit">
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <div className="col-span-2 row-span-2 rounded-[21px] md:rounded-[31px] bg-[#D9D9D9]">
            <img
              src={imageURLs[0]}
              alt="Image 1"
              className="w-full h-full object-cover rounded-[21px] md:rounded-[31px]"
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-[21px] md:rounded-[31px] bg-[#D9D9D9]">
            <img
              src={imageURLs[1]}
              alt="Image 2"
              className="w-full h-full object-cover rounded-[21px] md:rounded-[31px]"
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-[21px] md:rounded-[31px] bg-[#D9D9D9]">
            <img
              src={imageURLs[2]}
              alt="Image 3"
              className="w-full h-full object-cover rounded-[21px] md:rounded-[31px]"
            />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <span className="font-bold text-2xl md:text-[35px] mr-4">
            {name} {/* Display the name here */}
          </span>
          <Rating
            name="half-rating-read"
            defaultValue={reviews}
            precision={0.1}
            readOnly
          />
        </div>
        <p className="mt-4">{description}</p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Amenities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center text-black text-sm font-semibold"
              >
                {getIcon(amenity)}
                <span className="ml-2">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
