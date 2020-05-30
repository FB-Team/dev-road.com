import React from 'react'
import styled, { keyframes } from 'styled-components'
import s from './Tile.module.css'

const Tile = (props)=>{
const parsedDelay = props.delay + 's'
  const tileload = keyframes `
  0%{
    opacity: 0;
    top: -50px;
  }
  25%{
    opacity: 0.25;
    top: -35px;
  }
  50%{
    opacity: 0.5;
    top: -20px;
  }
  75%{
    opacity: 0.75;
    top: -15px;
  }
  100%{
    opacity: 1;
    top: 0px;
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
    animation: 0.5s linear ${parsedDelay} ${tileload} ;
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
