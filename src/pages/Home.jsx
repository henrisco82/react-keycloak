import React from 'react'
import Button from '@mui/material/Button';
import { useAuth } from 'react-oidc-context';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    return (
        <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            {auth.isAuthenticated ? (
                <>
                <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Hi {auth.user?.profile.preferred_username}!
              </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    You are logged in and can access the secured content.
                </Typography>
               </>
            ): (
                <>
                    <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    >
                        Welcome to the Secured App!
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        This is a secured application that uses OpenID Connect to authenticate,
                        it uses keycloak as the identity provider and react-oidc-context to manage
                        the authentication flow.
                    </Typography>
                </> 
            )
            }
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            {auth.isAuthenticated ? (
            <>
                <Button variant="contained" onClick={() => auth.signoutRedirect()}>Log out</Button>
                <Button variant="outlined" onClick={() => navigate('/hidden') }>Hidden Page</Button>
            </>
            ) : (
            <Button variant="contained" onClick={() => auth.signinRedirect()}>Login with keycloak </Button>
            )}
            </Stack>
          </Container>
        </Box>
        </main>
    )
}

export default Home