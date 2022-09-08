import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Box, IconButton, Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({onSidebarOpen}) => {
  return (
    <div>
      <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          left: 0,
          px: 2,
        }}
      >
        <IconButton
          onClick={onSidebarOpen}
          sx={{
            display: {
              xs: 'inline-flex',
            },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <Box sx={{flexGrow: 1}} />
        <Avatar
          sx={{
            height: 40,
            width: 40,
            ml: 1,
          }}
          src="/static/images/avatars/avatar_1.png"
        >
        </Avatar>
      </Toolbar>
    </div>
  );
};

Navbar.propTypes = {
  onSidebarOpen: PropTypes.func.isRequired,
};

export default Navbar;
