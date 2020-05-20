import {connect} from 'react-redux'
import {loadPage,transfer,jump} from '../../../Redux/actions.js'
import RendererContainer from './Renderer/RendererContainer';

function mapStateToProps(state){
  return{
    toRender: state.toRender
  }
}
export default connect(mapStateToProps, {loadPage, transfer, jump})(RendererContainer)
