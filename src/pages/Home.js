import React from 'react';
import SearchDisplay from '../components/SearchDisplay';
import GoButton from '../components/GoButton';
import AdBanner from '../components/AdBanner'; // Import the AdBanner component
import StackedCard from '../components/StackedCard'; // Import the StackedCard component

function Home() {
  return (
    <div className="container">
      
      <SearchDisplay />
      {/* <div className="flex justify-center mt-8">
        <GoButton />
      </div> */}
      <AdBanner imageUrl="/path/to/ad-image.jpg" /> {/* Use the AdBanner component */}
      <StackedCard /> {/* Include the StackedCard component */}
    </div>
  );
}

export default Home;
