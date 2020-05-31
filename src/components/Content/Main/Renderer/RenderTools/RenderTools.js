import React from   'react'
import { useState, useEffect } from 'react'
import createTools from './createTools'

const RenderTools = (props) => {
  const [currentTooltip, setTooltip] = useState(null)
  useEffect( () => {
    if (currentTooltip)
      currentTooltip.style.display = 'none'
  }, [props])
  function onclick (event){
    let targetTooltip = event.target.querySelector('div')
    if (targetTooltip){
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
  return (
    <div onClick={onclick}>{createTools(props.tool)}</div>
  )
}
export default RenderTools
