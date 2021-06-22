import React, { useState, useEffect } from   'react'

import RenderTools from '../../RenderTools/RenderTools';
import s from './Tools.module.css';

const FIRST_CHILD = 0

 const Tools = (props) => {
  const [currentTool, setTool] = useState(props.tools[FIRST_CHILD])
  function handleClick(event){
    setTool(props.tools[event.target.dataset.number])
  }
  useEffect(() => {
    setTool(props.tools[FIRST_CHILD])
    return () => setTool({})
	}, [props.tools])
  const buttons = props.tools.map(
    (button, i) => <button key={i} data-number={i} className={`${s.button} ${button === currentTool ? s.active : ""}`} onClick={handleClick}>{button.name}</button>
  )
  return (
<div id={s.Tools}>
{buttons.length > 1 ? <div className={s.buttonsWrapper}>{buttons}</div> : <div></div>}
 <RenderTools tool={currentTool}/>
 <div className={s.conclusion}>{currentTool.conclusion}</div>
</div>
  )
}
export default Tools
