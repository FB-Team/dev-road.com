const React = {
  name: "React",
  links: [{
    name: "Видеоуроки по React",
    target: "https://www.youtube.com/watch?v=DLX62G4lc44"
  },{
    name: "Учебник по React",
    target: "https://ru.hexlet.io/courses/js-react"
  }],
  children: [],
  conclusion: ''
}
const Vue = {
  name: "Vue",
  links: [{
    name: "Выборка бесплатных курсов по Vue",
    target: "https://www.udemy.com/ru/topic/vue-js/free/"
  },{
    name: "Материалы по Vue",
    target: "https://metanit.com/web/vuejs/"
  }
  ],
  children: [],
  conclusion: ''
}
const Angular = {
  name: "Angular",
  links: [{
    name: "Материалы по Angular",
    target: "https://metanit.com/web/angular/"
  }
  ],
  children: [],
  conclusion: ''
}
const Frameworks = {
  name: "Популярные фронтенд фреймворки",
  links: [{
    name: "Какой фреймворк выбрать?",
    target: "https://webformyself.com/sravnenie-angular-react-i-vue-v-2019-godu/"
  }],
  children: [React, Vue, Angular],
  conclusion: ''
}
export default Frameworks
