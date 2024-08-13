import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  const [flights, setFlights] = useState([]);
  const [flightBooking, setFlightBooking] = useState(null);
  const [hotelBooking,setHotelBooking]=useState(null)

  return (
    <AppContext.Provider
      value={{
        hotels,
        setHotels,
        flights,
        setFlights,
        flightBooking,
        setFlightBooking,
        hotelBooking,
        setHotelBooking,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
