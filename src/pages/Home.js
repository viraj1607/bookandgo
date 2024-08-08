import React, { useEffect, useState } from "react";
import SearchDisplay from "../components/SearchDisplay";
import HeroSection from "../components/HeroSection";
import GoButton from "../components/GoButton";
import AdBanner1 from "../components/AdBanner1";
import StackedCard from "../components/StackedCard";
import Offers from "../components/Offers";
import Locations from "../components/Locations";
import HeaderContainer from "../components/HeaderContainer";
import SearchCard from "../components/SearchBar";
import SignInPopup from "../components/SignInPopup";
import { getRandomHotels } from "../custom-functions/getRandomHotels";

function Home() {
  const [randomHotels, setRandomHotels] = useState([]);

  useEffect(() => {
    const fetchRandomHotels = async () => {
      const data = await getRandomHotels();
      setRandomHotels(data);
    };

    fetchRandomHotels();
  }, []);
  return (
    <div className="container relative">
      <SignInPopup />
      <HeroSection />
      <HeaderContainer />
      <SearchCard />
      {/* <GoButton /> */}
      {randomHotels.length > 0 && (
        <SearchDisplay randomHotelsData={randomHotels} />
      )}
      <AdBanner1 imageUrl="/path/to/ad-image.jpg" />
      <StackedCard />
      <Offers />
      <Locations />
    </div>
  );
}

export default Home;
