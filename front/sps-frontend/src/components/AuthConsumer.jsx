import { useContext } from 'react';
import { AuthContext } from '../components/AuthContext';
import AppRouter from '../router/AppRouter';
import { Login } from '../views/Login';

export function AuthConsumer() {
    const { isAuthenticated, login } = useContext(AuthContext);

    if (isAuthenticated) {
        return (
        <main className="flex-grow">
            <AppRouter />
        </main>
        );
    }
    return <Login onLogin={login} />;
}
