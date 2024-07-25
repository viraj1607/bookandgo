import React from "react";
import SearchDisplayFlights from "../components/SearchDisplayFlights";
import FlightsHeroSection from "../components/FlightsHeroSection";
import GoButton from "../components/GoButton";
import AdBanner1 from "../components/AdBanner1";
import StackedCard from "../components/StackedCard";
import Offers from "../components/Offers";
import Locations from "../components/Locations";
import HeaderContainer from "../components/HeaderContainer";
import FlightsSearchBar from "../components/FlightsSearchBar";
import RecommendAndMostViewed, { Recomflights} from '../components/RecommendAndMostViewed';


function Flights() {
  return (
    <div className="container">
      <FlightsHeroSection />
      <HeaderContainer />
      <FlightsSearchBar />
      <GoButton />
      <SearchDisplayFlights />
      <AdBanner1 imageUrl="/path/to/ad-image.jpg" />
      <StackedCard />
      <Offers />
      <RecommendAndMostViewed title={'Recommended for you'} flights={Recomflights}/>
      <Locations />
    </div>
  );
}

export default Flights;
