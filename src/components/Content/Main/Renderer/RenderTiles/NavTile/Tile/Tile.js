import React from 'react'
import styled, { keyframes } from 'styled-components'
import s from './Tile.module.css'

const Tile = (props)=>{
  let imgSrc = ""
  try {
    imgSrc = require(`${props.profimg}`);
  } catch (e) {
    console.log(e.message);
  }
const parsedDelay = props.delay + 's'
  const tileload = keyframes `
  from{
    opacity: 0;
    left: -30px;
  }
  to{
    opacity: 1;
    left: 0px;
  }
  `;
  const Div = styled.div`
    position: relative;
    opacity: 0;
    animation: 1s cubic-bezier(0.42, 0.0, 0.58, 1.0) ${parsedDelay} ${tileload} ;
    animation-fill-mode: forwards;
    transition: transform 0.5s;
  `;
    return (
      <Div className={s.Tile}>
        <div className={s.proftitle}>
          {props.proftitle}
        </div>
        <div className={s.profimg}>
          <img src={imgSrc} alt=""/>
        </div>
        <div className={s.profdesc}>{props.profdesc}</div>
      </Div>
    )
}
export default Tile
