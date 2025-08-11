import React from 'react';

function LogoutButton({ onLogout }) {
return (
    <button className='button-logout text-center px-4 py-2 bg-red-600 text-white rounded' onClick={onLogout}>
        <span className='text-logout'>Cerrar Sesión</span>
    </button>
);
}

function Header({ onLogout }) {
return (
    <header className="header grid place-items-center">
        <h1 className='w-64 flex-1 ... title'>SPS Health Services</h1>
        <LogoutButton className="w-14 flex-1 ..." onLogout={onLogout} />
    </header>
);
}

export { Header, LogoutButton };