import React from 'react';
import { useState } from 'react'
import s from './Link.module.css';

const mullet = 'mullet'
const  Link = (props) =>{
  const [renderLinks, setRenderLinks]  = useState(false)
  function mouseover (event){
    setRenderLinks(true)
    event.stopPropagation()
  }
  function mouseout(event){
    if (event.relatedTarget )
    if (event.relatedTarget.className != s.linkChild && event.relatedTarget.className != s.linksWrapper) setRenderLinks(false)
  }
  let links = props.links.map ((link, i) => <a key={i} data-type="linkChild" className={s.linkChild} href={link.target}>{link.name}</a>)
  const mainLi = s.li  +" "+  props.extraClass;
  return (
    renderLinks  === false ? <li className={mainLi}onMouseOver={mouseover} onMouseOut={mouseout}>{props.content}{props.innerComponents}</li>:
    <li className={mainLi}onMouseOver={mouseover} onMouseOut={mouseout}><div className={s.linksWrapper}>{props.content}{links}</div>{props.innerComponents}</li>
  )
}
export default Link
