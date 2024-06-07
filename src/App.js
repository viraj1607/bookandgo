import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Tabs from "./components/Tabs";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Tabs
            tabs={[
              {
                label: "Flight Booking",
                content: <Home />,
              },
              {
                label: "Hotel Booking",
                content: <div>Hotels to explore</div>,
              },
              {
                label: "Car Rental",
                content: <div>Available rental Cars .</div>,
              },
            ]}
          />
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default AppWithRouter;
