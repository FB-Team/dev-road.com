import React from 'react'

import {Route} from 'react-router'

import ExpandedRenderer from './ExpandedRenderer/ExpandedRenderer';
import RenderTiles from './RenderTiles/RenderTiles'


function RendererContainer(props) {
  return (
    <div className={props.toRender.meta.id}>
        <Route render={match => {
            let ResultingComponent = props.toRender.meta.hasChildren
              ? RenderTiles
              : ExpandedRenderer;
          return <ResultingComponent transfer={props.transfer} component={props.toRender}/>
        }
      }/>
  </div>
)
}
export default RendererContainer
