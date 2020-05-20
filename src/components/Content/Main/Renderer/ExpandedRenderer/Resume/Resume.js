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
  const onQuestionClick = e => {
    debugger
    e.currentTarget.classList.toggle(s.active)
  }
  let questions = props.questions.map( q => {
    return <div className={s.questionWithAnswer} key={q.name}>
      <dt onClick={onQuestionClick}>{q.name}</dt>
      <dd>{q.target}</dd>
    </div>
  })

  return (
    <div className={s.PopularQuest}>
      <div className={s.title}>Часто задаваемые вопросы:</div>
      <dl className={s.questionWithAnswerContainer}>{questions}</dl>
    </div>
  )
};

export default Resume;
