import React from 'react';
import salida from '../assets/salida.svg'

function LogoutButton({ onLogout }) {
return (
    <img src={salida} alt="Salir" className='button-logout text-center px-2 py-1' onClick={onLogout}/>
    /* <button className='button-logout text-center px-4 py-2 bg-red-600 text-white rounded' onClick={onLogout}>
        <span className='text-logout'>Cerrar Sesión</span>
    </button>*/
);
}

export default LogoutButton