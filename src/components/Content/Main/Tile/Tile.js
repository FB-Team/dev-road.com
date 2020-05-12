import React from 'react'
import s from './Tile.module.css'
class Tile extends React.Component {
  render () {
    return (
      <div id={s.Tile}>
        <div className={s.proftitle}>
          {this.props.proftitle}
        </div>
        <div className={s.profimg}>
          <img src={this.props.profimg} alt=""/>
        </div>
        <div className={s.profdesc}>{this.props.profdesc}</div>
      </div>
    )
  }
}
export default Tile
