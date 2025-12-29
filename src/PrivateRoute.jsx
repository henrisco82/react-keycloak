import { useAuth } from 'react-oidc-context';
import { Navigate } from 'react-router-dom';
import Loading from './Loading.jsx';

const PrivateRoute = ({ children }) => {
 const auth = useAuth();

 if (auth.isLoading) {
   return <Loading message="Checking authentication..." />;
 }

 return auth.isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;