import React from                         'react'
import { compose } from                   'redux'
import { connect } from                   'react-redux'
import { Route } from                     'react-router-dom'
import {loadPage, transfer, jump} from    '../../../Redux/actions.js'
import RendererContainer from             './Renderer/RendererContainer'

const Main = (props) => {
  return <Route render={history => <RendererContainer {...props} pathname={history.location.pathname}/>}/>
}
function mapStateToProps(state){
  return{
    toRender: state.toRender
  }
}
export default compose(connect(mapStateToProps, { loadPage, transfer, jump }))(Main)
