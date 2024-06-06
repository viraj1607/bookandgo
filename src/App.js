import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import SearchDisplay from './components/SearchDisplay';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
