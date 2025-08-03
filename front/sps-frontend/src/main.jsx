import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
/*import './index.css'*/
import './components/Components.css'
import {Header, Menu}  from './App.jsx'
import {ContainerLogin} from './login.jsx'

// Render del header
const headerElement = document.getElementById('header');
if (headerElement) {
  createRoot(headerElement).render(
    <StrictMode>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </StrictMode>
  );
}




const menuElement = document.getElementById('menu');
if (menuElement) {
  createRoot(headerElement).render(
    <StrictMode>
        <Menu />
    </StrictMode>
  );
}








// Render del login
const loginElement = document.getElementById('login');
if (loginElement) {
  createRoot(loginElement).render(
    <StrictMode>
      <ContainerLogin />
    </StrictMode>
  );
}

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
);