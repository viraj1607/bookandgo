import React from "react";
import SearchDisplay from "../components/SearchDisplay";
import HeroSection from "../components/HeroSection";
import GoButton from "../components/GoButton";
import AdBanner from "../components/AdBanner";
import StackedCard from "../components/StackedCard";
import Offers from "../components/Offers";
import Locations from "../components/Locations";
import HeaderContainer from "../components/HeaderContainer";
import SearchCard from "../components/SearchBar";
import RecommendAndMostViewed, { recommendedHotelsList, mostViewedHotelsList } from '../components/RecommendAndMostViewed';


function Home() {
  return (
    <div className="container">
      <HeroSection />
      <HeaderContainer />
      <SearchCard />
      <SearchDisplay />
      <div className="flex justify-center mt-8">
        <GoButton />
      </div> 
      <AdBanner imageUrl="/path/to/ad-image.jpg" />
      <StackedCard />
      <RecommendAndMostViewed title={'Recommended for you'} hotels={recommendedHotelsList}/>
      <RecommendAndMostViewed title={'Most Viewed'} hotels={mostViewedHotelsList}/> 
      <Offers /> 
      <Locations />

    </div>
  );
}

export default Home;
