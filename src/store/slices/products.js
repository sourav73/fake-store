import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { allProducts, limitedProduct, product } from '../../urls';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get(allProducts);
    return response.data;
  }
);

export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async (id) => {
    const response = await axios.get(product + id);
    return response.data;
  }
);

export const fetchFeaturedProducts = createAsyncThunk(
  'products/fetchFeaturedProducts',
  async (limit) => {
    const response = await axios.get(limitedProduct + limit);
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    singleProduct: {},
    featuredProducts: [],
    loading: false,
    lastFetch: null,
    error: null
  },
  extraReducers: (builder) => {
    // For all products
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
      state.lastFetch = Date.now();
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.list = [];
      state.error = action.error.message;
    });
    // For individual product
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.singleProduct = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.singleProduct = {};
      state.error = action.error.message;
    });
    // For featured/limited products
    builder.addCase(fetchFeaturedProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.featuredProducts = action.payload;
      state.error = null;
    });
    builder.addCase(fetchFeaturedProducts.rejected, (state, action) => {
      state.loading = false;
      state.featuredProducts = [];
      state.error = action.error.message;
    });
  },
  reducers: {
    // general reducers
    removeProduct: (product) => {
      product.singleProduct = {};
    }
  }
});

export const { productsAdded, removeProduct } = productSlice.actions;
export default productSlice.reducer;
