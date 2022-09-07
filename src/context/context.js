import React, {useReducer} from 'react';
import {AuthReducer, initialState} from './reducer';

export const AuthContext = React.createContext(null);
export const AuthDispatchContext = React.createContext(null);


/**
 * This a Auth State Context
 * @return {context}
 */
export function useAuthState() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }

  return context;
}

/**
 * This a Auth Dispatch Context that
 * dispatches the auth state into the context
 * @return {context}
 */
export function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }

  return context;
}


// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
  const [, dispatch] = useReducer(AuthReducer, initialState);
  const userDetails = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <AuthContext.Provider value={userDetails}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};
