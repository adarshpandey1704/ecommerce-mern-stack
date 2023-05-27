import axios from 'axios';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  ALL_USERS_DATA_REQUEST,
  ALL_USERS_DATA_SUCCESS,
  ALL_USERS_DATA_FAILURE
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

//all users data

export const allUsers = (token, selectData, searchData) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_USERS_DATA_REQUEST
    });
    console.log('token', token);
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    if (selectData >= 0 || searchData) {
      console.log('hellooo=>');
      const { data } = await axios.get(
        `http://localhost:8000/api/users/getAllUsers/?role=${selectData}&name=${searchData}`,
        config
      );
      dispatch({
        type: ALL_USERS_DATA_SUCCESS,
        payload: data
      });
    } else {
      const { data } = await axios.get(`http://localhost:8000/api/users/getAllUsers`, config);
      dispatch({
        type: ALL_USERS_DATA_SUCCESS,
        payload: data
      });
    }
  } catch (error) {
    dispatch({
      type: ALL_USERS_DATA_FAILURE,
      payload: error
    });
  }
};
