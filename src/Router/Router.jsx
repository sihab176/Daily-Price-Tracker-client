import { createBrowserRouter } from "react-router";
import RootLayout from "../component/layout/RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyProducts from "../Pages/vendor/MyProducts/MyProducts";
import AddAdvertisement from "../Pages/vendor/AddAdvertisement/AddAdvertisement";
import MyAdvertisements from "../Pages/vendor/MyAdvertisements/MyAdvertisements";
import ProductCard from "../component/ProductSection/ProductCard";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import AllProducts from "../Pages/AllProduct/AllProduct";
import ViewPriceTrends from "../Pages/UserDashboard/ViewPriceTrends/ViewPriceTrends";
import ManageWatchlist from "../Pages/UserDashboard/ManageWatchlist/ManageWatchlist";
import AllUsers from "../Pages/Admin/AllUsers/AllUsers";
import AllProductsAdmin from "../Pages/Admin/AllProducstAdmin/AllProductsAdmin";
import AllAdvertisement from "../Pages/Admin/AllAdvertisement/AllAdvertisement";
import DynamicUsers from "../Pages/DynamicUsers/DynamicUsers";
import PrivetRoute from "../Secure/PrivetRoute";
import MyOrderList from "../Pages/UserDashboard/MyOrderList/MyOrderList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "/productDetails/:id", Component: ProductDetails },
      { path: "/allProduct", Component: AllProducts },
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
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      // vendor route ==========>
      { index: true, Component: DynamicUsers },
      { path: "addProduct", Component: AddProduct },
      { path: "myProducts", Component: MyProducts },
      { path: "addAdvertisement", Component: AddAdvertisement },
      { path: "myAdvertisements", Component: MyAdvertisements },
      // users route ===========>
      { path: "viewPriceTrends", Component: ViewPriceTrends },
      { path: "manageWatchList", Component: ManageWatchlist },
      { path: "myOrderList", Component: MyOrderList },
      // admin route  ===========>
      { path: "admin/allUsers", Component: AllUsers },
      { path: "admin/allProducts", Component: AllProductsAdmin },
      { path: "admin/allAdvertisement", Component: AllAdvertisement },
    ],
  },
]);
