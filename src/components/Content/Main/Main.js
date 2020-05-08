import React from 'react'
import './Main.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import SystemProg from './SystemProg/SystemProg.js'
import ApplicationProg from './ApplicationProg/ApplicationProg.js'
import StartProg from './StartProg.js'
import WebProg from './WebProg/WebProg.js'

class Main extends React.Component {
  render () {
    return (
      <Router>
          <Route exact path={'/'} component={StartProg}/>
          <Route path={'/system-prog'} component={SystemProg}/>
          <Route path={'/application-prog'} component={ApplicationProg}/>
          <Route path={'/web-prog'} component={WebProg}/>

      </Router>
    )
  }
}
export default Main
