import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./Components/Home/Home";
import MyWork from "./Components/MyWork/MyWork";
import Login from "./Components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>error page</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/myWork",
        element: <MyWork></MyWork>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
