import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/space-scutum-todo-list">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
