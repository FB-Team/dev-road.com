import { BrowserRouter as Router, Route} from 'react-router-dom'
import React from 'react'
import ApplicationProg from './ApplicationProg/ApplicationProg.js'
import Footer from '../../Footer/Footer';
import StartProg from './StartProg/StartProg.js'
import SystemProg from './SystemProg/SystemProg.js'
import WebProg from './WebProg/WebProg.js'
import s from './Main.module.css'
class Main extends React.Component {
  render () {

    const a = 0

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
export default Main
