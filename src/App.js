import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import SearchDisplay from './components/SearchDisplay';
import Admin from "./pages/Admin";

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
      <div className="container mx-auto p-4">
        <SearchDisplay />
      </div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
