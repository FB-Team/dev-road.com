import React, { useState, useEffect } from   'react'
import {Route} from             'react-router'
import { findAllParents } from  './findAllParents'
import BreadCrumbs from         './BreadCrumbs/BreadCrumbs'
import ExpandedRenderer from    './ExpandedRenderer/ExpandedRenderer'
import RenderTiles from         './RenderTiles/RenderTiles'

const RendererContainer = (props) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  useEffect(() => {
    if (isFirstLoad) {
      props.jump(props.location.pathname)
      setIsFirstLoad(false);
    }
  }, [isFirstLoad, props]);
  let ResultingComponent = props.toRender.meta.hasChildren
    ? RenderTiles
    : ExpandedRenderer
  return (
    <div className={props.toRender.meta.id}>
        <Route render={() => {
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
