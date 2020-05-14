import React from 'react'
import NavTile from '../NavTile/NavTile.js'

class WebProg extends React.Component {
  render () {
    return (
      <div id="WebProg" className="horizontal-flex">
        <NavTile to='' proftitle="Front-end" profdesc="Отличный порог входа, множество курсов и учебных материалов, большое количество вакантных мест"/>
        <NavTile to='' proftitle="Back-end" profdesc="Довольно востребованное направление, отличается высокой универсальностю, хотя порог вхождения может быть выше, чем у front-end разработчика"/>
      </div>
    )
  }
}
export default WebProg
