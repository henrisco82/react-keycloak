import { useAuth } from 'react-oidc-context';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
 const auth = useAuth();

 if (auth.isLoading) {
   return <div>Loading...</div>;
 }

 return auth.isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;