import React from 'react';
import PropTypes from 'prop-types';
import {Box, Divider, Drawer, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {Home} from '@mui/icons-material';

const Sidebar = ({open, onClose}) => {
  // const items = [
  //   {
  //     path: '/',
  //     name: 'Home',
  //     icon: (<Home fontSize={'small'} />),
  //   },
  // ];
  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        }}
      >
        <div>
          <Box sx={{px: 2}}>
            <Link to={'/dashboard'}>
              <Typography variant={'h3'}>Books Management</Typography>
            </Link>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3,
          }}
        />
        <Box sx={{flexGrow: 1}}>
        </Box>
      </Box>
    </>
  );
  return (
    <div>
      <Drawer
        anchor={'left'}
        onClose={onClose}
        open={open}
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
          },
        }}
        sx={{zIndex: (theme) => theme.zIndex.appBar + 100}}
        variant="temporary"
      >
        {content}
      </Drawer>
    </div>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
