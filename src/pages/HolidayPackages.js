import React from "react";
import GoButton from "../components/GoButton";
import AdBanner from "../components/AdBanner";
import Locations from "../components/Locations";
import HeaderContainer from "../components/HeaderContainer";
import HolidayPackagesSearchBar from "../components/HolidayPackagesSearchBar";
import HeroSectionHoliday from "../components/HeroSectionHoliday";
import HolidayAd from "../components/HolidayAd";
import BestSellingDestinations from '../components/BestSellingDestinations';

function HolidayPackages() {
  return (
    <div className="container">
      <HeroSectionHoliday />
      <HeaderContainer />
      <HolidayPackagesSearchBar />
      <GoButton />
      <HolidayAd />
      <AdBanner imageUrl="/path/to/ad-image.jpg" />
      <BestSellingDestinations />
      <Locations />
    </div>
  );
}

export default HolidayPackages;
