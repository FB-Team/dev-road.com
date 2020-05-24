import React from 'react';
import s from './ProsAndCons.module.css';

const ProsAndCons = (props) => {
  return (
    <div className={s.ProsAndCons}>
      <div className={s.title}>Плюсы и минусы профессии</div>
      <div className={s.container}>
        <ul className={s.pros}>
          {props.pros.map( (p, i) => <li key={i}>{p}</li> )}
        </ul>
        <ul className={s.cons}>
          {props.cons.map( (c, i) => <li key={i}>{c}</li> )}
        </ul>
      </div>
    </div>
  )
};


export default ProsAndCons;
