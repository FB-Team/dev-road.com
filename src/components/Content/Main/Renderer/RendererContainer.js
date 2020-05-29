import React, { useEffect } from   'react'
import { findAllParents } from  './findAllParents'
import BreadCrumbs from         './BreadCrumbs/BreadCrumbs'
import ExpandedRenderer from    './ExpandedRenderer/ExpandedRenderer'
import RenderTiles from         './RenderTiles/RenderTiles'

const RendererContainer = (props) => {
  const {pathname, jump} = props;
  useEffect(() => {
    jump(pathname)
  }, [pathname, jump]);
  let ResultingComponent = props.toRender.children.length > 0
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
