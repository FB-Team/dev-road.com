import React from 'react';
import Link from './Link/Link';
import s from './Link/Link.module.css'

function createTools(root, isRoot = true){
 let items = []
 root.children.forEach((child, i) => {
   if (child.children.length > 0){
     items.push(<Link key={i} links={child.links} content={child.name} extraClass={s.main_li} innerComponents={createTools(child, false)}/>)
   }else items.push(<Link extraClass="" key={i}links={child.links} content={child.name}/>)
 })
return( isRoot ? <ul className={s.ul}><Link extraClass={s.main_category} links={root.links} content={root.name}  innerComponents={<ul>{items}</ul>}/></ul> :
<ul>{items}</ul>
)

}
export default createTools
