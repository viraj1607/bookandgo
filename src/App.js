// App.js
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import HotelList from "./pages/HotelList";
import UserProfile from "./pages/UserProfile";
import Layout from "./pages/Layout";
import HotelDetails from "./pages/HotelDetails";
import Flights from "./pages/Flights";
import HolidayPackages from "./pages/HolidayPackages";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./utils/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary"; // import ErrorBoundary

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
          element: (
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          ),
        },
        {
          path: "/hotellist",
          element: (
            // <ProtectedRoute>
            <HotelList />
            // </ProtectedRoute>
          ),
        },
        {
          path: "/userprofile",
          element: (
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/hoteldetails",
          element: (
            <ProtectedRoute>
              <HotelDetails />
            </ProtectedRoute>
          ),
        },
        {
          path: "/flights",
          element: <Flights />,
        },
        {
          path: "/holiday-packages",
          element: <HolidayPackages />,
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <ErrorBoundary>
        <RouterProvider router={appRouter} />
      </ErrorBoundary>
    </AuthProvider>
  );
}

export default App;
