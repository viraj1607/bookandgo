import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import HotelList from "./pages/HotelList";
import UserProfile from "./pages/UserProfile";
import Layout from './pages/Layout';
import HotelDetails from './pages/HotelDetails';
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./utils/AuthContext";

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
            <ProtectedRoute>
              <HotelList />
            </ProtectedRoute>
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
          element: <HotelDetails />
        }
      ],
    },
  ]);

  return (
    <AuthProvider>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </AuthProvider>
  );
}

export default App;
