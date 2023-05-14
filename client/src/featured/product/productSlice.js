import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
  product: [],
  bestSeller: [],
  bundle: [],
  searchProduct: [],
  comment: [],
  productId: [],
  totalProduct: 0,
  totalComment: 0,
  isLoading: false,
  isSuccess: false,
  isError: "",
  message: "",
};

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async (page, thunkAPI) => {
    try {
      return await productService.getAllProduct(page);
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

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (page, thunkAPI) => {
    try {
      return await productService.getProductById(page);
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

export const getAllProductbySlug = createAsyncThunk(
  "product/getAllProductbySlug",
  async (slug, thunkAPI) => {
    try {
      return await productService.getAllProductbySlug(slug);
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

export const getProductBestSeller = createAsyncThunk(
  "product/getProductBestSeller",
  async (thunkAPI) => {
    try {
      return await productService.getProductBestSeller();
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

export const getProductBundle = createAsyncThunk(
  "product/getProductBundle",
  async (thunkAPI) => {
    try {
      return await productService.getProductBundle();
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

export const getProductSearch = createAsyncThunk(
  "product/getProductSearch",
  async (data, thunkAPI) => {
    try {
      return await productService.getProductSearch(data);
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

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data, thunkAPI) => {
    try {
      return await productService.createProduct(data);
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

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (productId, thunkAPI) => {
    try {
      return await productService.deleteProduct(productId);
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

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (data, thunkAPI) => {
    try {
      return await productService.updateProduct(data);
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

export const createComment = createAsyncThunk(
  "product/createComment",
  async (data, thunkAPI) => {
    try {
      return await productService.createComment(data);
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

export const deleteCommentProduct = createAsyncThunk(
  "product/deleteComment",
  async (data, thunkAPI) => {
    try {
      return await productService.deleteComment(data);
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

export const getAllCommentByProduct = createAsyncThunk(
  "product/getAllCommentByProduct",
  async (data, thunkAPI) => {
    try {
      return await productService.getAllCommentByProduct(data);
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

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.product = action.payload.product;
        state.totalProduct = action.payload.count;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.productId = action.payload.product;
      })
      .addCase(getAllProductbySlug.fulfilled, (state, action) => {
        state.product = action.payload.product;
        state.totalProduct = action.payload.count;
      })
      .addCase(getProductBestSeller.fulfilled, (state, action) => {
        state.bestSeller = action.payload.product;
      })
      .addCase(getProductBundle.fulfilled, (state, action) => {
        state.bundle = action.payload.product;
      })
      .addCase(getProductSearch.fulfilled, (state, action) => {
        state.product = action.payload.product;
        state.totalProduct = action.payload.count;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.product.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const products = state.product.filter(
          (product) => product.id !== action.payload.product.id
        );
        state.product = products;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const products = state.product.map((product) => {
          if (product.id === action.payload.product.id) {
            return action.payload.product;
          }
          return product;
        });
        state.product = products;
      })
      .addCase(createComment.fulfilled, (state, action) => {
        state.comment.unshift(action.payload.review);
        state.totalComment++;
      })
      .addCase(deleteCommentProduct.fulfilled, (state, action) => {
        const comment = state.comment.filter(
          (comment) => comment.id !== +action.payload.reviewId
        );
        state.comment = comment;
        state.totalComment--;
      })
      .addCase(getAllCommentByProduct.fulfilled, (state, action) => {
        state.comment = action.payload.review;
        state.totalComment = action.payload.count;
      });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
