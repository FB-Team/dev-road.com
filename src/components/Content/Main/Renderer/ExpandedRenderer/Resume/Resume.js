import React from 'react';
import s from './Resume.module.css';

const Resume = (props) => {
  return (
    <div className={s.Resume}>
      <div className={s.conclusion}>
        <div className={s.title}>Выводы</div>
        <p>{props.conclusion}</p>
      </div>
    <PopularQuest questions={props.popularQuest}/>
    </div>
  )
};

const PopularQuest = (props) => {
  let questions = props.questions.map( q => {
    return <details className={s.questionWithAnswer} key={q.name}>
      <summary>{q.name}</summary>
      <div>{q.target}</div>
    </details>
  })

  return (
    <div className={s.PopularQuest}>
      <div className={s.title}>Часто задаваемые вопросы:</div>
      <div className={s.questionWithAnswerContainer}>{questions}</div>
    </div>
  )
};

export default Resume;
