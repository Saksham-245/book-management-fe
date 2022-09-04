import {REQUEST_LOGIN, LOGIN_SUCCESS, LOGOUT, LOGIN_ERROR} from './actions';

const user = localStorage.getItem('currentUser') ?
JSON.parse(localStorage.getItem('currentUser')).user : '';

export const initialState = {
  userDetails: '' || user,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...initialState,
        loading: true,
      };
      break;
    case LOGIN_SUCCESS:
      return {
        ...initialState,
        user: action.payload.user,
        loading: false,
      };
      break;
    case LOGOUT:
      return {
        ...initialState,
        user: '',
      };

    case LOGIN_ERROR:
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
