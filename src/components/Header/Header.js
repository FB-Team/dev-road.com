import React from 'react'
import s from './Header.module.css'
class Header extends React.Component{
  render () {
    return (
      <header className={s.Header}>
          <span className={s.title}><h1>Roadmap4devs</h1></span>
          <nav className={s.navbar}>
          <a className={s.navlink} href="#">Контакты</a>
          <a className={s.navlink} href="#">Про нас</a>
          <a className={s.navlink} href="#">Поддержать проект</a>
          <a className={s.navlink} href="#">Вопросы</a>
          </nav>
      </header>
    )
  }
}

export default Header
