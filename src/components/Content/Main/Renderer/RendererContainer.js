import React from 'react'
import {Route} from 'react-router'
import { findAllParents } from './findAllParents';
import ExpandedRenderer from './ExpandedRenderer/ExpandedRenderer';
import RenderTiles from './RenderTiles/RenderTiles'
import BreadCrumbs from './BreadCrumbs/BreadCrumbs.js'

const RendererContainer = (props) => {
  return (
    <div className={props.toRender.meta.id}>
        <Route render={match => {
            let ResultingComponent = props.toRender.meta.hasChildren
              ? RenderTiles
              : ExpandedRenderer;
            //this.props.jump(match.location.path)

          return <div id="RendererContainer"><BreadCrumbs crumbs={findAllParents(props.toRender)}/> <ResultingComponent transfer={props.transfer}
                                     component={props.toRender}/></div>
        }
      }/>
  </div>
)
}
export default RendererContainer
