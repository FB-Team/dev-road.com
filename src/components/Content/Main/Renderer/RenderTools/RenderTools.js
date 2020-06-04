import React from   'react'
import { useState, useEffect } from 'react'
import createTools from './createTools'
import s from './RenderTools.module.css'
const RenderTools = (props) => {
  const [currentTooltip, setTooltip] = useState(null)
  useEffect( () => {
    if (currentTooltip)
      currentTooltip.style.display = 'none'
  }, [props])
  function onclick (event){
    if (event.target.tagName === 'SPAN'){
      let targetTooltip = event.target.parentNode.children[1]
    if (targetTooltip && targetTooltip.tagName === "DIV"){
      if (targetTooltip.children.length >= 1){
        if (currentTooltip)
          currentTooltip.style.display = 'none'
        if (targetTooltip === currentTooltip) setTooltip(null)
        else {
          targetTooltip.style.display = 'flex'
          targetTooltip.style.left = event.clientX -20 + 'px'
          setTooltip(targetTooltip)
        }
    }
  }
}
}
  return (
    <div onClick={onclick}>{createTools(props.tool, [s.li, s.main_li])}</div>
  )
}
export default RenderTools
