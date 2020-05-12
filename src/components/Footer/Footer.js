import React from 'react'
import s from './Footer.module.css'

class Footer extends React.Component{
  render () {
    return (
      <footer id="Footer">
        <div className={s.copyright}>&copy; 2020 Roadmap4devs</div>
        <div className={s["rel-sites"]}>
          <div className={s["rel_sites-title"]}>
            Вас так же может заинтересовать:
          </div>
          <div className={s["rel-sites-list"]}>
            <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>
            <a href="https://www.codewars.com/">Codewars</a>
            <a href="https://www.coursera.org/browse/computer-science">Coursera</a>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
