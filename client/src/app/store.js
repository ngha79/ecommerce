import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../featured/auth/authSlice";
import userSlice from "../featured/user/userSlice";
import productSlice from "../featured/product/productSlice";
import cartSlice from "../featured/cart/cartSlice";
import couponSlice from "../featured/coupon/couponSlice";
import oderSlice from "../featured/oder/oderSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    product: productSlice,
    cart: cartSlice,
    coupon: couponSlice,
    oder: oderSlice,
  },
});
