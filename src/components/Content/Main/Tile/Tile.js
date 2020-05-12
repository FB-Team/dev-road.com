import React from 'react'
import './Tile.css'
class Tile extends React.Component {
  render () {
    return (
      <div id="Tile">
        <div className="proftitle">
          {this.props.proftitle}
        </div>
        <div className="profimg">
          <img src={this.props.profimg} alt=""/>
        </div>
        <div className="profdesc">{this.props.profdesc}</div>
      </div>
    )
  }
}
export default Tile
