import React from 'react';
import LogoutButton from './LogoutButton';

function Header({ onLogout }) {
return (
    <header className="header grid place-items-center">
        <img src="/sps_logo.svg" alt="SPS Logo" className='w-8 flex'/>
        <h1 className='"w-64 flex-1 text-xl font-bold text-left title'>SPS Health Services</h1>
        <LogoutButton className="w-14 flex-1" onLogout={onLogout} />
    </header>
);
}

export default Header