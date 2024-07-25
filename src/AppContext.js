import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  const [flights, setFlights] = useState([]);

  return (
    <AppContext.Provider value={{ hotels, setHotels, flights, setFlights }}>
      {children}
    </AppContext.Provider>
  );
};
