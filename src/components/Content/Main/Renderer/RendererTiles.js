import React from 'react'
import NavTile from '../NavTile/NavTile'
function RenderTiles(props){
let NavTiles = props.component.children.map(child => <NavTile to={child.meta.path} proftitle={child.data.proftitle} profdesc={child.data.profdesc}/>
)
  return (
<div id='rendererTiles'>{NavTiles}</div>
  )
}

export default RenderTiles
