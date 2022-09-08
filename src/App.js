/* eslint-disable require-jsdoc */
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Login from './pages/Login';
import {useAuthState} from './context/context';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import {ToastContainer} from 'react-toastify';

function App() {
  const user= useAuthState();
  const navigate = useNavigate();

  const redirect = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };


  return (
    <div>
      <Routes>
        {
        !user ?
        <>
          <Route path={'/'} element={<Login/>} />
          <Route path={'/sigup'} element={<SignUp />} />
        </> : user?.isAdmin ?
            <>
              <Route path={'/dashboard'} element={<Dashboard />} />
            </> :
            <Route
              path={'/dashboard'}
              element={<h1>Welcome to user view</h1>}
            />
        }
        <Route path={'*'} element={<button onClick={redirect}>Home</button>} />
      </Routes>
      <ToastContainer position={'bottom-right'} />
    </div>
  );
}

export default App;
