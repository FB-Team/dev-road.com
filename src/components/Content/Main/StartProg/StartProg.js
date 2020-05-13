import React from 'react'
import NavTile from '../NavTile/NavTile.js'

class StartProg extends React.Component {
  render () {
    return (
      <div id="Main" className="horizontal-flex">
        <NavTile to={'/system-prog'} proftitle='Системное программироваиние' profdesc='Связующее звено между аппаратурой и прикладным програмным обеспечением.' profimg='path'/>
        <NavTile to={'/application-prog'} proftitle='Прикладное программирование' profdesc='Область программирования, нацеленная, в основном, на автоматизацию процессов которая расчитана конкретно на конечного пользователя.' profimg='path'/>
        <NavTile to={'/web-prog'} proftitle='Сетевое (Веб) программирование' profdesc='Написание сайтов и веб приложений.' profimg='path'/>
      </div>
    )
  }
}
export default StartProg
