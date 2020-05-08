import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import Tile from '../Tile/Tile.js'

class ApplicationProg extends React.Component {
  render () {
    return (
        <Router id="ApplicationProg">
          <Link to={'/application-prog/games'}><Tile proftitle="Игры" profdesc="Популярное и высокооплачеваемое направлением в IT индустрии"/></Link>
          <Link to={'/application-prog/desktop'}><Tile proftitle="Десктопная разработка" profdesc="Довольно востребованное направление, имеет отличный порог входа"/></Link>
          <Link to={'/application-prog/mobile'}><Tile proftitle="Мобильная разработка" profdesc="Отличается высокой универсальностю и стандартизированностью, отличный порог входа"/></Link>

          <Switch>
            <Route path={'/application-prog/games'}>application-prog/games</Route>
            <Route path={'/application-prog/desktop'}>application-prog/desktop</Route>
            <Route path={'/application-prog/mobile'}>application-prog/mobile</Route>
          </Switch>
        </Router>
    )
  }
}
export default ApplicationProg
