import React, { useState } from   'react'

import RenderTools from '../../RenderTools/RenderTools';
import s from './Tools.module.css';

const FIRST_CHILD = 0

 const Tools = (props) => {
   const [currentTool, setTool] = useState(props.tools[FIRST_CHILD])
   function handleClick(event){
     setTool(props.tools[event.target.dataset.number])
   }
   const buttons = props.tools.map(
     (button, i) => <button key={i} data-number={i} className={s.button} onClick={handleClick}>{button.name}</button>
   )
  return (
<div id={s.Tools}>
<div className={s.buttonsWrapper}>{buttons}</div>
 <RenderTools tool={currentTool}/>
 <div className={s.conclusion}>{currentTool.conclusion}</div>
</div>
  )
}

export default Tools
