import React from 'react';
import Link from './Link/Link';
import s from './Link/Link.module.css'

function createTools(root, listStyles, currentStyle = 0, isRoot = true){
 let items = []
 if (currentStyle > listStyles.length - 1) currentStyle = 0
 const currentListStyle = listStyles[currentStyle++]
 root.children.forEach((child, i) => {
   if (child.children.length > 0){
     items.push(<Link key={i} links={child.links} content={child.name} extraClass={currentListStyle} innerComponents={createTools(child, listStyles, currentStyle, false)}/>)
   }else items.push(<Link extraClass={currentListStyle} key={i}links={child.links} content={child.name}/>)
 })
return( isRoot ? <ul className={s.main_category}><Link links={root.links} content={root.name}  innerComponents={<ul>{items}</ul>}/></ul> :
<ul className={s.ul}>{items}</ul>
)

}
export default createTools
