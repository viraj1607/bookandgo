import axios from "axios";

export const getHotelList = async (location, priceRange) => {
  
  try {
    const response = await axios.get("http://localhost:5000/api/hotels", {
      params: {
        city: location?.value,
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
      },
    });
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error("Error fetching hotels:", error);
  }
};
