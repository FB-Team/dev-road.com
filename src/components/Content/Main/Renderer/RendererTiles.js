import React from 'react'
import NavTile from '../NavTile/NavTile'
function RenderTiles(props){
  console.log(props)
let NavTiles = props.component.children.map(child => <NavTile to={child.meta.path} proftitle={child.data.proftitle} profdesc={child.data.profdesc}/>
)
  return (
<div id='rendererTiles' className="horizontal-flex">{NavTiles}</div>
  )
}

export default RenderTiles
