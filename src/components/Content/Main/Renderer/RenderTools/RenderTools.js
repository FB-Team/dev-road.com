import React from   'react'
import createTools from './createTools'
const RenderTools = (props) => {
  return (
    <div>{createTools(props.tool)}</div>
  )
}
export default RenderTools
