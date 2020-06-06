import React, { useEffect, useRef} from 'react'
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

  const mainRef = useRef(null);
  let ResultingComponent = toRender.children.length > 0
    ? RenderTiles
    : ExpandedRenderer
	useEffect( () => {
    // window.performance.navigation.type === 1 --- page reloaded
    if (ResultingComponent === ExpandedRenderer)
		  mainRef.current.scrollIntoView({block: "start", behavior: "smooth"});
	}, [toRender, ResultingComponent])

  return (
    <div className={toRender.meta.id} ref={mainRef}>
      <BreadCrumbs crumbs={findAllParents(toRender)} jump={jump}/>
      <ResultingComponent component={toRender}/>
    </div>
  )
}
export default RendererContainer
