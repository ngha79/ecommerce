import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import Login from "./page/login/Login";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  redirect,
  RouterProvider,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./page/home/Home";
import Register from "./page/register/Register";
import NotFound from "./component/notfound/NotFound";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import ContactUs from "./page/contactus/ContactUs";
import OurStory from "./page/ourstory/OurStory";
import Cart from "./page/cart/Cart";
import Recipes from "./page/recipes/Recipes";
import Product from "./page/product/Product";
import Category from "./page/category/Category";
import DetailRecipes from "./page/detail-recipes/DetailRecipes";
import Scroll from "./component/scroll/Scroll";
import User from "./page/user/User";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./page/admin/Admin";
import LeftBarAdmin from "./component/LeftBarAdmin";
import { useDispatch, useSelector } from "react-redux";
import DashBoard from "./component/DashBoard";
import ManageUser from "./component/ManageUser";
import ManageProduct from "./component/ManageProduct";
import { getCart } from "./featured/cart/cartSlice";
import CheckOut from "./page/checkout/CheckOut";
import Oder from "./page/user/Oder";
import OderDetail from "./page/user/OderDetail";
import Coupon from "./page/coupon/Coupon";
import ManageOder from "./component/ManageOder";

function App() {
  const Page = () => {
    const { cart, cartItem } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
      return () => {
        if (cartItem.length === 0) {
          dispatch(getCart());
        }
      };
    }, []);
    return (
      <>
        <Scroll />
        <div className="h-full">
          <Header />
          <div className="mt-[80px] h-full">
            <Outlet />
          </div>
          <Footer />
        </div>
      </>
    );
  };

  const AdminControl = () => {
    return (
      <>
        <Scroll />
        <div className="flex flex-auto h-screen overflow-y-scroll">
          <LeftBarAdmin />
          <div className="flex-5">
            <Admin />
          </div>
        </div>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/about/our-story",
          element: <OurStory />,
        },
        {
          path: "/user",
          element: <User />,
        },
        {
          path: "/user/oder",
          element: <Oder />,
        },
        {
          path: "/user/oder/detail",
          element: <OderDetail />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },
        {
          path: "/recipes/detail/*",
          element: <DetailRecipes />,
        },
        {
          path: "/product/*",
          element: <Product />,
        },
        {
          path: "/checkout",
          element: <CheckOut />,
        },
        {
          path: "/bundle",
          element: <Category />,
        },
        {
          path: "/shopall",
          element: <Category />,
        },
        {
          path: "/juices",
          element: <Category />,
        },
        {
          path: "/booster",
          element: <Category />,
        },
        {
          path: "/kombumcha",
          element: <Category />,
        },
        {
          path: "/milk",
          element: <Category />,
        },
        {
          path: "/shake",
          element: <Category />,
        },
        {
          path: "/lemonade",
          element: <Category />,
        },
        {
          path: "/search",
          element: <Category />,
        },
        {
          path: "/coupon",
          element: <Coupon />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminControl />,

      children: [
        {
          path: "/admin/",
          element: <DashBoard />,
        },
        {
          path: "/admin/product",
          element: <ManageProduct />,
        },
        {
          path: "/admin/user",
          element: <ManageUser />,
        },
        {
          path: "/admin/oder",
          element: <ManageOder />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },

    // {
    //   path: "/forgot-password",
    //   element: <ForgotPassword />,
    // },
    // {
    //   path: "/reset-password/*",
    //   element: <ResetPassword />,
    // },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
