import React from 'react'
import s from './NavTile.module.css'
import Tile from './Tile/Tile.js'
import { Link } from 'react-router-dom'
class NavTile extends React.Component {
  render () {
    return (
      <Link to={this.props.to}>
        <Tile profdesc={this.props.profdesc} profimg={this.props.profimg} proftitle={this.props.proftitle} />
      </Link>
    )
  }
}
export default NavTile
