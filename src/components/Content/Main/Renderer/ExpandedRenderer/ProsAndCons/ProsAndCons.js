import React from 'react';
import s from './ProsAndCons.module.css';

const ProsAndCons = (props) => {
  return (
    <div className={s.ProsAndCons}>
      <div className={s.title}>Плюсы и минусы профессии</div>
      <div className={s.container}>
        <ul className={s.pros}>
          {props.pros.map( p => <li>{p}</li> )}
        </ul>
        <ul className={s.cons}>
          {props.cons.map( c => <li>{c}</li> )}
        </ul>
      </div>
    </div>
  )
};


export default ProsAndCons;
