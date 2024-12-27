import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }} >
      <AppBar position="static" sx={{ backgroundColor: "#3b3131" }}>
        <Toolbar>
         
          <Typography component="div" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            width: '100%',
            zIndex: 2
          }}>
            <img src="./images/forbes-logo.png" height={40} style={{marginLeft:'10px'}} />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
