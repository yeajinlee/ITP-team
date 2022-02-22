import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';


ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <ScrollTop />
    <App />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
