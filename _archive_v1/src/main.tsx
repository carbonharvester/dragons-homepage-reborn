import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { preloadCalendlyScript } from './utils/calendlyLoader.ts';

// Preload the Calendly script as soon as possible
preloadCalendlyScript().catch(error => {
  console.warn('Failed to preload Calendly script:', error);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
