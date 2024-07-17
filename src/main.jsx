import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import VideoCall from './componenets/VideoCall.jsx'
const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/call',
    element:<VideoCall/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
