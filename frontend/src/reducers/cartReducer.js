/* eslint-disable no-case-declarations */
import { ADD_TO_CART } from '../constants/CartContants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existItems = state.cartItems.find((x) => x.id === item.id);
      if (existItems) {
        return {
          ...state,
          cartItems: state.cartItems.map((y) => (y.id === existItems.id ? item : y))
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        };
      }
    default:
      return state;
  }
};
