import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'remixicon/fonts/remixicon.css'
import App from './App';
import DataProvider from './context/Dataprovider';
import { Provider } from 'react-redux';
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <DataProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </DataProvider>
  </Provider>
);
