import { BrowserRouter as Router, Route} from 'react-router-dom'
import React from 'react'
import ApplicationProg from './ApplicationProg/ApplicationProg.js'
import Footer from '../../Footer/Footer';
import StartProg from './StartProg/StartProg.js'
import SystemProg from './SystemProg/SystemProg.js'
import WebProg from './WebProg/WebProg.js'
import s from './Main.module.css'
import {connect} from 'react-redux'
import {loadPage,transfer,jump} from '../../../Redux/actions.js'

class Main extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <Router>
      <div  className={s.Main}>
          <input type="button" onClick={() => window.history.back()} value="Назад"></input>
          <Route exact path={'/'} component={StartProg}/>
          <Route path={'/system-prog'} component={SystemProg}/>
          <Route path={'/application-prog'} component={ApplicationProg}/>
          <Route path={'/web-prog'} component={WebProg}/>
      </div>
      </Router>
    )
  }
}
function mapStateToProps(state){
  return{
    meta: {
      path:   state.toRender.meta.path,
      id: state.toRender.meta.id
    },
    children: state.children
  }
}
export default connect(mapStateToProps, {loadPage, transfer, jump})(Main)
//export default Main
