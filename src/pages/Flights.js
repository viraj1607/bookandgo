import React from "react";
import SearchDisplayFlights from "../components/SearchDisplayFlights";
import FlightsHeroSection from "../components/FlightsHeroSection";
import GoButtonFlights from "../components/GoButtonFlights";
import AdBanner1 from "../components/AdBanner1";
import StackedCard from "../components/StackedCard";
import Offers from "../components/Offers";
import Locations from "../components/Locations";
import HeaderContainer from "../components/HeaderContainer";
import FlightsSearchBar from "../components/FlightsSearchBar";
import RecommendAndMostViewed, { Mostviewflights } from '../components/RecommendAndMostViewed';

function Flights() {
  return (
    <div className="container">
      <FlightsHeroSection />
      <HeaderContainer />
      <FlightsSearchBar />
      <GoButtonFlights />
      <SearchDisplayFlights />
      <AdBanner1 imageUrl="/path/to/ad-image.jpg" />
      <StackedCard />
      <Offers />
      {/* Pass the correct data as props */}
      <RecommendAndMostViewed title={'Recommended for you'} flights={Mostviewflights} />
      <Locations />
    </div>
  );
}

export default Flights;
