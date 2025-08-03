import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from "react-router"
/*import './App.css'*/
import './components/Components.css'
import {Nav} from './components/Nav'
import {Router} from './Router/AppRouter.jsx'

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


export default App
*/

function Menu(){
  return(
    <div className='menu'>
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
    </div>
  )
}
export {Menu}

function Header(){
  return(
    <div className='header'>
      <div className='header-element'>
        <h1 className='title'>SPS</h1>
      </div>
      <div className='header-element'>
        <p>Este es un texto</p>
      </div>
    </div>
    )
}
export {Header}