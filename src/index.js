import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { DataLayer } from "./DataLayer"
import { StateProvider } from './DataLayer';
import reducer, { initialState } from "./reducer"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
    {/* <App /> */}
  </React.StrictMode>
);

