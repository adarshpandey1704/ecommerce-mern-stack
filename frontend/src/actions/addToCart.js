/* eslint-disable no-undef */
import { ADD_TO_CART } from '../constants/CartContants';
import axios from 'axios';
import store from '../store';

export const UserAddToCart = (productId, productQuantity) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:8000/api/product/${productId}`);
  console.log('productQuantityinAddTocart', productQuantity);
  dispatch({
    type: ADD_TO_CART,
    payload: {
      id: data._id,
      name: data.name,
      photo: data.photo,
      price: data.price,
      quantity: productQuantity,
      description: data.description,
      shipping: data.shipping
    }
  });
  const a = localStorage.setItem(
    'cartItems',
    JSON.stringify(store.getState().cartReducer.cartItems)
  );
  console.log('actionlocal', a);
};
