export const GitHub = {
  name: 'GitHub',
  links: [
    {
      name: 'Что такое система контроля версий и зачем она нужна?',
      target: 'https://git-scm.com/book/ru/v2/Введение-О-системе-контроля-версий'
    },
    {
      name: 'Основы Git',
      target: 'https://git-scm.com/book/ru/v2/Введение-Основы-Git'
    },
    {
      name: 'Основные команды Git',
      target: 'https://git-scm.com/book/ru/v2/Appendix-C%3A-Команды-Git-Основные-команды'
    },
    {
      name: 'GitHub',
      target: 'https://lab.github.com/'
    }
  ],
  children: []
}

export const GetGitGub = links => {
  if (Array.isArray(links))
    return {...GitHub, links: [...GitHub.links, ...links]}
  else
    return {...GitHub, links: [...GitHub.links, links]}
}


/*  {
    name: 'GitHub + Visual Studio',
    target: 'https://habr.com/ru/sandbox/112936/'
  }
  */
