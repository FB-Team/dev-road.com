import React from 'react'
import NavTile from './NavTile/NavTile';
import s from './RenderTiles.module.css'

const RenderTiles = props => {

let NavTiles = props.component.children.
map((child, i) => <div key={child.meta.id}
                     className={s.NavTile}
                     id={child.meta.id}>
                  <NavTile delay={i} to={child.meta.path}
                           proftitle={child.data.proftitle}
                           profdesc={child.data.profdesc} profimg={child.data.imgPath}/>
                </div>
)
  return (
<div id='rendererTiles' className="horizontal-flex">{NavTiles}</div>
  )
}

export default RenderTiles
