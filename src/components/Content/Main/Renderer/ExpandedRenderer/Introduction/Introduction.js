import React from 'react'

import s from './Introduction.module.css';

 const Introduction = (props) => {

  return (
<div id='Introduction'>
    <span className={s.title}>{props.title}</span>
    <img className={s.image} src={props.imgPath} alt="Server error, cannot load an image:-("/>
    <span className={s.description}>{props.description}</span>
</div>
  )
}

export default Introduction
