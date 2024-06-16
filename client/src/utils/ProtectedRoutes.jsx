import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
let user = useSelector((state) => state.auth.user);
return user ? <Outlet /> :<Navigate to="/login" />;

}

export default ProtectedRoutes
