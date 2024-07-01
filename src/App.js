import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Admin from "./pages/Admin";
import Footer from "./components/Footer"; // Import the Footer component

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
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={appRouter} />
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}

export default App;
