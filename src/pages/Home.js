// home.js
import React from 'react';
import SearchDisplay from '../components/SearchDisplay';
import HeroSection from '../components/HeroSection';
import GoButton from '../components/GoButton';
import AdBanner from '../components/AdBanner';
import StackedCard from '../components/StackedCard';
import Offers from '../components/Offers';
import Locations from '../components/Locations';
import HeaderContainer from '../components/HeaderContainer';
import RecommendAndMostViewed, { recommendedHotelsList, mostViewedHotelsList } from '../components/RecommendAndMostViewed';

function Home() {
  return (
    <div className="container">
      <HeroSection />
      <HeaderContainer />
      <SearchDisplay />
      {/* <div className="flex justify-center mt-8">
        <GoButton />
      </div> */}
      <AdBanner imageUrl="/path/to/ad-image.jpg" /> {/* Use the AdBanner component */}
      <StackedCard /> {/* Include the StackedCard component */}
      <RecommendAndMostViewed title={'Recommended for you'} hotels={recommendedHotelsList}/> {/* Include the recommended section*/}
      <RecommendAndMostViewed title={'Most Viewed'} hotels={mostViewedHotelsList}/> {/* Include the most viewed section*/}
      <Offers /> {/* Include the Offers component */}
      <Locations /> {/* Include the Locations component */}
    </div>
  );
}

export default Home;
