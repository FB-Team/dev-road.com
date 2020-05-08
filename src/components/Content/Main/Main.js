import React from 'react'
import './Main.css'
import './Tile/Tile.js'
import ''
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Main extends React.Component {
  render () {
    return (
      <Router>
          // <div id="Main">
          <Link to={'/system-prog'}><Tile proftitle='Title' profdesc='Description' profimg='path'/></Link>
          <Link to={'/application-prog'}><Tile proftitle='Title' profdesc='Description' profimg='path'/></Link>
          <Link to={'/web-prog'}><Tile proftitle='Title' profdesc='Description' profimg='path'/></Link>

          <Switch className="horizontal-flex">
            <Route path={'/system-prog'} component={<SystemProg />}/>
            <Route path={'/application-prog'} component={<ApplicationProg />}/>
            <Route path={'/web-prog'} component={<WebProg />}/>
          </Switch>
          // </div>
      </Router>
    )
  }
}
export default Main
