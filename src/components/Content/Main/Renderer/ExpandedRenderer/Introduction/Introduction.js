import React from 'react'

import s from './Introduction.module.css';
import ReactHtmlParser from 'react-html-parser';

 const Introduction = (props) => {
   debugger;
   let imgSrc = ""
   try {
     imgSrc = require(`${props.imgPath}`);
   } catch (e) {
     if (!e.message.startsWith("Cannot find module")) {
       throw e;
     }
     console.log(e.message);
   }

   let description = props.description
   if (! description.startsWith("<p>")) {description = `<p>${description}</p>`}
   description = ReactHtmlParser(description)

  return (
<div id='Introduction'>
    <div className={s.title}>{props.title}</div>
    <div className={s.imageWrapper}><img className={s.image} src={imgSrc} alt="Server error, cannot load an image:-("/></div>
    <div className={s.description}>{description}</div>
</div>
  )
}

export default Introduction
