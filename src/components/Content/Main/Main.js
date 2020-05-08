import React from 'react'
import './Main.css'
import Tile './Tile/Tile.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class Main extends React.Component {
  render () {
    return (
      <Router>
          <Route path="" render={
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
          <Switch>
            <Route path={'/system-prog'} component={SystemProg}/>
            <Route path={'/application-prog'} component={ApplicationProg}/>
            <Route path={'/web-prog'} component={WebProg}/>
          </Switch>
      </Router>
    )
  }
}
export default Main
