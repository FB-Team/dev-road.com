import './App.css'
import './common.css'

import React from 'react'
import {Switch, Route} from "react-router-dom"

import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Page404 from './components/Page404/Page404'

class  App extends React.Component {
  render (){
    return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/404">
          <Page404/>
        </Route>
        <Route>
          <Content />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}
}

export default App;
