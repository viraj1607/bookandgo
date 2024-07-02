import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import HotelList from "./pages/HotelList";
import UserProfile from "./pages/UserProfile";
import Layout from './pages/Layout';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, 
      children: [
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
          path: "/userprofile",
          element: <UserProfile />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
