const ProcArchitectures = {
  name: 'Популярные архитектуры процессоров',
  links: [{
    name: "Основные разновидности архитектур",
    target: "https://tproger.ru/articles/processors-architectures-review/"
  }
  ],
  children: [],
	conclusion: ''
}
const Structure = {
  name: "Структура процессоров",
  links:[
    {
      name: 'Как устроен процессор?',
      target: "https://www.iphones.ru/iNotes/775559"
    }
  ],
  children: [],
	conclusion: ''
}
const Processors= {
  name: 'Процессоры',
  links: [
  ],
  children: [Structure, ProcArchitectures],
	conclusion: ''
}
export default Processors
