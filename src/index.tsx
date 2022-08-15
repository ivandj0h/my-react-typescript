import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/** Font Awesome */
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';

/** Bootstrap */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
