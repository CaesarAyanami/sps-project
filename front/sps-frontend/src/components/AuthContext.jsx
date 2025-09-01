// AuthContext.jsx
import { createContext } from 'react';
import { useAuthStorage } from '../hooks/UseAuthStorage';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const auth = useAuthStorage();
    return (
        <AuthContext.Provider value={auth}>
        {children}
        </AuthContext.Provider>
    );
}
