import React from "react";
import GoButtonHoliday from "../components/GoButtonHoliday";
import AdBanner from "../components/AdBanner";
import Locations from "../components/Locations";
import HeaderContainer from "../components/HeaderContainer";
import HolidayPackagesSearchBar from "../components/HolidayPackagesSearchBar";
import HeroSectionHoliday from "../components/HeroSectionHoliday";
import HolidayAd from "../components/HolidayAd";
import BestSellingDestinations from '../components/BestSellingDestinations';
import InternationalDestinations from "../components/InternationalDestinations";
import Explore from "../components/Explore";

function HolidayPackages() {
  return (
    <div className="container">
      <HeroSectionHoliday />
      <HeaderContainer />
      <HolidayPackagesSearchBar />
      <GoButtonHoliday />
      <HolidayAd />
      <AdBanner imageUrl="/path/to/ad-image.jpg" />
      <BestSellingDestinations />
      <InternationalDestinations />
      <Explore />
      <Locations />
    </div>
  );
}

export default HolidayPackages;
