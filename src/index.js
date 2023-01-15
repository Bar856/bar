import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './components/Main'    
import Errorel from './components/Errorel'

const router = createBrowserRouter([
  {
    path: "/bar",
    element:<Main/>,
    errorElement:<Errorel/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);