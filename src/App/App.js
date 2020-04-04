import React from 'react'
import Header from '../Header/Header.js'
import Sidebar from '../Sidebar/Sidebar.js'
import Footer from '../Footer/Footer.js'
import '../common.css'
import Body from '../Body/Body.js'
class  App extends React.Component {
  render (){
    return (
    <div className="App">
      <Header />
      <Sidebar />
      <Body />
      <Footer />
    </div>
  )
}
}

export default App;
