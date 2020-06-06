import {
  DB as CommonDB,
  GitHub as CommonGitHub,
  GetObjectLinks
} from '../../../../Common/Tools/commonTools';



export const WPF = {
  name: 'WPF',
  links: [
    {
      name: 'Официальный гайд по WPF от Microsoft',
      target: 'https://docs.microsoft.com/ru-ru/dotnet/framework/wpf/'
    },
    {
      name: 'Metanit',
      target: 'https://metanit.com/sharp/wpf/'
    }
  ],
  children: []
}

export const GitHub = CommonGitHub
export const DB = GetObjectLinks(CommonDB, [{
  name: 'Entity Framework(Microsoft)',
  target: 'https://docs.microsoft.com/ru-ru/ef/'
},
{
  name: 'Entity Framework(Metanit)',
  target: 'https://metanit.com/sharp/entityframeworkcore/'
}])
export const CNETSynt = {
  name: 'Язык C# и его синтаксис',
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
  children: [],
}
