import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ backgroundColor: "#3b3131" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, 
              marginRight: '0px', paddingRight: '0px' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="div" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            width: '100%'
          }}>
            <img src="./images/forbes-logo.png" height={40} />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
