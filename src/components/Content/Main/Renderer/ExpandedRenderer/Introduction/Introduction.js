import React from 'react'

import s from './Introduction.module.css';

 const Introduction = (props) => {

  return (
<div id='Introduction'>
    <div className={s.titleWrapper}><span className={s.title}>{props.title}</span></div>
    <div className={s.imageWrapper}><img className={s.image} src={props.imgPath} alt="Server error, cannot load an image:-("/></div>
    <div className={s.descriptionWrapper}><p className={s.description}>{props.description}</p></div>
</div>
  )
}

export default Introduction
