import React from 'react'
import Header from './components/Header/Header.js'
import Sidebar from './components/Sidebar/Sidebar.js'
import Footer from './components/Footer/Footer.js'
import './common.css'
import Content from './components/Content/Content.js'
class  App extends React.Component {
  render (){
    return (
    <div className="App">
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  )
}
}

export default App;
