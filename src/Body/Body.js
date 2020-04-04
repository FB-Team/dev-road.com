import React from 'react'
import Introduction from './Introduction/Introduction.js'
import Main from './Main/Main.js'
class Body extends React.Component {
  render () {
    return (
      <div id="Body">
      <Introduction />
      <Main />
      </div>
    )
  }
}
export default Body
