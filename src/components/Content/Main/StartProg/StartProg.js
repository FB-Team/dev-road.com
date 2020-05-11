import React from 'react'
import Tile from '../Tile/Tile.js'
import { Link } from 'react-router-dom'

class StartProg extends React.Component {
  render () {
    return (
      <div id="Main" className="horizontal-flex">
        <Link to={'/system-prog'}><Tile proftitle='Системное программироваиние' profdesc='Связующее звено между аппаратурой и прикладным програмным обеспечением.' profimg='path'/></Link>
        <Link to={'/application-prog'}><Tile proftitle='Прикладное программирование' profdesc='Область программирования, нацеленная, в основном, на автоматизацию процессов которая расчитана конкретно на конечного пользователя.' profimg='path'/></Link>
        <Link to={'/web-prog'}><Tile proftitle='Веб программирование' profdesc='Написание сайтов и веб приложений.' profimg='path'/></Link>
      </div>
    )
  }
}
export default StartProg
