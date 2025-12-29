import { useAuth } from 'react-oidc-context';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading';

const PrivateRoute = ({ children }) => {
 const auth = useAuth();

 if (auth.isLoading) {
   return <Loading message="Checking authentication..." />;
 }

 return auth.isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;