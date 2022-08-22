import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'Products',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    productsAdded: (products, action) => {
      products.list.push(...products);
    },
  },
});

export const { productsAdded } = productSlice.actions;
export default productSlice.reducer;
