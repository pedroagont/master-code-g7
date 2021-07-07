// INDEX.JS
// El archivo index.js es el que importa las librerías de React
// También es el archivo que importa nuestro componente principal App.js y lo renderiza en el nodo id="root" de nuestro archivo HTML

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
