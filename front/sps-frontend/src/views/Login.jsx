import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './viewStyles.css'


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
                <label htmlFor="username">Usuario:</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>   
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Entrar</button>
        </form>
        </div>
    </div>
);
}

export { Login };