import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import couponService from "./couponService";

const initialState = {
  allCoupon: [],
  couponCode: [],
  isExist: false,
  isLoading: false,
  isSuccess: false,
  isError: "",
  message: "",
};

export const applyCoupon = createAsyncThunk(
  "coupon/applyCoupon",
  async (name, thunkAPI) => {
    try {
      return await couponService.applyCoupon(name);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    resetCoupon: (state) => {
      state.isExist = fasle;
      state.couponCode = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(applyCoupon.fulfilled, (state, action) => {
      state.couponCode = action.payload.discount;
      state.isExist = action.payload.message;
    });
  },
});

export const {} = couponSlice.actions;
export default couponSlice.reducer;
