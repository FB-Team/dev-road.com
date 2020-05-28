import { C } from './C/C';
import { Electronics } from './Electronics/Electronics';
import Theory from './Theory/Theory';

export const Firmware = {
    meta: {
    hasChildren: false,
    path: '/other/firmware',
    id: 'firmware',
  },
  data:{
    profdesc: 'Подходит для тех, кто интересуется железом. Возможны работы с паяльником.',
    proftitle: 'Встроенное программное обеспечение',
  },
  children: []
}

Firmware.data.expanded = {
	desc: `<p>Задачей программиста является разработка встроенного программного обеспечения.`,
	imgPath: '',
	tools: [Theory, C, Electronics],
	prosAndCons: {
		pros: ["Базовая информация не устаревает", "Хороший специалист на вес золота", "Интересные задачи"],
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
	conclusion: '<p>В текущих реалиях не рекоммендуется обучаться в данном направлении и посмотреть в сторону других... например, веб-разработки. Если вам нравится работать с железом, со схемами, то вы можете попробовать.!</p>',
	popularQuest: [{
		name: 'Какая средняя зарплата специалиста?',
		target: '~700$ для начинающего, ~2000$ и больше для middle разработчика'
	}, {
		name: 'Насколько популярна профессия?',
		target: 'Профессия не слишком популярна.'
	}, {
		name: 'Перспективы',
		target: 'Профессия всегда будет актуальна'
	}]
}
