import React, { useEffect } from   'react'
import { findAllParents } from  './findAllParents'
import BreadCrumbs from         './BreadCrumbs/BreadCrumbs'
import ExpandedRenderer from    './ExpandedRenderer/ExpandedRenderer'
import RenderTiles from         './RenderTiles/RenderTiles'

const RendererContainer = (props) => {
  useEffect(() => {
      props.jump(props.pathname)
  }, [props.pathname]);
  let ResultingComponent = props.toRender.meta.hasChildren
    ? RenderTiles
    : ExpandedRenderer
  return (
    <div className={props.toRender.meta.id}>
      <BreadCrumbs crumbs={findAllParents(props.toRender)} jump={props.jump} />
      <ResultingComponent transfer={props.transfer} component={props.toRender}/>
    </div>
  )
}
export default RendererContainer
