import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.js'
import * as serviceWorker from './serviceWorker'
import {Provider} from 'react-redux'
import store from './Redux/mainRedux.js'
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
/*
TODO: 1) JAVA +
TODO: 2) ИСПРАВИТЬ СПИСКИ
TODO: 3) ПОФИКСИТЬ РЕАКТ БАГ
TODO: 4) НАЧАТЬ ИГРЫ
 */
