import { addLearningRateQuestion } from '../../HelperFunctions';
import CSharp from './Stack/CSharp/CSharp';
import ExpressNode from './Stack/ExpressNode/ExpressNode'
import PHP from './Stack/PHP/PHP';
import Python from './Stack/Python/Python';
import Ruby from './Stack/Ruby/Ruby';

export const BackEnd = {
    meta: {
    hasChildren: false,
    path: '/web-prog/back',
    id: 'BackEnd',
  },
  data:{
    profdesc: 'Несколько сложнее для освоения, чем front-end, больший упор на математико-аналитические качества программиста, более высокая оплата труда.',
    proftitle: 'Back-end',

  },
  children: [],
  conclusion: ''
}

BackEnd.data.expanded = {
	desc: `Backend разработчик занимается разработкой приложения со стороны сервера, той частью, где пользователь ничего не видит. Он взаимодействует с базой данных, настраивает сервер. Программист должен хорошо обдумывать архитектуру приложения, обеспечить эффективную работу с базой данных. Основным инструментом backend разработчика являются серверные языки программирования: самые популярные из них представлены ниже, это Node JS, PHP, Python, C# и Ruby.`,
	imgPath: '',
	tools: [PHP, ExpressNode, Python, CSharp, Ruby], // Java сложно
	prosAndCons: {
		pros: ["Высокая зарплата", "Перспективы", "Высокая востребованность"],
		cons: ["Сложность обучения", "Множество языков"]
	},
	profsAlike: {
		ids: ['FullStack', 'Firmware', 'QAEngeneer'],
		result: [{
			title: "",
			imgPath: "",
			urlPath: ""
		}]
	},
	conclusion: '<p>Back-end разработчик получает высокую зарплату за свою работу, но на обучение требует потратить много времени и сил.</p>',
	popularQuest: [
    {
		name: 'Какая средняя зарплата специалиста?',
		target: '~750$ для начинающего, ~2000$ и больше для middle разработчика'
	},addLearningRateQuestion('От 7 месяцев обучения')
]
}
