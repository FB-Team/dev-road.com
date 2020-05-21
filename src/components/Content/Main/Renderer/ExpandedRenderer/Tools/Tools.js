import React from 'react'

import createTools from './createTools'
import findLinks from './findLinks';
import s from './Tools.module.css';


 const Tools = (props) => {
  return (
<div id='Tools'>
{createTools(props.tools)}
</div>
  )
}

export default Tools
