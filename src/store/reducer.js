import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './slices/products';
import cartReducer from './slices/cart';

const reducer = combineReducers({
  Products: productReducer,
  Cart: cartReducer,
});

export default reducer;
