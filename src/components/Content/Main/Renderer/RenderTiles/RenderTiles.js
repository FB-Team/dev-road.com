import React from 'react'

import NavTile from './NavTile/NavTile';
import s from './RenderTiles.module.css'


const RenderTiles = props => {
  function onClickTile (event){
    console.log('Onclick entered')
    props.transfer(event.currentTarget.id)
  }
let NavTiles = props.component.children
  .map(child => <div className={s.NavTile} id={child.meta.id} 
    onClick={onClickTile}><NavTile to={child.meta.path} onClick={onClickTile}
    proftitle={child.data.proftitle} profdesc={child.data.profdesc}/></div>
)
  return (
<div id='rendererTiles' className="horizontal-flex">{NavTiles}</div>
  )
}

export default RenderTiles
