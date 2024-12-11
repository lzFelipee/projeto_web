import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // Verifique se está importando o App.jsx corretamente
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>  {/* Envolva a aplicação com BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
