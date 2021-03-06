import React, {useState, useEffect} from 'react';

import Introduction from './Introduction/Introduction';
import ProfsAlike from './ProfsAlike/ProfsAlike';
import ProsAndCons from './ProsAndCons/ProsAndCons';
import Resume from './Resume/Resume';
import Tools from './Tools/Tools';
import s from './ExpandedRenderer.module.css';

const RenderExpanded = (props) => {
	const [currentTooltip, setTooltip] = useState(null)
	function onclickTools(event) {
		const prevTooltip = currentTooltip
		if (currentTooltip) {
			currentTooltip.style.display = 'none'
			currentTooltip.parentNode.firstChild.classList.remove(s.active)
			setTooltip(null)
		}
		if (event.target.dataset.type === 'TOOLTIP') {
			let targetTooltip = event.target.parentNode.children[1]
			if (targetTooltip && targetTooltip.dataset.type === 'LINKS') {
				if (targetTooltip !== prevTooltip) {
					targetTooltip.style.display = 'flex'
					targetTooltip.style.left = event.clientX - 20 + 'px'
					event.target.classList.add(s.active)
					setTooltip(targetTooltip)
				}
			}
		}
	}
	let expanded = props.component.data.expanded
	useEffect( ()=> {
		document.title = `${props.component.data.proftitle} - Roadmap4devs`
	}, [props.component.data.proftitle])

	return (<div id='rendererExpanded' onClick={onclickTools}>
		<Introduction title={props.component.data.proftitle} imgPath={expanded.imgPath} description={expanded.desc}/>
		<Tools tools={expanded.tools}/>
		<ProsAndCons pros={expanded.prosAndCons.pros} cons={expanded.prosAndCons.cons}/>
		<Resume conclusion={expanded.conclusion} popularQuest={expanded.popularQuest}/>
		<ProfsAlike profsAlike={expanded.profsAlike.result} jump={props.jump}/>
	</div>)
}

export default RenderExpanded
