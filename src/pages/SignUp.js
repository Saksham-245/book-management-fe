import React from 'react';
import {useAuthDispatch, useAuthState} from '../context/context';
import {logout} from '../context/actions';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  const user = useAuthState();

  const handleLogout = ()=> {
    logout(dispatch);
    navigate('/');
  };
  return (
    <div>
      <h1>SignUp</h1>
      <div>
        <h1>{user?.fullName}</h1>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default SignUp;
