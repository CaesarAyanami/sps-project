/*FUNCIONALIDADES*/
import { Routes, Route, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute";

/*VISTAS*/
const Login = lazy(() => import("../views/Login"));
const Home = lazy(() => import("../views/Home"));
const Archive = lazy(() => import("../views/Archive"));

function AppRouter() {
return (
    <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/home" element={<Home />} />
                <Route path="/archive" element={<Archive />} />
            </Route>
            <Route path="*" element={<div>404: Página no encontrada</div>} />
        </Routes>
    </Suspense>
);
}

export default AppRouter;
