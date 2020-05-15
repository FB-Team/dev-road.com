import React from 'react'
import RenderTiles from './RendererTiles'
import RenderExpanded from './RendererExpanded'
import {Route} from 'react-router'

function RendererContainer(props) {
  return (
    <div className={props.toRender.meta.id}>
        <Route render={match => {
            let ResultingComponent = props.toRedner.meta.hasChildren
              ? RenderTiles
              : RenderExpanded;
          return <ResultingComponent component={this.props.toRender}/>
        }
      }
  </div>
  )
}
export default RendererContainer
