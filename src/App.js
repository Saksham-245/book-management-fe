/* eslint-disable require-jsdoc */
import React from 'react';
import Login from './pages/Login';
import {Route, Routes} from 'react-router-dom';
import SignUp from './pages/SignUp';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AuthProvider} from './context/context';


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/signup'} element={<SignUp />} />
      </Routes>
      <ToastContainer position="bottom-right"/>
    </AuthProvider>
  );
}

export default App;
