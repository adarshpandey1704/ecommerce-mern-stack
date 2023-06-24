import {
  SHIPPING_DETAILS_STARTED,
  SHIPPING_DETAILS_SUCCESS,
  SHIPPING_DETAILS_FAILURE
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
