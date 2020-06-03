import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {jump} from '../../../Redux/actions.js'
import RendererContainer from './Renderer/RendererContainer'

const Main = ({pathesArray, ...props}) => {
  return (
    <>
      <Route exact path={pathesArray}>
        <RendererContainer {...props}/>
      </Route>
    </>
)}
function mapStateToProps(state){
  return{
    toRender: state.toRender,
    pathesArray: state.Root.pathesArray
  }
}
export default connect(mapStateToProps, { jump })(Main)
