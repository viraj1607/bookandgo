import React from "react";
import SearchDisplay from "../components/SearchDisplay";
import HeroSection from "../components/HeroSection";
import GoButton from "../components/GoButton";
import AdBanner1 from "../components/AdBanner1";
import StackedCard from "../components/StackedCard";
import Offers from "../components/Offers";
import Locations from "../components/Locations";
import HeaderContainer from "../components/HeaderContainer";
import SearchCard from "../components/SearchBar";
import RecommendAndMostViewed, { recommendedHotelsList, mostViewedHotelsList } from '../components/RecommendAndMostViewed';
import SignInPopup from "../components/SignInPopup";

function Home() {
  return (
    <div className="container relative">
      <SignInPopup />
      <HeroSection />
      <HeaderContainer />
      <SearchCard />
      <GoButton />
      <SearchDisplay />
      <AdBanner1 imageUrl="/path/to/ad-image.jpg" />
      <StackedCard />
      <Offers />
      <RecommendAndMostViewed title={'Recommended for you'} hotels={recommendedHotelsList}/>
      <RecommendAndMostViewed title={'Most Viewed'} hotels={mostViewedHotelsList}/> 
      <Locations />
    </div>
  );
}

export default Home;
