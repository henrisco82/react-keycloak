import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-oidc-context';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

const oidcConfig = {
  authority: 'http://localhost:8080/realms/demo',
  client_id: 'secured-app',
  redirect_uri: 'http://localhost:3000',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider {...oidcConfig} onSigninCallback={onSigninCallback}>
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
    <CssBaseline />
    <App />
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
