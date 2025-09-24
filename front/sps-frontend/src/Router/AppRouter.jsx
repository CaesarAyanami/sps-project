// AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../Layout";     

const Login   = lazy(() => import("../views/Login"));
const Home    = lazy(() => import("../views/Home"));
const Archive = lazy(() => import("../views/Archive"));
const NotFound= lazy(() => import("../views/NotFound"));

function AppRouter() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
                <Route path="/home"    element={<Home />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="*"        element={<NotFound />} />
            </Route>
            </Route>
        </Routes>
        </Suspense>
    );
}

export default AppRouter;
