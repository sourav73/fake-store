import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addedToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const itemInCart = state.cart.find(
        (item) => item.product.id === product.id
      );
      if (itemInCart) {
        itemInCart.quantity += quantity;
      } else state.cart.push(action.payload);
    }
  }
});

export const { addedToCart } = cartSlice.actions;
export default cartSlice.reducer;
