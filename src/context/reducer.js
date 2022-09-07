import {REQUEST_LOGIN, LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR} from './actions';

const user = localStorage.getItem('currentUser') ?
JSON.parse(localStorage.getItem('currentUser')) : '';

export const initialState = {
  user: '' || user,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  if (action.type === REQUEST_LOGIN) {
    return {
      ...initialState,
      loading: true,
    };
  } else if (action.type === LOGIN_SUCCESS) {
    return {
      ...initialState,
      user: action.payload.user,
      loading: false,
    };
  } else if (action.type === LOGOUT) {
    return {
      ...initialState,
      user: '',
    };
  } else if (action.type === LOGIN_ERROR) {
    return {
      ...initialState,
      loading: false,
      errorMessage: action.error,
    };
  } else {
    throw new Error(`Unhandled action type: ${action.type}`);
  }
};
