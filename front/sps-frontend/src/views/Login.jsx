import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './viewStyles.css'
import '../components/Components.css'


function Login({ onLogin }) {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '123') {
        console.log('Login exitoso!');
        onLogin();
        navigate('/home'); 
    } 
    else {
        console.log('Credenciales incorrectas');
        alert('Credenciales incorrectas');
    }
};

return (
    <div className='body-login'>
        <div className="login-container">
        <h2 className='login-title'>Iniciar Sesión</h2>
        <form className='form-container' onSubmit={handleLogin}>
            <div>
                <label htmlFor="username">
                    <input type="text" id="username" value={username} placeholder='Usuario' onChange={(e) => setUsername(e.target.value)} />
                </label>
            </div>
            <div>
                <label htmlFor="password">
                    <input type="password" id="password" value={password} placeholder='Contraseña' onChange={(e) => setPassword(e.target.value)} />
                </label> 
            </div>
            <button type="submit" className='button-submit px-4 py-2 bg-blue-600 text-white rounded mt-4'>Entrar</button>
        </form>
        </div>
    </div>
);
}

export { Login };