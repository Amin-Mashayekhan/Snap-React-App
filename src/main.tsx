import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/css/styles.css';
import 'react-toastify/dist/ReactToastify.min.css';

import App from './App.tsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import UserProvider from './contexts/UserProvider.tsx'
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer
      position="top-left"
      autoClose={8000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <UserProvider>
      <App />
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="d-flex">
            <div className="toast-body">
              Hello, world! This is a toast message.
            </div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" />
          </div>
        </div>
      </div>



    </UserProvider>
  </React.StrictMode>,
)
