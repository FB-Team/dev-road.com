import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { findAllParents } from './findAllParents'
import BreadCrumbs from './BreadCrumbs/BreadCrumbs'
import ExpandedRenderer from './ExpandedRenderer/ExpandedRenderer'
import RenderTiles from './RenderTiles/RenderTiles'


const RendererContainer = ({jump, toRender}) => {
  const {pathname} = useLocation()
  useEffect(() => {
    jump(pathname)
  }, [jump, pathname]);
  let ResultingComponent = toRender.children.length > 0
    ? RenderTiles
    : ExpandedRenderer
  return (
    <div className={toRender.meta.id}>
      <BreadCrumbs crumbs={findAllParents(toRender)} jump={jump} />
      <ResultingComponent component={toRender}/>
    </div>
  )
}
export default RendererContainer
