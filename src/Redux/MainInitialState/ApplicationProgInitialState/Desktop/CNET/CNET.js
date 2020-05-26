import { Tools } from './Tools/Tools'

const CNET = {
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
  children: [WPF, UWP, GitHub, DB],
	conclusion: ''
}
export default CNET
