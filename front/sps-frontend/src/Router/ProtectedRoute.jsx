import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoute() {
    const location = useLocation();
    const isAuthenticated = localStorage.getItem("Authenticated") === "true";

    // Caso 1: No autenticado → redirigir al login
    if (!isAuthenticated) 
        {
            return <Navigate to="/" replace />;
        }
    // Caso 2: Autenticado pero en la ruta del login → limpiar localStorage
    if (isAuthenticated && location.pathname === "/") 
        {
            localStorage.removeItem("Authenticated");
            return <Navigate to="/" replace />;
        }
    return <Outlet/>;
    };

export default ProtectedRoute;