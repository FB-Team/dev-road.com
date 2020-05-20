import React from 'react'

import s from './Tools.module.css';

 const Tools = (props) => {
  return (
<div id='Tools'>
<ToolsRender toRender={props.toRender.data.expanded.tools}/>
</div>
  )
}

export default Tools
