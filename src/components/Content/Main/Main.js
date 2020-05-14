import { BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux'
import React from 'react'

import {loadPage,transfer,jump} from '../../../Redux/actions.js'
import RendererContainer from './Renderer/RendererContainer';


class Main extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <Router>
    <RendererContainer toRender={this.props.toRender}/>
      </Router>
    )
  }
}
function mapStateToProps(state){
  return{
    toRender: {
      meta: state.toRender.meta,
      data: state.toRender.data,
      children: state.toRender.children
    }
  }
}
export default connect(mapStateToProps, {loadPage, transfer, jump})(Main)
//export default Main
