import React from 'react';
import { useAuth } from 'react-oidc-context';
import Header from './Header.jsx';
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
        <>
            <Header />
            {children}
        </>
    );
};

export default Layout;
