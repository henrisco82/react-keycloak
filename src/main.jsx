import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-oidc-context';
import App from './App.jsx';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const onSigninCallback = () => {
  // Remove query string parameters from URL
  const url = new URL(window.location.href);
  url.search = "";
  window.history.replaceState({}, "", url);
};

// OAuth 2.0 / OIDC Configuration
// Values are loaded from .env file - copy .env.example to .env to customize
const oidcConfig = {
  authority: import.meta.env.VITE_OIDC_AUTHORITY || 'http://localhost:9000',
  client_id: import.meta.env.VITE_OIDC_CLIENT_ID || 'client',
  redirect_uri: import.meta.env.VITE_OIDC_REDIRECT_URI || 'http://localhost:3000',
  post_logout_redirect_uri: import.meta.env.VITE_OIDC_POST_LOGOUT_REDIRECT_URI || 'http://localhost:3000',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig} onSigninCallback={onSigninCallback}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <App />
    </AuthProvider>
  </React.StrictMode>
);