import React from 'react'

import NavTile from 'components/Common/Tile/NavTile';
import s from './RenderTiles.module.css'


const RenderTiles = React.memo(props => {
  let delayIncrement = -0.2;
  let NavTiles = props.component.children
    .map((child, i) => <div key={child.meta.id}
                       className={s.NavTile}
                       id={child.meta.id}>
                    <NavTile delay={delayIncrement += 0.3}
                             to={child.meta.path}
                             proftitle={child.data.proftitle}
                             profdesc={child.data.profdesc}
                             profimg={child.data.imgPath}/>
                  </div>
  )
    return (
  <div id='rendererTiles' className="horizontal-flex">{NavTiles}</div>
    )
})

export default RenderTiles
