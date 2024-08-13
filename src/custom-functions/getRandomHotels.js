import axios from "axios";

export const getRandomHotels = async () => {
  try {
    const response = await axios.get(
      "https://bookngo-server-git-main-viraj1607s-projects.vercel.app/api/hotels/random/Toronto",
      {}
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
  }
};
