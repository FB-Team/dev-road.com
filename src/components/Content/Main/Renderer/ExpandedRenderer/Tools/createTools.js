import React from 'react';
import s from './Tools.module.css';

function createTools(root){
 let items = []
 root.children.forEach((child) => {
   if (child.children.length > 0){
     items.push(<li className={s.list}>{child.name}{createTools(child)}</li>)
   }else items.push(<li className={s.list}>{child.name}</li>)
 })
return <ul className={s.ulist}>{items}</ul>
}
export default createTools
