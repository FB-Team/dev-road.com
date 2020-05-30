import React from 'react'
import styled, { keyframes } from 'styled-components'
import s from './Tile.module.css'

const Tile = (props)=>{
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
    border-top: none;
    border-radius: 5px;
    padding: 0px;
    height: 100%;
    width: 400px;
    margin: 0px;
    opacity: 0;
    animation: 0.3s ease-out ${parsedDelay} ${tileload} ;
    animation-fill-mode: forwards;
  `;
    return (
      <Div>
        <div className={s.proftitle}>
          {props.proftitle}
        </div>
        <div className={s.profimg}>
          <img src={props.profimg} alt=""/>
        </div>
        <div className={s.profdesc}>{props.profdesc}</div>
      </Div>
    )
}
export default Tile
