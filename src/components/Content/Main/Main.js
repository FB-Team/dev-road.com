import React from 'react'
import './Main.css'
import Tile from './Tile/Tile.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SystemProg from './SystemProg/SystemProg.js'
import ApplicationProg from './ApplicationProg/ApplicationProg.js'
import WebProg from './WebProg/WebProg.js'

class Main extends React.Component {
  render () {
    return (
      <Router>
          <Route path="/" render={
            () => {
              return (
                <div id="Main" className="horizontal-flex">
                  <Link to={'/system-prog'}><Tile proftitle='Title' profdesc='Description' profimg='path'/></Link>
                  <Link to={'/application-prog'}><Tile proftitle='Title' profdesc='Description' profimg='path'/></Link>
                  <Link to={'/web-prog'}><Tile proftitle='Title' profdesc='Description' profimg='path'/></Link>
                </div>
          )
          }
          }/>

            <Route path={'/system-prog'} component={SystemProg}/>
            <Route path={'/application-prog'} component={ApplicationProg}/>
            <Route path={'/web-prog'} component={WebProg}/>

      </Router>
    )
  }
}
export default Main
