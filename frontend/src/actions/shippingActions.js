import {
  SHIPPING_DETAILS_STARTED,
  SHIPPING_DETAILS_SUCCESS,
  SHIPPING_DETAILS_FAILURE,
  USER_SHIPPING_DETAILS_LIST_STARTED,
  USER_SHIPPING_DETAILS_LIST_SUCCESS,
  USER_SHIPPING_DETAILS_LIST_FAILURE
} from '../constants/shippingContants';
import axios from 'axios';

export const saveShippingDetails = (productFormData) => async (dispatch) => {
  try {
    console.log('productFormData', productFormData);
    dispatch({
      type: SHIPPING_DETAILS_STARTED
    });
    const config = {
      headers: {
        Accept: 'application/json',
        ContentType: 'multipart/form-data'
        // Authorization: `Bearer ${token}`
      }
    };
    const { data } = await axios.post(
      `http://localhost:8000/api/shipping/address`,
      productFormData,
      config
    );

    dispatch({
      type: SHIPPING_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: SHIPPING_DETAILS_FAILURE,
      payload: error
    });
    console.log('error', error);
  }
};

export const userShippingDetailsList = (user) => async (dispatch) => {
  console.log('userinShipping', user);
  try {
    dispatch({
      type: USER_SHIPPING_DETAILS_LIST_STARTED
    });
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      }
    };
    const { data } = await axios.post(
      `http://localhost:8000/api/shipping/useraddresses/`,
      { user },
      config
    );
    console.log('data', data);
    dispatch({
      type: USER_SHIPPING_DETAILS_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: USER_SHIPPING_DETAILS_LIST_FAILURE,
      payload: error
    });
  }
};
