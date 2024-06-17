
import {  Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
let user = localStorage.getItem('user') ? true : false;
return user ? (<>
{children}
</>):<Navigate to="/login" />;

}

export default ProtectedRoutes
