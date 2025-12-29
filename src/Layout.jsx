import React from 'react';
import { useAuth } from 'react-oidc-context';
import { Box } from '@mui/material';
import Header from './Header.jsx';
import Footer from './components/Footer.jsx';
import Loading from './Loading.jsx';

const Layout = ({ children }) => {
    const auth = useAuth();

    switch(auth.activeNavigator){
        case 'signinRedirect':
            return <Loading message="Signing in..." />;
        case 'signoutRedirect':
            return <Loading message="Signing out..." />;
        default:
            break;
    }

    if(auth.isLoading) {
        return <Loading message="Loading..." />;
    }

    if(auth.error){
        return <div>Ooops... {auth.error.message}</div>;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}
        >
            <Header />
            <Box component="main" sx={{ flex: 1 }}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
