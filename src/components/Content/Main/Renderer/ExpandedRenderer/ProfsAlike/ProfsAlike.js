import React from 'react';

import Navtile from '../../RenderTiles/NavTile/NavTile';
import s from './ProfsAlike.module.css';


const ProfsAlike = (props) => {
  return (
    <div className={s.ProfsAlike}>
      <div className={s.title}>Похожие профессии:</div>
      <div className={s.container}>
        {
          props.profsAlike.map( prof => {
            ;
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
