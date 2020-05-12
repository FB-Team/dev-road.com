import React from 'react'
import s from './Sidetile.module.css'
class Sidetile extends React.Component{
  render (){
    return (
      <div id="Sidetile"><button className={s["sidelink"]}>{this.props.description}</button></div>
    )
  }
}
export default Sidetile
