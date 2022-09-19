import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './slices/products';
import cartReducer from './slices/cart';

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

export default reducer;
