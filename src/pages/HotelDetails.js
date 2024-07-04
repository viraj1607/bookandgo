import React from 'react';
import SearchDisplay from '../components/SearchDisplay';
import HeroSection from '../components/HeroSection';
import GoButton from '../components/GoButton';
import AdBanner from '../components/AdBanner'; // Import the AdBanner component
import StackedCard from '../components/StackedCard'; // Import the StackedCard component
import Offers from '../components/Offers'; // Import the Offers component
import Locations from '../components/Locations'; // Import the Locations component
import HeaderContainer from '../components/HeaderContainer';
import LoginSignup from '../components/LoginSignup';
import HotelInfo from '../components/HotelInfo';
import { useLocation } from 'react-router-dom';

const HotelDetails = () => {
  const { state } = useLocation();
  const { hotelData } = state || {};
  return (
    <div>
      {hotelData ? <HotelInfo hotelData={hotelData} /> : <p>No hotel data available.</p>}
    </div>
  );
}

export default HotelDetails;
