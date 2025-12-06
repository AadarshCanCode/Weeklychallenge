import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import EventPage from "./pages/EventPage";
import TrackPage from "./pages/TrackPage";
import NotFound from "./pages/NotFound";
import FeedbackPage from "./pages/FeedbackPage";

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
        children: [
          {
            index: true, 
            element: <TrackPage />,
          },
          {
            path: "feedback", 
            element: <FeedbackPage />,
          },

        ],

      },

    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}