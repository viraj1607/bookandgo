import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return <div className="App">
    <RouterProvider router={appRouter} />
  </div>;
}

export default App;
