import { C } from './C/C'
import { Electronics } from './Electronics/Electronics'
import { addLearningRateQuestion } from '../../HelperFunctions';
import Theory from './Theory/Theory'

const FirmwareTools = {
	name: 'Встроенное обеспечение',
	links: [],
	children: [Theory, C, Electronics],
	conclusion: ''
}

export const Firmware = {
    meta: {
    hasChildren: false,
    path: '/other/firmware',
    id: 'Firmware',
  },
  data:{
    profdesc: 'Предъявляет высокие требования к знанию электротехники, непросто освоить, но знания всегда остаются актуальными.',
    proftitle: 'Встроенное программное обеспечение',
  },
  children: []
}

Firmware.data.expanded = {
	desc: `<p>Задачей программиста является разработка встроенного программного обеспечения.`,
	imgPath: '',
	tools: [FirmwareTools],
	prosAndCons: {
		pros: ["Базовая информация не устаревает", "Хороший специалист на вес золота", "Интересные задачи", "Невысокая конкуренция"],
		cons: ["Сложность изучения", "Сложно найти работу", "Малый спрос"]
	},
	profsAlike: {
		ids: [''],
		result: [{
			title: "",
			imgPath: "",
			urlPath: ""
		}]
	},
	conclusion: '<p>В текущих реалиях не рекоммендуется обучаться в данном направлении и посмотреть в сторону других... например, веб-разработки. Если вам нравится работать с железом, со схемами, то вы можете попробовать.</p>',
	popularQuest: [{
		name: 'Какая средняя зарплата специалиста?',
		target: '300-700$ для начинающего, ~1300$ и больше для middle разработчика'
	}, {
		name: 'Насколько популярна профессия?',
		target: 'Профессия не слишком популярна по сравнению с другими направлениями'
	}, {
		name: 'Перспективы',
		target: 'Профессия всегда будет актуальна'
	},addLearningRateQuestion('1 + 3 + 1 + 1 + 1 + 0.5 + 3')]
}
