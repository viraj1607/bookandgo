import axios from "axios";

export const getHotelDetails = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/hotels/${id}`); 
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching hotel details:", error);
    throw error;
  }
};
