import React from 'react'
import Tile from './Tile/Tile.js'
import { Link } from 'react-router-dom'

class StartProg extends React.Component {
  render () {
    return (
      <div id="Main" className="horizontal-flex">
        <Link to={'/system-prog'}><Tile proftitle='Title' profdesc='Description' profimg='path'/></Link>
        <Link to={'/application-prog'}><Tile proftitle='Title' profdesc='Description' profimg='path'/></Link>
        <Link to={'/web-prog'}><Tile proftitle='Title' profdesc='Description' profimg='path'/></Link>
      </div>
    )
  }
}
export default StartProg
