import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
 const auth = useAuth();
 const navigate = useNavigate();

 const isLoggedIn = auth.user && auth.user.access_token;

 return isLoggedIn ? children : navigate('/');
};

export default PrivateRoute;