const Redux = {
  name: "Redux",
  links: [{
    name: "Руководство по Redux",
    target: "https://tproger.ru/translations/redux-for-beginners/"
  }],
  children: [],
  conclusion: ''
}
const Flux = {
  name: "Flux",
  links: [{
    name: "Что такое Flux?",
    target: "https://ru.wikipedia.org/wiki/Flux-%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D0%B0"
  }],
  children: [Redux],
  conclusion: ''
}
export default Flux
