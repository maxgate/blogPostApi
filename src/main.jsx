import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Page1 from "./Pages/Page1.jsx";
import "./index.css";
import NofoundPage from "./Pages/NotFoundPage.jsx";
import HeroLinks1 from "./Pages/HeroLinks1.jsx";
import Content1 from "./Pages/Content1.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NofoundPage />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
  {
    path: "/blog/:id",
    element: <HeroLinks1 />,
  },

  {
    path: "/blog/:id",
    element: <Content1 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
