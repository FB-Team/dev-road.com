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
export const DB = {
  name: 'Базы данных',
  links: [
    {
      name: 'Что такое база данных',
      target: 'https://htmlacademy.ru/tutorial/php/databases'
    },
    {
      name: 'SQL запросы',
      target: 'https://habr.com/ru/post/480838/'
    }
  ],
  children: []
}
export const GetObjectLinks = (object, links) => {
  if (Array.isArray(links))
    return {...object, links: [...object.links, ...links]}
  else
    return {...object, links: [...object.links, links]}
}


/*  {
    name: 'GitHub + Visual Studio',
    target: 'https://habr.com/ru/sandbox/112936/'
  }
  */
