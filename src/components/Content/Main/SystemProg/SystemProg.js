import { Link } from 'react-router-dom'
import React from 'react'
import Tile from './../Tile/Tile.js'

class SystemProj extends React.Component {
  render () {
    return (
      <div className="SystemProg">
        <Link to={'/system-prog-os'}><Tile proftitle='Операционная система' profdesc='' profimg='path'/></Link>
        <Link to={'/system-prog-additional-software'}><Tile proftitle='Дополнительное системное ПО' profdesc='Description' profimg='path'/></Link>
        <Link to={'/system-prog-firmware'}><Tile proftitle='Встроенное программное обеспесчение' profdesc='Description' profimg='path'/></Link>
      </div>
  )
  }
}
export default SystemProj
