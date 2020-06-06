import Preloader from 'components/Common/Preloader/Preloader';

import React, {useState, useEffect} from 'react'

import s from './Introduction.module.css';
import ReactHtmlParser from 'react-html-parser';


const Introduction = (props) => {

	const [imgSrc, setImgSrc] = useState("");
	useEffect(() => {
		import (`../../../../../../${props.imgPath}`).then(module => {
			setImgSrc(module.default)
		}).catch((e) => {
			if (!e.message.startsWith("Cannot find module")) {
				throw e;
			}
			console.log(e.message);
		})
	}, [props.imgPath])

	let description = props.description
	if (!description.startsWith("<p>")) {
		description = `<p>${description}</p>`
	}
	description = ReactHtmlParser(description)
	const Image = imgSrc ? <img className={s.image} src={imgSrc} alt="Соответствует теме раздела"/> : <Preloader/>

  return (<div id='Introduction'>
		<div className={s.title}>{props.title}</div>
		<div className={s.imageWrapper}>{Image}</div>
		<div className={s.description}>{description}</div>
	</div>)
}

export default Introduction
