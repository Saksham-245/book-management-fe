import {apis} from '../apis/Api';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const login = async (dispatch, loginPayload) => {
  try {
    dispatch({type: 'REQUEST_LOGIN'});
    const response = await apis.login(JSON.stringify(loginPayload));
    const data = response.data;

    if (data?.user) {
      dispatch({type: 'LOGIN_SUCCESS', payload: data});
      localStorage.setItem('currentUser', JSON.stringify(data.user));
      return data;
    }
    dispatch({type: 'LOGIN_ERROR', error: data.errors[0]});
    return;
  } catch (error) {
    dispatch({type: 'LOGIN_ERROR', error: error});
    return error;
  }
};

export const logout = async (dispatch) => {
  dispatch({type: LOGOUT});
  localStorage.removeItem('currentUser');
};
