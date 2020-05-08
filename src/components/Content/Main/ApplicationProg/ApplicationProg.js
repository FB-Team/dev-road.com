import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import Tile from './Tile/Tile.js'

class ApplicationProg extends React.Component {
  render () {
    return (
        <div id="ApplicationProg">
          <Tile proftitle="Игры" profdesc="Популярное и высокооплачеваемое направлением в IT индустрии"/>
          <Tile proftitle="Десктопная разработка" profdesc="Довольно востребованное направление, имеет отличный порог входа"/>
          <Tile proftitle="Мобильная разработка" profdesc="Отличается высокой универсальностю и стандартизированностью, отличный порог входа"/>
        </div>
    )
  }
}
export default ApplicationProg
