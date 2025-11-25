import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import EventPage from "./pages/EventPage";
import TrackPage from "./pages/TrackPage";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    errorElement: <NotFound />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "event", 
        element: <EventPage />,
      },
      {
        path: "track", 
        element: <TrackPage />,
      },

    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}