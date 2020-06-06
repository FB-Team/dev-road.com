import React from 'react'
import s from './Footer.module.css'
import GitHubLogo from 'assets/img/common/GitHub-Mark-Light-32px.png'
import MailLogo from 'assets/img/common/New_Logo_Gmail.svg'

const GITHUB_PAGE = "https://github.com/Leonmisha/dev-road.com";
const EMAIL = "team.mpkr@gmail.com";

const FREECODECAMP_LINK = "https://www.freecodecamp.org/";
const CODEWARS_LINK = "https://www.codewars.com/";
const COURSERA_LINK = "https://www.coursera.org/browse/computer-science";

class Footer extends React.Component{
  render () {
    return (
      <footer className={s.Footer}>
        <div className={s.copyright}>&copy;Roadmap4devs, 2020</div>
        <div className={s.contacts}>
          <div className={s.contacts_title}>Контакты</div>
          <div className={s.contactsWrapper}>
            <div className={s.github}>
              <a target="_blank" href={GITHUB_PAGE} rel="noopener noreferrer">
                <img src={GitHubLogo} alt="GitHub logo"/><span>GitHub</span>
              </a>
            </div>
            <div className={s.email}>
              <a href={`mailto:${EMAIL}`}>
                <img src={MailLogo} alt="Email"/><span>Email</span></a>
            </div>
          </div>

        </div>
        <div className={s.relSites}>
          <div className={s.relSites_title}>
            Веб-ресурсы для самообучения:
          </div>
          <div className={s.relSites_list}>
            <a target="_blank" rel="noopener noreferrer" href={FREECODECAMP_LINK}>FreeCodeCamp</a>
            <a target="_blank" rel="noopener noreferrer" href={CODEWARS_LINK}>Codewars</a>
            <a target="_blank" rel="noopener noreferrer" href={COURSERA_LINK}>Coursera</a>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
