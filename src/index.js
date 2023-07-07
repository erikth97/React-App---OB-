import React from 'react';
import ReactDOM from 'react-dom'

// Añadimos Bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// !Importante los estilos propios deben de ir debajo de bootstrap
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';
import AppRoutingFinal from './AppRoutingFinal';

ReactDOM.render(
  <React.StrictMode>
   {/* <App /> */}
   {/*<AppRoutingOne></AppRoutingOne>*/}
   <AppRoutingFinal/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
