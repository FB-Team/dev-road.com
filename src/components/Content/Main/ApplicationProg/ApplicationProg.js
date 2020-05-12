import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import NavTile from '../NavTile/NavTile.js'

class ApplicationProg extends React.Component {
  render () {
    return (
        <Router id="ApplicationProg">
          <NavTile to='/application-prog/games' proftitle="Игры" profdesc="Популярное и высокооплачеваемое направлением в IT индустрии"/>
          <NavTile to='/application-prog/desktop' proftitle="Десктопная разработка" profdesc="Довольно востребованное направление, имеет отличный порог входа"/>
          <NavTile to='/application-prog/mobile' proftitle="Мобильная разработка" profdesc="Отличается высокой универсальностю и стандартизированностью, отличный порог входа"/>

          <Switch>
            <Route path='/application-prog/games'>application-prog/games</Route>
            <Route path='/application-prog/desktop'>application-prog/desktop</Route>
            <Route path='/application-prog/mobile'>application-prog/mobile</Route>
          </Switch>
        </Router>
    )
  }
}
export default ApplicationProg
