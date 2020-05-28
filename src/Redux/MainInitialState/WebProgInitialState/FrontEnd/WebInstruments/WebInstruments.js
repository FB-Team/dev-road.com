const NPM = {
  name: "Пакетный менеджер npm",
  links: [{
    name: "Руководство по npm",
    target: "https://riptutorial.com/ru/npm"
    }],
  children: [],
  conclusion: ''
}
export const Webpack = {
  name: "Webpack",
  links: [{
    name: "Руководство по Webpack",
    target: "https://medium.com/nuances-of-programming/%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-webpack-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%D0%BA%D0%BE%D0%B2-6cafbf562386"
    }],
  children: [],
  conclusion: ''
}
const SASS = {
  name: "SASS",
  links: [{
    name: "Руководство по SASS",
    target: "https://sass-scss.ru/guide/"
    }],
  children: [],
  conclusion: ''
}
const Typescript = {
  name: "Typescript",
  links: [{
    name: "Руководство по Typescript",
    target: "https://riptutorial.com/ru/typescript"
    }],
  children: [],
  conclusion: ''
}
const WebInstruments = {
  name: "Будет большим плюсом знание следующих инструментов",
  links: [],
  children: [NPM, Webpack, SASS, Typescript],
  conclusion: ''
}
export default WebInstruments
