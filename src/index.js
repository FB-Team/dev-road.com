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
/* TODO: 1) ИСПРАВИТЬ КОНПКУ ПЕРЕХОДА НАЗАД (MAIN.JS)
2) CSS МОДУЛИ
 3) СТИЛИЗАЦИЯ ОКНА И ПЛИТОЧЕК
 4) РЕФАКТОРИНГ РЕНДЕРИНГА ПЛИТОЧЕК (СОЗДАНИЕ ЕДИНОГО КОМПОНЕНТА СОЗДАЮЩЕГО ОСТАЛЬНЫЕ ПЛИТОЧКИ ПО НЕОБХОДИМОСТИ)
 */
