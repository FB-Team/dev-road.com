import { compose } from 'redux';
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";

import {loadPage,transfer,jump} from '../../../Redux/actions.js'
import RendererContainer from './Renderer/RendererContainer'



function mapStateToProps(state){
  return{
    toRender: state.toRender
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps, {loadPage, transfer, jump})
)(RendererContainer)
