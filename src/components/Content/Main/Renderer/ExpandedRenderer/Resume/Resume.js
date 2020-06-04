import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import s from './Resume.module.css';


const Resume = (props) => {
  let conclusion = props.conclusion
  if (! conclusion.startsWith("<p>")) {conclusion = `<p>${conclusion}</p>`}
  conclusion = ReactHtmlParser(conclusion)

  return (
    <div className={s.Resume}>
      <div className={s.conclusion}>
        <div className={s.title}>Выводы</div>
        {conclusion}
      </div>
    <PopularQuest questions={props.popularQuest}/>
    </div>
  )
};

const PopularQuest = (props) => {

  let ClickedQuestionElem = null;

  const onQuestClick = e => {
    let curElem = e.target;
    if (curElem.tagName !== "SUMMARY")
     return;
    debugger;
    curElem = curElem.parentElement;
    if (! curElem.open) {
      if(ClickedQuestionElem != null)
        ClickedQuestionElem.open = false;
      ClickedQuestionElem = curElem;
    } else if (curElem === ClickedQuestionElem) {
      ClickedQuestionElem = null;
    }
  }

  let questions = props.questions.map( q => {
    return <details className={s.questionWithAnswer} key={q.name}>
      <summary>{q.name}</summary>
      <div>{q.target}</div>
    </details>
  })

  return (
    <div className={s.PopularQuest}>
      <div className={s.title}>Часто задаваемые вопросы:</div>
      <div className={s.questionWithAnswerContainer} onClick={onQuestClick}>
        {questions}
      </div>
    </div>
  )
};

export default Resume;
