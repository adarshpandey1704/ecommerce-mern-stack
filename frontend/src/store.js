import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userRegisterReducer, userLoginReducer, userListReducer } from './reducers/userReducer';
import { categoryReducer } from './reducers/categoryReducer';
import {
  productReducer,
  SaveProductReducer,
  SingleProductDetails
} from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import { shippingDetailsReducer, userShippingDetailsListReducer } from './reducers/shippingReducer';

const reducer = combineReducers({
  userRegisterReducer: userRegisterReducer,
  userLoginReducer: userLoginReducer,
  userListReducer: userListReducer,
  categoryReducer: categoryReducer,
  productReducer: productReducer,
  SaveProductReducer: SaveProductReducer,
  SingleProductDetails: SingleProductDetails,
  cartReducer: cartReducer,
  shippingDetailsReducer: shippingDetailsReducer,
  userShippingDetailsListReducer: userShippingDetailsListReducer
});

const dataFromLocalStorage = localStorage.getItem('loginInfo')
  ? JSON.parse(localStorage.getItem('loginInfo'))
  : null;

const cartItemFromStorage = localStorage?.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  userLoginReducer: {
    loginInfo: dataFromLocalStorage
  },
  cartReducer: { cartItems: cartItemFromStorage }
};

console.log('initialState', initialState);

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
