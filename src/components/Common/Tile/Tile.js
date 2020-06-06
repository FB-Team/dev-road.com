import React, { useState, useEffect } from 'react'
import s from './Tile.module.css'
import { StyledTile } from './StyledTile'

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

	return (<StyledTile delay={parsedDelay} className={s.Tile}>
		<div className={s.proftitle}>
			{props.proftitle}
		</div>
		{ props.profimg ? <div className={s.profimg}>
			<img src={imgSrc} alt=""/>
		</div> : <></>
		}
		{ props.profdesc ? <div className={s.profdesc}>{props.profdesc}</div>
		: <></>
		}
	</StyledTile>)
}
export default Tile
