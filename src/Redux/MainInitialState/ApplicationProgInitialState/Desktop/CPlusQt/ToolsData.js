export const CPlus = {
  name: 'C++',
  links: [{
    name: 'Изучение синтаксиса и особенностей С++',
    target: "https://tproger.ru/books/cpp-books-beginners"
  }],
  children: [/*Algorithms, Libs*/ ]
}
export const Qt = {
  name: 'Qt',
  links: [{
    name: 'Ознакомление с библиотекой Qt',
    target: "https://doc.qt.io/qt-5/qtexamplesandtutorials.html"
  }],
  children: []
}
const OOP = {
  name: 'Обьектно ориентированное программирование',
  links: [{
    name: 'Определения термина ооп',
    target: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"
  }],
  children: []
}
const FP = {
  name: 'Функциональное программирование',
  links: [{
    name: 'Определения термина функционального программирования',
    target: "https://ru.wikipedia.org/wiki/%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5"
  }],
  children: []
}
export const Paradigms = {
  name: 'Основные парадигмы программирования',
  links: [{
    name: 'Ознакомление с общепринятыми парадигмами и паттернами программирования',
    target: "http://itandlife.ru/programming/cpp/paradigmy-programmirovaniya-v-c/"
  }],
  children: [OOP,FP]
}
export const Git = {
  name: "Системы контроля версий",
  links: [
    {name: 'Основы работы с Github',target:"https://habr.com/ru/post/125799/"}
  ],
  children:[]
}
