import { useNavigate, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Menu from './components/Menu'

function Layout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("Authenticated");
        window.location.href = "/";
    };

    return (
        <>
        <Header onLogout={handleLogout} />
        <Menu />
        <Outlet />
        </>
    );
}

export default Layout;
