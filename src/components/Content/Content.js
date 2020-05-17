import React from 'react'

import Introduction from './Introduction/Introduction.js'
import Main from './Main/Main';
import s from './Content.module.css'

class Content extends React.Component {
  render () {
    return (
      <div id={s.Content}>
      <Introduction />
      <Main />
      </div>
    )
  }
}
export default Content
