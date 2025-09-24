import { useState, useEffect, useCallback } from 'react';

export function useAuthStorage(key = 'Authenticated') {
    const [value, setValue] = useState(() => {
        try {
        return localStorage.getItem(key) === 'true';
        } catch {
        return false;
        }
    });

    useEffect(() => {
        try {
        if (value) localStorage.setItem(key, 'true');
        else localStorage.removeItem(key);
        } catch {
        // opcional: reportar error
        }
    }, [value, key]);

    const login = useCallback(() => setValue(true), []);
    const logout = useCallback(() => setValue(false), []);

    return { Authenticated: value, login, logout };
}