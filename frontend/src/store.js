import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userRegisterReducer, userLoginReducer, userListReducer } from './reducers/userReducer';
import { categoryReducer } from './reducers/categoryReducer';
import { productReducer, SaveProductReducer } from './reducers/productReducer';

const reducer = combineReducers({
  userRegisterReducer: userRegisterReducer,
  userLoginReducer: userLoginReducer,
  userListReducer: userListReducer,
  categoryReducer: categoryReducer,
  productReducer: productReducer,
  SaveProductReducer: SaveProductReducer
});

const dataFromLocalStorage = localStorage.getItem('loginInfo')
  ? JSON.parse(localStorage.getItem('loginInfo'))
  : null;

const initialState = {
  userLoginReducer: {
    loginInfo: dataFromLocalStorage
  }
};

console.log('initialState', initialState);

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
