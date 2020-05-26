import React from 'react';
import Link from './Link/Link';

function createTools(root, isRoot = true){
 let items = []
 root.children.forEach((child, i) => {
   if (child.children.length > 0){
     items.push(<Link key={i} links={child.links} content={child.name} innerComponents={createTools(child, false)}/>)
   }else items.push(<Link key={i}links={child.links} content={child.name}/>)
 })
return( isRoot ? <ul><Link links={root.links} content={root.name}  innerComponents={<ul>{items}</ul>}/></ul> :
<ul>{items}</ul>
)

}
export default createTools
