import React from 'react'
import { Link } from 'react-router-dom';

import s from './Page404.module.css'


const Page404 = props => {
  return (
    <div id={s.Page404}>
      <div><span className={s.red}>Ошибка 404.</span> Страница не найдена.<br/>Перейти на <div className={s.linkWrapper}><Link to="/">главную страницу</Link></div></div>
    </div>
  )
}
export default Page404
