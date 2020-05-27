import React from 'react';

import Navtile from '../../RenderTiles/NavTile/NavTile';
import s from './ProfsAlike.module.css';


const ProfsAlike = (props) => {
  if (props.profsAlike[0].title === "") {
    return <></>
  }
  return (
    <div className={s.ProfsAlike}>
      <div className={s.title}>Возможно, вас заинтересует:</div>
      <div className={s.container}>
        {
          props.profsAlike.map( prof => {
            return  (
              <div key={prof.urlPath} className={s.NavTile} id={prof.urlPath}>
                <Navtile to={prof.urlPath} profdesc="" proftitle={prof.title} />
              </div>)
          })
        }

      </div>
    </div>
  )
};


export default ProfsAlike;
