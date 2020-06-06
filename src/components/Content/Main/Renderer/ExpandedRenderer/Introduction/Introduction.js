import React, {useState, useEffect} from 'react'

import s from './Introduction.module.css';
import ReactHtmlParser from 'react-html-parser';

// const LOCAL_DEPTH = 6;
// const WAY_TO_SRC = "../".repeat(LOCAL_DEPTH);

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
  return (<div id='Introduction'>
		<div className={s.title}>{props.title}</div>
		<div className={s.imageWrapper}><img className={s.image} src={imgSrc} alt="Соответствует теме раздела"/></div>
		<div className={s.description}>{description}</div>
	</div>)
}

export default Introduction
