import React from 'react'

import Introduction from './Introduction/Introduction.js'
import Main from './Main/Main';
import s from './Content.module.css'

const Content = props => {
  return (
    <div id={s.Content}>
      <Introduction />
      <Main />
    </div>
  )
}
export default Content
