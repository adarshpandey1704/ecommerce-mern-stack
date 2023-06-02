import axios from 'axios';
import {
  PRODUCT_REQUEST_STARTED,
  PRODUCT_REQUEST_SUCCESS,
  PRODUCT_REQUEST_FAILURE,
  ADD_PRODUCT_REQUEST_STARTED,
  ADD_PRODUCT_REQUEST_SUCCESS,
  ADD_PRODUCT_REQUEST_FAILURE,
  SINGLE_PRODUCT_DETAILS_STARTED,
  SINGLE_PRODUCT_DETAILS_SUCCESS,
  SINGLE_PRODUCT_DETAILS_FAILURE
} from '../constants/productConstants';

export const allProducts = (token) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_REQUEST_STARTED
    });
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    const { data } = await axios.get(`http://localhost:8000/api/product/getAll`, config);
    console.log('data', data);
    dispatch({
      type: PRODUCT_REQUEST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_REQUEST_FAILURE,
      payload: error
    });
  }
};

// ADDING THE PRODCUT ACTION CREATOR

export const saveProduct = (productFormData, token, userId) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_PRODUCT_REQUEST_STARTED
    });
    const config = {
      headers: {
        Accept: 'application/json',
        ContentType: 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    };
    const { data } = await axios.post(
      `http://localhost:8000/api/product/create-product/${userId}`,
      productFormData,
      config
    );

    dispatch({
      type: ADD_PRODUCT_REQUEST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCT_REQUEST_FAILURE,
      payload: error
    });
    console.log('error', error);
  }
};

// getting single product details action

export const singleProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SINGLE_PRODUCT_DETAILS_STARTED
    });
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      }
    };
    const { data } = await axios.get(`http://localhost:8000/api/product/${id}`, config);
    console.log('data', data);
    dispatch({
      type: SINGLE_PRODUCT_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: SINGLE_PRODUCT_DETAILS_FAILURE,
      payload: error
    });
  }
};
