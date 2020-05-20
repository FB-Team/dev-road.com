import React from 'react'

import s from './ToolsRender.module.css';

 const ToolsRender = (props) => {
   function createTree(root){
    let wrapper = document.createElement('ul')
    wrapper.after(root.name)
    root.children.forEach((child, i) => {
      let li = document.createElement('li')
      if (child.children){
        li.after(child.name)
        li.append(createTree(root.child))
      }else li.innerHTML = child.name
        wrapper.append(li)
    })
return wrapper
   }
  return (
{createTree(props.toRender)}
  )
}

export default ToolsRender
