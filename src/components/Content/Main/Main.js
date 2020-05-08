import React from 'react'
import './Main.css'
import './Tile/Tile.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Main extends React.Component {
  render () {
    return (
      <Router>
          // <div id="Main">
          <Link to={'/system-prog'}><Tile proftitle='Title' profdesc='Description' profimg='path'/></Link>
          <Link to={'/application-prog'}><Tile proftitle='Title' profdesc='Description' profimg='path'/></Link>
          
          <Switch>
            <Route path={'/system-prog'} component={}/>
            <Route path={'/application-prog'} component={}/>
          </Switch>
          // </div>
      </Router>
    )
  }
}
export default Main
