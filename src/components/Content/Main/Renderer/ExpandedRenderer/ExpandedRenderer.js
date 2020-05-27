import React from 'react'

import Introduction from './Introduction/Introduction';
import ProfsAlike from './ProfsAlike/ProfsAlike';
import ProsAndCons from './ProsAndCons/ProsAndCons';
import Resume from './Resume/Resume';
import Tools from './Tools/Tools';

 const RenderExpanded = (props) => {

  let expanded = props.component.data.expanded
  return (
<div id='rendererExpanded'>
    <Introduction title={props.component.data.proftitle} imgPath={expanded.imgPath} description={expanded.desc}/>
    <Tools tools={expanded.tools}/>
    <ProsAndCons pros={expanded.prosAndCons.pros} cons={expanded.prosAndCons.cons}/>
    <Resume conclusion={expanded.conclusion} popularQuest={expanded.popularQuest}/>
    <ProfsAlike profsAlike={expanded.profsAlike.result} jump={props.jump}/>
</div>
  )
}

export default RenderExpanded
