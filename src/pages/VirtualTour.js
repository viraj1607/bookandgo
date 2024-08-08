import React from "react";
import { useLocation } from "react-router-dom";
import image360 from "../imgs/img360.jpg"
import "aframe";

const VirtualTour = () => {
  const location = useLocation();
  const { imageUrl } = location.state || {};
  console.log("imageUrl",imageUrl)

  return (
    <div className="virtual-tour-container h-screen w-full">
      {imageUrl ? (
        <a-scene>
          <a-sky src={image360} rotation="0 -130 0"></a-sky>
        </a-scene>
      ) : (
        <p>No virtual tour image available.</p>
      )}
    </div>
  );
};

export default VirtualTour;
