import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import oderService from "./oderService";

const initialState = {
  oder: null,
  allOder: [],
  allOderUser: [],
  allOderItem: [],
  isLoading: false,
  isSuccess: false,
  isError: "",
  message: "",
};

export const createOder = createAsyncThunk(
  "oder/createOder",
  async (data, thunkAPI) => {
    try {
      return await oderService.createOder(data);
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

export const createOderItem = createAsyncThunk(
  "oder/createOderItem",
  async (data, thunkAPI) => {
    try {
      return await oderService.createOderItem(data);
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

export const getAllOderUser = createAsyncThunk(
  "oder/getAllOderUser",
  async (data, thunkAPI) => {
    try {
      return await oderService.allOderUser(data);
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

export const allOderItemByOder = createAsyncThunk(
  "oder/allOderItemByOder",
  async (data, thunkAPI) => {
    try {
      return await oderService.allOderItemByOder(data);
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

export const listAllOder = createAsyncThunk(
  "oder/listAllOder",
  async (data, thunkAPI) => {
    try {
      return await oderService.listAllOder(data);
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

export const updateCancelOder = createAsyncThunk(
  "oder/updateCancelOder",
  async (data, thunkAPI) => {
    try {
      return await oderService.updateCancelOder(data);
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

export const updateDeliveryOder = createAsyncThunk(
  "oder/updateDeliveryOder",
  async (data, thunkAPI) => {
    try {
      return await oderService.updateDeliveryOder(data);
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

export const updateCompleteOder = createAsyncThunk(
  "oder/updateCompleteOder",
  async (data, thunkAPI) => {
    try {
      return await oderService.updateCompleteOder(data);
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

export const oderSlice = createSlice({
  name: "oder",
  initialState,
  reducers: {
    resetOder: (state) => {
      state.oder = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOder.fulfilled, (state, action) => {
        state.oder = action.payload.oder;
      })
      .addCase(createOderItem.fulfilled, (state, action) => {
        state.allOderItem.push(action.payload.oderItem);
      })
      .addCase(getAllOderUser.fulfilled, (state, action) => {
        state.allOderUser = action.payload.oder;
      })
      .addCase(allOderItemByOder.fulfilled, (state, action) => {
        state.allOderItem = action.payload.oderItem;
      })
      .addCase(listAllOder.fulfilled, (state, action) => {
        state.allOder = action.payload.oder;
      })
      .addCase(updateCancelOder.fulfilled, (state, action) => {
        const update = state.allOder.map((oder) => {
          if (oder.id === action.payload.oder.id) {
            return action.payload.oder;
          }
          return oder;
        });
        state.allOder = update;
      })
      .addCase(updateDeliveryOder.fulfilled, (state, action) => {
        const update = state.allOder.map((oder) => {
          if (oder.id === action.payload.oder.id) {
            return action.payload.oder;
          }
          return oder;
        });
        state.allOder = update;
      })
      .addCase(updateCompleteOder.fulfilled, (state, action) => {
        const update = state.allOder.map((oder) => {
          if (oder.id === action.payload.oder.id) {
            return action.payload.oder;
          }
          return oder;
        });
        state.allOder = update;
      });
  },
});

export const { resetOder } = oderSlice.actions;
export default oderSlice.reducer;
