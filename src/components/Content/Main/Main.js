import React from 'react'
import './Main.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import SystemProg from './SystemProg/SystemProg.js'
import ApplicationProg from './ApplicationProg/ApplicationProg.js'
import StartProg from './StartProg/StartProg.js'
import WebProg from './WebProg/WebProg.js'
//import {createBrowserHistory} from 'history'
class Main extends React.Component {
  back(e) {
    e.stopPropagation();
    window.history.back();
  };
  render () {
    return (
      <Router history={this.history}>
          <input type="button" onClick={this.back} value="Назад"></input>
          <Route exact path={'/'} component={StartProg}/>
          <Route path={'/system-prog'} component={SystemProg}/>
          <Route path={'/application-prog'} component={ApplicationProg}/>
          <Route path={'/web-prog'} component={WebProg}/>
      </Router>
    )
  }
}
export default Main
