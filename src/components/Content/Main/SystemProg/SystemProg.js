import React from 'react'

import NavTile from './../NavTile/NavTile.js'


class SystemProg extends React.Component {
  render () {
    return (
      <div className="SystemProg horizontal-flex">
        <NavTile to={'/system-prog/os'} proftitle='Операционная система' profdesc='' profimg='path'/>
        <NavTile to={'/system-prog/additional-software'} proftitle='Дополнительное системное ПО' profdesc='Description' profimg='path'/>
        <NavTile to={'/system-prog/firmware'} proftitle='Встроенное программное обеспесчение' profdesc='Description' profimg='path'/>
      </div>
  )
  }
}
export default SystemProg
