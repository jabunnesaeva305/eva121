import React from "react";
import ReactDOM from "react-dom/client";
import Meain from "./Components/Meain";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Education from "./Components/Education";
import Root from "./Components/Root";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { Toaster } from "react-hot-toast";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Meain></Meain>,
      },
      {
        path: "/Education",
        element: <Education></Education>,
      },
      {
        path: "/project",
        element: <Projects></Projects>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-[95%] mx-auto">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  </React.StrictMode>
);
