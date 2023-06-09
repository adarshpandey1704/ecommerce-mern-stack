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

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST_STARTED:
      return { loading: true };
    case PRODUCT_REQUEST_SUCCESS:
      return { loading: false, productList: action.payload };
    case PRODUCT_REQUEST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const SaveProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST_STARTED:
      return { loading: true };
    case ADD_PRODUCT_REQUEST_SUCCESS:
      return { loading: false, saveProductData: action.payload };
    case ADD_PRODUCT_REQUEST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const SingleProductDetails = (state = {}, action) => {
  switch (action.type) {
    case SINGLE_PRODUCT_DETAILS_STARTED:
      return { loading: true };
    case SINGLE_PRODUCT_DETAILS_SUCCESS:
      return { loading: false, singleProductData: action.payload };
    case SINGLE_PRODUCT_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
