import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/styles.css';

import App from './App.tsx'
import DefaultPage from './DefaultPage.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import UserProvider from './contexts/UserProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <DefaultPage />
      <App />
    </UserProvider>
  </React.StrictMode>,
)
