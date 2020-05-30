import React from 'react'
import s from './Tile.module.css'
const Tile = (props)=>{
const parsedDelay = props.delay + 's'
  const animatedDiv = {
    transitionProperty: "opacity",
    transition: "1s",
    transitionDelay:parsedDelay
  }

  ;
    return (
      <div className={s.Tile} style={animatedDiv}>
        <div className={s.proftitle}>
          {props.proftitle}
        </div>
        <div className={s.profimg}>
          <img src={props.profimg} alt=""/>
        </div>
        <div className={s.profdesc}>{props.profdesc}</div>
      </div>
    )
}
export default Tile
