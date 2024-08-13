import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image360 from "../imgs/img360.jpg";
import image3602 from "../imgs/img3602.jpg";
import image3603 from "../imgs/img3603.jpg";
import "aframe";

const VirtualTour = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to navigate between pages
  const { imageUrl } = location.state || {};
  console.log("imageUrl", imageUrl);

  const images = [image360, image3602, image3603];
  const getRandomImage = () =>
    images[Math.floor(Math.random() * images.length)];

  return (
    <div className="virtual-tour-container h-screen w-full">
      {imageUrl ? (
        <a-scene>
          <a-sky src={getRandomImage()} rotation="0 -130 0"></a-sky>
        </a-scene>
      ) : (
        <p>No virtual tour image available.</p>
      )}
      {/* Back Button */}
      <button
        className="back-button absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => navigate(-1)} // Navigate to the previous page
      >
        Back
      </button>
    </div>
  );
};

export default VirtualTour;
