import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles.css'; // Assuming you have a styles.css file for global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);