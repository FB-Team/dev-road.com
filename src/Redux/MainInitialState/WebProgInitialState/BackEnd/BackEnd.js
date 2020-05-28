import CSharp from './Stack/CSharp/CSharp';
import ExpressNode from './Stack/ExpressNode/ExpressNode'
import PHP from './Stack/PHP/PHP';
import Python from './Stack/Python/Python';


export const BackEnd = {
    meta: {
    hasChildren: false,
    path: '/web-prog/back',
    id: 'backEnd',
  },
  data:{
    profdesc: 'Довольно востребованное направление, отличается высокой универсальностю, хотя порог вхождения может быть выше, чем у front-end разработчика',
    proftitle: 'Back-end',

  },
  children: [],
  conclusion: ''
}

BackEnd.data.expanded = {
	desc: ``,
	imgPath: '',
	tools: [ExpressNode, CSharp, Python, PHP], // Ruby   // Java сложно
	prosAndCons: {
		pros: [],
		cons: []
	},
	profsAlike: {
		ids: [],
		result: [{
			title: "",
			imgPath: "",
			urlPath: ""
		}]
	},
	conclusion: '<p></p>',
	popularQuest: [
    {
		name: 'Какая средняя зарплата специалиста?',
		target: '~700$ для начинающего, ~2000$ и больше для middle разработчика'
	}, {
		name: 'Насколько популярна профессия?',
		target: 'Профессия не слишком популярна.'
	}, {
		name: 'Перспективы desktop',
		target: 'В последнее время данная область угасает, все больше и больше переходит в Web: веб-приложения, облачные сервисы и другое.'
	}]
}
