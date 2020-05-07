import React from 'react'
import Introduction from './Introduction/Introduction.js'
import Main from './Main/Main.js'
import './Content.css'
class Content extends React.Component {
  render () {
    return (
      <div id="Content">
      <Introduction />
      <Main />
      </div>
    )
  }
}
export default Content
