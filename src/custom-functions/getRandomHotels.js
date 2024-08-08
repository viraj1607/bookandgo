import axios from "axios";

export const getRandomHotels = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/hotels/random/Toronto",
      {}
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
  }
};
