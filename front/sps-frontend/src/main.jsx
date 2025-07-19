import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*import './index.css'*/
import './Components.css'
import Test from './App.jsx'
import {Header} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Test />
  </StrictMode>,
)

createRoot(document.getElementById('header')).render(
  <StrictMode>
    <Header />
  </StrictMode>
)