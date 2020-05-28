import Platforms from './Platforms/Platforms';
import Processors from './Processors/Processors';
const Internet = {
  name: "Компьютерные сети",
  links: [
    {
      name: "Учебник по компьютерным сетям",
      target: "http://www.kepstr.eltech.ru/res/wlan/TanenbaumKomputernyeSeti.pdf"
    }
  ],
  children: [],
	conclusion: ''
}
const Unix = {
  name: "ОС на база Unix - популярное решение для встраемывых систем",
  links:[{
    name: "Системное программирвование на Linux",
    target:"https://grenka.ua/2839/Linux--Sistemnoe-programmirovanie--2-e-izd-"
  }],
  children: [],
	conclusion: ''
}
const RTOS = {
  name: "RTOS-ы актульны для систем, где упор ставиться на быстродействие",
  links:[
    {
      name: "Что такое RTOS?",
      target: "https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_%D1%80%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8"
    }
  ],
  children: [],
	conclusion: ''
}
const Algorithms = {
  name: "Алгоритмы",
  links:[{
    name: "Популярные книги по алгоритмам (одну из них, на выбор)",
    target: "https://proglib.io/p/algorythm-books/"
  }],
  children: [],
	conclusion: ''
}
const Theory= {
  name: 'Основная теория по embedded системам',
  links: [],
  children: [Internet,Platforms, Unix, RTOS, Algorithms, Processors],
	conclusion: ''
}
export default Theory
