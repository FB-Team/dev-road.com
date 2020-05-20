import React from 'react'
import createTools from './createTools'
import s from './Tools.module.css';

 const Tools = (props) => {
  return (
<div id='Tools'>
{createTools(props.toRender)}
</div>
  )
}

export default Tools
