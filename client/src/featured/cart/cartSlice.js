import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartService from "./cartService";

const initialState = {
  cart: [],
  cartItem: [],
  isLoading: false,
  isSuccess: false,
  isError: "",
  message: "",
};

export const getCart = createAsyncThunk("cart/getCart", async (thunkAPI) => {
  try {
    return await cartService.getCart();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const updateCartItem = createAsyncThunk(
  "cart/updateCartItem",
  async (data, thunkAPI) => {
    try {
      return await cartService.updateCartItem(data);
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

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (cartItemId, thunkAPI) => {
    try {
      await cartService.deleteCartItem(cartItemId);
      return cartItemId;
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

export const deleteAllCartItem = createAsyncThunk(
  "cart/deleteAllCartItem",
  async (cartId, thunkAPI) => {
    try {
      return await cartService.deleteAllCartItem(cartId);
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

export const createCartItem = createAsyncThunk(
  "cart/createCartItem",
  async (data, thunkAPI) => {
    try {
      return await cartService.createCartItem(data);
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

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.cart = [];
      state.cartItem = [];
    },
    resetCartItem: (state) => {
      state.cartItem = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        state.cart = action.payload.cart.cart;
        state.cartItem = action.payload.cart.cartItem;
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        const update = state.cartItem.map((cart) => {
          if (cart.id === action.payload.cartItem.id) {
            return action.payload.cartItem;
          }
          return cart;
        });
        state.cartItem = update;
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        const update = state.cartItem.filter(
          (cart) => cart.id !== action.payload
        );
        state.cartItem = update;
      })
      .addCase(createCartItem.fulfilled, (state, action) => {
        const update = state.cartItem.filter(
          (cart) => cart.id === action.payload.cartItem.id
        );
        if (update.length > 0) {
          const newUp = state.cartItem.map((cart) => {
            if (cart.id === action.payload.cartItem.id) {
              return action.payload.cartItem;
            }
            return cart;
          });
          state.cartItem = newUp;
        } else {
          state.cartItem.push(action.payload.cartItem);
        }
      });
  },
});

export const { resetCart, resetCartItem } = cartSlice.actions;
export default cartSlice.reducer;
