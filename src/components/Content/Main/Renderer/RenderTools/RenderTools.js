import React from   'react'

import createTools from './createTools'
import s from './RenderTools.module.css'
const RenderTools = (props) => {
  return (
    <div>{createTools(props.tool, [s.li, s.main_li])}</div>
  )
}
export default RenderTools
