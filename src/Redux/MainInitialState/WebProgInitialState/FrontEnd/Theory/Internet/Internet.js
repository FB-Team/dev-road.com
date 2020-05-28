const HTTP = {
  name: "HTTP",
  links: [{
    name: "Что такое HTTP протокол",
    target: "https://developer.mozilla.org/ru/docs/Web/HTTP/Overview"
  }],
  children: [],
  conclusion: ''
}
const DNS = {
  name: "DNS",
  links: [{
    name: "Что такое DNS протокол",
    target: "https://hosting-ninja.ru/articles/stati-po-xostingu/what-is-dns-protocol.html"
  }],
  children: [],
  conclusion: ''
}
const REST = {
  name: "REST",
  links: [{
    name: "Что такое REST архитектура",
    target: "https://habr.com/ru/post/38730/"
  }],
  children: [],
  conclusion: ''
}
const Browsers = {
  name: "Браузеры",
  links: [{
    name: "Как работает браузер?",
    target: "https://habr.com/ru/company/edison/blog/432870/"
  }],
  children: [],
  conclusion: ''
}
const Internet = {
  name: "Работа с сетью",
  links: [{
    name: "Комплексный курс на тему компьютерных сетей",
    target: "https://www.youtube.com/watch?v=OLFA0soYGhw"
  }],
  children: [HTTP, DNS, REST, Browsers],
  conclusion: ''
}
export default Internet
