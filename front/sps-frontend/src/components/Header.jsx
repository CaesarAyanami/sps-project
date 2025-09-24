import React from 'react';
import { Link } from "react-router-dom"
import LogoutButton from './LogoutButton'

function Header({ onLogout }) {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-blue-400 shadow">
        <Link to="/home" className="flex items-center gap-4">
            <img src="/sps_logo.svg" alt="SPS Logo" className="w-8 h-8" />
            <h1 className="text-xl font-bold text-gray-800">SPS Health Services</h1>
        </Link>
        <LogoutButton className="w-14" onLogout={onLogout} />
        </header>
    );
}

export default Header;
