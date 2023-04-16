import React from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    switch(auth.activeNavigator){
        case 'signinSilent':
        return <div>Signing in silently...</div>;
        case 'signoutRedirect':
        return <div>Signing out...</div>;
        default:
        break;
    }

    if(auth.isLoading) {
        return <div>Loading...</div>;
    }

    if(auth.error){
        return <div>Ooops... {auth.error.message}</div>;
    }
  return (
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Secured App
          </Typography>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {auth.isAuthenticated ? (
            <>
                <Button variant="contained" onClick={() => navigate('/')}>HOME</Button>
                <Button variant="contained" onClick={() => navigate('/hidden') }>HIDDEN</Button>
                <Button variant="contained" onClick={() => auth.removeUser()}>LOG OUT </Button>
            </>
            ) : (
            <Button variant="contained" onClick={() => auth.signinRedirect()}>LOG IN </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
  )
}

export default Header