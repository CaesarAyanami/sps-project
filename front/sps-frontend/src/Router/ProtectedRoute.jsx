import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute () {
    const Authenticated = localStorage.getItem('Authenticated') === 'true';

    if (!Authenticated) 
        {
            return <Navigate to="/" replace />;
        }
    return <Outlet/>;
    };

export default ProtectedRoute;