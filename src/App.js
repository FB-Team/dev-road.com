import React from 'react'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import './common.css'
import './App.css'
import Content from './components/Content/Content.js'
class  App extends React.Component {
  render (){
    return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
}

export default App;
