import React from 'react';
import {useAuthState} from '../context/context';

const Dashboard = () => {
  const user = useAuthState();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user?.fullName}</p>
    </div>
  );
};

export default Dashboard;
