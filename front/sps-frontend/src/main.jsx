import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './ErrorBoundary.jsx'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontró el elemento con id="root". Verifica tu index.html');
}

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);