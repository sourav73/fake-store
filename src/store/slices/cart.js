import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addedToCart: (item, action) => {
      return;
    },
  },
});

export const { addedToCart } = cartSlice.actions;
export default cartSlice.reducer;
