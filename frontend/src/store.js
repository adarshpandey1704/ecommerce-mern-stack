import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userRegisterReducer, userLoginReducer } from './reducers/userReducer';

const reducer = combineReducers({
  userRegisterReducer: userRegisterReducer,
  userLoginReducer: userLoginReducer
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
