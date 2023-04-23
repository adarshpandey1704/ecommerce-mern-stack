import axios from 'axios';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT
} from '../constants/userContants';

// action creators returns an action with the required payload.

// REGISTER

export const register = (name, email, password, role) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    });
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      }
    };
    const { data } = await axios.post(
      `http://localhost:8000/api/users/register`,
      { name, email, password, role },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILURE,
      payload: error
    });
    console.log('error', error);
  }
};

// LOGIN

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    });
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      }
    };
    const { data } = await axios.post(
      `http://localhost:8000/api/users/login`,
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    });
    localStorage.setItem('loginInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: error
    });
    console.log('error', error);
  }
};

// lOGOUT

export const logout = () => async (dispatch) => {
  localStorage.removeItem('loginInfo');
  dispatch({
    type: USER_LOGOUT
  });
};
