import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Admin from "./pages/Admin";
import HotelList from "./pages/HotelList";
import UserProfile from "./pages/UserProfile";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/admin/:id",
      element: <Admin />,
    },
    {
      path: "/hotellist",
      element: <HotelList />,
    },
    {
      path: "userprofile",
      element: <UserProfile />,
    },
  ]);
  return (
    <div className="App">
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
