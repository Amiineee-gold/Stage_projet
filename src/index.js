import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App';

import { store } from './componants/Home/learners/Store';
import { Provider } from 'react-redux';

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Report web vitals
