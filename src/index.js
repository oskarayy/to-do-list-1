import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContextProvider as Provider } from './store/context/theme-context';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <App />
  </Provider>
);
