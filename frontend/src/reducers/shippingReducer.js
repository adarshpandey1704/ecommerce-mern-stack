import {
  SHIPPING_DETAILS_STARTED,
  SHIPPING_DETAILS_SUCCESS,
  SHIPPING_DETAILS_FAILURE,
  USER_SHIPPING_DETAILS_LIST_STARTED,
  USER_SHIPPING_DETAILS_LIST_SUCCESS,
  USER_SHIPPING_DETAILS_LIST_FAILURE
} from '../constants/shippingContants';

export const shippingDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case SHIPPING_DETAILS_STARTED:
      return { loading: true };
    case SHIPPING_DETAILS_SUCCESS:
      return { loading: false, shippingDetails: action.payload };
    case SHIPPING_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userShippingDetailsListReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SHIPPING_DETAILS_LIST_STARTED:
      return { loading: true };
    case USER_SHIPPING_DETAILS_LIST_SUCCESS:
      return { loading: false, shippingDetailsList: action.payload };
    case USER_SHIPPING_DETAILS_LIST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
