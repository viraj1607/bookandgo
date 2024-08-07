import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import HotelList from "./pages/HotelList";
import UserProfile from "./pages/UserProfile";
import Layout from "./pages/Layout";
import HotelDetails from "./pages/HotelDetails";
import Flights from "./pages/Flights";
import HolidayPackages from "./pages/HolidayPackages";
import FlightDetails from "./pages/FlightDetails"; // Add this import
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./utils/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary";
import LogoAnimation from "./components/LogoAnimation";
import FlightList from "./pages/FlightList";
import HolidayList from "./pages/HolidayList";
import "./i18n";
import { ContextProvider } from "./AppContext";
import Support from './pages/Support';

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000); // Duration of the video

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {!showContent && <LogoAnimation />}
      <div className={showContent ? "" : "hidden"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="admin/:id" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
            <Route path="hotellist" element={<HotelList />} />
            <Route path="flightlist" element={<FlightList />} />
            <Route path="holidaylist" element={<HolidayList />} />
            <Route path="flightdetails" element={<FlightDetails />} /> {/* Add this route */}
            <Route path="userprofile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
            <Route path="hoteldetails/:hotelId" element={<ProtectedRoute><HotelDetails /></ProtectedRoute>} />
            <Route path="flights" element={<Flights />} />
            <Route path="holiday-packages" element={<HolidayPackages />} />
            <Route path="support" element={<Support />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <AuthProvider>
      <ContextProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ContextProvider>
    </AuthProvider>
  </Router>
);

export default AppWithRouter;
