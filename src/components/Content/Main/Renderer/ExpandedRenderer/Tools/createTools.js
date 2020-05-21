import React from 'react';

import Link from './Link/Link';
import s from './Tools.module.css';

const test = {
  test: 'test'
}
function createTools(root, isRoot){
 let items = []
 root.children.forEach((child) => {
   if (child.children.length > 0){
     items.push(<Link links={child.links} content={child.name} innerComponents={createTools(child)}/>)
   }else items.push(<Link links={child.links} content={child.name}/>)
 })
return <ul className={s.ulist}>{items}</ul>
}
export default createTools
