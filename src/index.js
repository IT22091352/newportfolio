import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Import App.css after index.css if you want to use it
import './App.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

