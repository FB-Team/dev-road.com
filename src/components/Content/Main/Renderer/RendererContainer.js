import React, {useState} from   'react'
import {Route} from             'react-router'
import { findAllParents } from  './findAllParents'
import BreadCrumbs from         './BreadCrumbs/BreadCrumbs'
import ExpandedRenderer from    './ExpandedRenderer/ExpandedRenderer'
import RenderTiles from         './RenderTiles/RenderTiles'

const RendererContainer = (props) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  return (
    <div className={props.toRender.meta.id}>
        <Route render={match => {
            let ResultingComponent = props.toRender.meta.hasChildren
              ? RenderTiles
              : ExpandedRenderer

            if (isFirstLoad) {
              props.jump(match.location.pathname)
              setIsFirstLoad(false)
            }
          return (
            <div>
                <BreadCrumbs crumbs={findAllParents(props.toRender)} jump={props.jump} />
                <ResultingComponent transfer={props.transfer} component={props.toRender}/>
           </div>
         )
         }
      }/>
  </div>
)
}
export default RendererContainer
