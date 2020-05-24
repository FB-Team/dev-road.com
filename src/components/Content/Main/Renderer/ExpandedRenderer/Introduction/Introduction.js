import React from 'react'

import s from './Introduction.module.css';
import ReactHtmlParser from 'react-html-parser';

 const Introduction = (props) => {

   let description = props.description
   if (! description.startsWith("<p>")) {description = `<p>${description}</p>`}
   description = ReactHtmlParser(description)

  return (
<div id='Introduction'>
    <div className={s.title}>{props.title}</div>
    <div className={s.imageWrapper}><img className={s.image} src={props.imgPath} alt="Server error, cannot load an image:-("/></div>
    <div className={s.descriptionWrapper}><p className={s.description}>{description}</p></div>
</div>
  )
}

export default Introduction
