import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  users: [],
  isLoading: false,
  isSuccess: false,
  isError: "",
  message: "",
};

export const getAllUserByAdmin = createAsyncThunk(
  "user/getAllUserByAdmin",
  async (data, thunkAPI) => {
    try {
      return await userService.getAllUserByAdmin(data);
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

export const createUserByAdmin = createAsyncThunk(
  "user/createUserByAdmin",
  async (data, thunkAPI) => {
    try {
      return await userService.createUserByAdmin(data);
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

export const updateUserByAdmin = createAsyncThunk(
  "user/updateUserByAdmin",
  async (data, thunkAPI) => {
    try {
      return await userService.updateUserByAdmin(data);
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

export const deleteUserByAdmin = createAsyncThunk(
  "user/deleteUserByAdmin",
  async (data, thunkAPI) => {
    try {
      return await userService.deleteUserByAdmin(data);
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

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userData, thunkAPI) => {
    try {
      return await userService.updateUser(userData);
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

export const updatePasswordUser = createAsyncThunk(
  "user/updatePasswordUser",
  async (userData, thunkAPI) => {
    try {
      return await userService.updatePasswordUser(userData);
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = "";
      state.isError = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUserByAdmin.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(createUserByAdmin.fulfilled, (state, action) => {
        state.users.unshift(action.payload.user);
      })
      .addCase(updateUserByAdmin.fulfilled, (state, action) => {
        const update = state.users.map((user) => {
          if (user.id === action.payload.user.id) {
            return action.payload.user;
          }
          return user;
        });
        state.users = update;
      })
      .addCase(deleteUserByAdmin.fulfilled, (state, action) => {
        const update = state.users.filter(
          (user) => user.id !== +action.payload.user
        );
        state.users = update;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(updatePasswordUser.fulfilled, (state, action) => {
        state.message = action.payload;
      })
      .addCase(updatePasswordUser.rejected, (state, action) => {
        state.isError = action.payload;
      });
  },
});

export const { resetMessage } = userSlice.actions;
export default userSlice.reducer;
