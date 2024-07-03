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
import SearchCard from '../components/SearchBar';

function Home() {
  return (
    <div className="container">
      <HeroSection />
      <HeaderContainer />

      <SearchCard />
      <GoButton />
      <SearchDisplay />

      <AdBanner imageUrl="/path/to/ad-image.jpg" /> {/* Use the AdBanner component */}
      <StackedCard /> {/* Include the StackedCard component */}
      <Offers /> {/* Include the Offers component */}
      <Locations /> {/* Include the Locations component */}
    </div>
  );
}

export default Home;
