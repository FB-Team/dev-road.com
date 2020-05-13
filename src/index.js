import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.js'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
/*
TODO: 1) СТИЛИЗАЦИЯ ОКНА И ПЛИТОЧЕК +-
TODO: 2) РЕФАКТОРИНГ РЕНДЕРИНГА ПЛИТОЧЕК (СОЗДАНИЕ ЕДИНОГО КОМПОНЕНТА СОЗДАЮЩЕГО ОСТАЛЬНЫЕ ПЛИТОЧКИ ПО НЕОБХОДИМОСТИ) +-
TODO: 3) ИЗОБРАЖЕНИЯ ДЛЯ TILE -
 */
