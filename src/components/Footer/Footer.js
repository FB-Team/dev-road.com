import React from 'react'
import s from './Footer.module.css'

class Footer extends React.Component{
  render () {
    return (
      <footer className={s.Footer}>
        <div className={s.copyright}>&copy;Roadmap4devs, 2020</div>
        <div className={s["rel-sites"]}>
          <div className={s["rel_sites-title"]}>
            Вас так же может заинтересовать:
          </div>
          <div className={s["rel-sites-list"]}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.freecodecamp.org/">FreeCodeCamp</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.codewars.com/">Codewars</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.coursera.org/browse/computer-science">Coursera</a>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
// TODO: ADD EMAIL AND GIT
