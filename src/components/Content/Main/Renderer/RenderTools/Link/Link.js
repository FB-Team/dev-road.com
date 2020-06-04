import React from 'react';
import { useState } from 'react'
import s from './Link.module.css';
const LINKS = 'LINKS'
const TOOLTIP = 'TOOLTIP'
const  Link = (props) =>{
  const [tooltipVisibility, setTooltipVisibility] = useState(false)
  let links = null
  if (props.hasOwnProperty('links'))
    if (props.links.length > 0)
        links = props.links.map ((link, i) => <a key={i} className={s.linkChild} href={link.target}>{link.name}</a>)
  let li_style = ''
  if (props.hasOwnProperty('extraClass')){
    li_style = props.extraClass
  }
  return (
    links ?
    <li className={li_style}><button data-type={TOOLTIP} className={s.contentWrapper}>{props.content}</button><div data-type={LINKS} className={s.linksWrapper}>{links}</div>{props.innerComponents}</li>:
    <li className={li_style}><button data-type={TOOLTIP} className={s.contentWrapperNohover}>{props.content}</button>{props.innerComponents}</li>

  )
}
export default Link
