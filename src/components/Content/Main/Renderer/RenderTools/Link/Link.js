import React from 'react';
// import { useState } from 'react'
import s from './Link.module.css';

// const mullet = 'mullet'
const  Link = (props) =>{
  let links = props.links.map ((link, i) => <a key={i} className={s.linkChild} href={link.target}>{link.name}</a>)
  const mainLi = s.li  +" "+  props.extraClass;
  return (
    <li className={mainLi}>{props.content}<div className={s.linksWrapper}>{links}</div>{props.innerComponents}</li>
  )
}
export default Link
