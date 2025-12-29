import React from 'react';
import { useAuth } from 'react-oidc-context';
import Header from './Header';

const Layout = ({ children }) => {
    const auth = useAuth();

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
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;
