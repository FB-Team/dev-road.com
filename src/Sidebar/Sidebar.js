import React from 'react'
import Sidetile from './Sidetile/Sidetile.js'
import './Sidebar.css'
class Sidebar extends React.Component{
  render(){
    return (
      <div id="Sidebar">
        <Sidetile description="Главная"/>
        <Sidetile description="Веб разработка"/>
        <Sidetile description="Десктопная разработка"/>
        <Sidetile description="Компьютерная безопасность"/>
        <Sidetile description="Системное программирование"/>
      </div>
    )

  }
}
export default Sidebar
