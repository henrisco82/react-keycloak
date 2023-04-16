import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { GlobalStyles } from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
  };


const Header = () => {
  return (
    <>
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
    <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Secured App
          </Typography>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="#"
              sx={rightLink}
            >
              {'Log In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="#"
              sx={{ ...rightLink }}
            >
              {'Log Out'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      </>
  )
}

export default Header