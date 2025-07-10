import { createBrowserRouter } from "react-router";
import RootLayout from "../component/layout/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyProducts from "../Pages/vendor/MyProducts/MyProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { path: "addProduct", Component: AddProduct },
      { path: "myProducts", Component: MyProducts },
    ],
  },
]);
