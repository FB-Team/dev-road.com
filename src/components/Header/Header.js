import React from 'react'
import './Header.css'
class Header extends React.Component{
  render () {
    return (
      <header className='Header'>
          <span className="title"><h1>Roadmap4devs</h1></span>
          <nav className="navbar">
          <a className="navlink" href="#">Контакты</a>
          <a className="navlink" href="#">Про нас</a>
          <a className="navlink" href="#">Поддержать проект</a>
          <a className="navlink" href="#">Вопросы</a>
          </nav>
      </header>
    )
  }
}

export default Header
