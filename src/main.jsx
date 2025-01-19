import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import MyWork from "./Pages/MyWork/MyWork";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Pages/Profile/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AdminRoute from "./AdminRoute";
import AddLink from "./Pages/Dashboard/AddLink";
import ViewLinks from "./Pages/Dashboard/ViewLinks";
import Submission from "./Pages/Dashboard/Submission";

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
        element: (
          <PrivateRoute>
            <MyWork></MyWork>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <Dashboard></Dashboard>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addLink",
        element: (
          <AdminRoute>
            <AddLink></AddLink>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/viewLinks",
        element: (
          <AdminRoute>
            <ViewLinks></ViewLinks>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/submission",
        element: (
          <AdminRoute>
            <Submission></Submission>
          </AdminRoute>
        ),
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
);
