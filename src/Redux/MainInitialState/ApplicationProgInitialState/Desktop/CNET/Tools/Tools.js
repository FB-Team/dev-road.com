export const CPP = {

}
export const WPF = {
  name: 'WPF',
  links: [
    {
      name: 'Официальный гайд по WPF от Microsoft',
      target: 'https://docs.microsoft.com/ru-ru/dotnet/framework/wpf/'
    },
    {
      name: 'Metanit',
      target: 'https://metanit.com/sharp/'
    },
    {
      name: 'C# 8.0 Карманный справочник',
      target: 'http://radiosit.ru/news/c_8_0_karmannyj_spravochnik/2020-03-08-8746'
    },{
      name: 'Документация',
      target: 'https://docs.microsoft.com/ru-ru/dotnet/csharp/'
    }
  ],
  children: []
}

export const UWP = {
  name: 'UWP',
  links: [
    {
      name: 'Официальный гайд по UWP от Microft',
      target: 'https://docs.microsoft.com/ru-ru/windows/uwp/'
    },
  ],
  children: []
}

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
      name: 'GitHub + Visual Studio',
      target: 'https://habr.com/ru/sandbox/112936/'
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
    },
    {
      name: 'Entity Framework(Microsoft)',
      target: 'https://docs.microsoft.com/ru-ru/ef/'
    },
    {
      name: 'Entity Framework(Metanit)',
      target: 'https://metanit.com/sharp/entityframeworkcore/'
    },
  ],
  children: []
}


export const Tools = {
  name: 'С#',
  links: [
    {
      name: 'Metanit',
      target: 'https://metanit.com/sharp/'
    },
    {
      name: 'ITDVN',
      target: 'https://itvdn.com/ru/specialities/net-developer'
    },
    {
      name: 'C# 8.0 Карманный справочник',
      target: 'http://radiosit.ru/news/c_8_0_karmannyj_spravochnik/2020-03-08-8746'
    },
    {
      name: 'Документация C#',
      target: 'https://docs.microsoft.com/ru-ru/dotnet/csharp/'
    },
    {
      name: 'Welcome to C# 9.0',
      target: 'https://devblogs.microsoft.com/dotnet/welcome-to-c-9-0/'
    }

  ],
  children: [WPF, UWP, GitHub, DB]
}
