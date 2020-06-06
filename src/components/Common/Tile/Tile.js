import React, { useState, useEffect } from 'react'

import { StyledTile } from './StyledTile'
import Preloader from '../Preloader/Preloader';
import s from './Tile.module.css'



const Tile = (props) => {

	const [imgSrc, setImgSrc] = useState("");
	useEffect(() => {
		import (`../../../${props.profimg}`).then(module => {
			setImgSrc(module.default)
		}).catch((e) => {
			if (!e.message.startsWith("Cannot find module")) {
				throw e;
			}
			console.log(e.message);
		})
	}, [props.profimg])

	const parsedDelay = props.delay + 's'

	const Image = imgSrc ?	<img src={imgSrc} alt=""/> : <Preloader/>

	return (<StyledTile delay={parsedDelay} className={s.Tile}>
		<div className={s.proftitle}>
			{props.proftitle}
		</div>
		<div className={s.profimg}>{Image}</div>
		{ props.profdesc ? <div className={s.profdesc}>{props.profdesc}</div>
		: <></>
		}
	</StyledTile>)
}
export default Tile
