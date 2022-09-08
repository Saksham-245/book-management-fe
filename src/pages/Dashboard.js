import React, {useState} from 'react';
// import {useAuthState} from '../context/context';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import {Box} from '@mui/material';

// eslint-disable-next-line react/prop-types
const Dashboard = ({children}) => {
  // const user = useAuthState();
  const [sideBar, setSidebar] = useState(false);
  return (
    <>
      <div>
        <Box sx={{
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          width: '100%',
        }}>
          {children}
        </Box>
      </div>
      <Navbar onSidebarOpen={() => setSidebar(true)} />
      <Sidebar onClose={() => setSidebar(false)} open={sideBar} />
    </>
  );
};

export default Dashboard;
