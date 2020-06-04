import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import React from 'react'

import {jump} from '../../../Redux/actions.js'
import RendererContainer from './Renderer/RendererContainer'


const Main = ({pathesArray, ...props}) => {
  return (
    <Switch>
      <Route exact path={pathesArray}>
        <RendererContainer {...props}/>
      </Route>
      <Route>
        <Redirect to="/404"/>
      </Route>
    </Switch>
)}
function mapStateToProps(state){
  return{
    toRender: state.toRender,
    pathesArray: state.Root.pathesArray
  }
}
export default connect(mapStateToProps, { jump })(Main)
