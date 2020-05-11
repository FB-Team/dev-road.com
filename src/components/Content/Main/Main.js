import React from 'react'
import './Main.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import SystemProg from './SystemProg/SystemProg.js'
import ApplicationProg from './ApplicationProg/ApplicationProg.js'
import StartProg from './StartProg/StartProg.js'
import WebProg from './WebProg/WebProg.js'
import {createBrowserHistory} from 'history'
class Main extends React.Component {
  constructor(props){
    super(props);
    this.history = createBrowserHistory();
  }
  render () {
    return (
      <div>
        {/*<input type="button" onClick={()=> this.history.back()} value="Назад"></input>*/}

      <Router history={this.history}>
          <Route exact path={'/'} component={StartProg}/>
          <Route path={'/system-prog'} component={SystemProg}/>
          <Route path={'/application-prog'} component={ApplicationProg}/>
          <Route path={'/web-prog'} component={WebProg}/>

      </Router>
      </div>
    )
  }
}
export default Main
