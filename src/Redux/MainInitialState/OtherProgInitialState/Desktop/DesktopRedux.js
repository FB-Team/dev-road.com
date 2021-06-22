

import CNET from './Stack/CNET/CNET';
import CPlusQt from './Stack/CPlusQt/CPlusQt';
import Java from './Stack/Java/Java';

const Desktop = {
  meta: {
    hasChildren: true,
    path: '/application-prog/desktop',
    id: 'Desktop'
  },
  data:{
    proftitle:"Десктопная разработка",
    profdesc:"Некогда востребованное направление. Может исчезнуть в ближайшие годы."
  },
  children: []
}

Desktop.data.expanded = {
	desc: `<p>Задачей программиста является разработка Desktop-приложений. Это такие приложения, в которых весь функционал содержится в них и есть возможность работать в своем изолированном пространстве. Десктоп приложения, в отличии от веб-приложений, могут работать без подключения к интернету, локального сервера. Инструментом для создания программ является один из фреймворков. Фреймворк это среда разработки, оболочка Для Windows-only приложений лучше использовать Visual Studio с языком С#. Универсальный фреймворк Spring с языком Java используют для кроссплатформенной разработки(на любую операционную систему). Если нужна высокопроизводительность, лучше использовать QT, который в свою очередь использует язык программирования C++. Так же существуют другие фреймворки для создания приложений. На данном сайте предложены самые популярные и хорошие для старта старта варианты.</p>
  <p>Ваше обучение начнется с изучения основ выбранного языка. Затем в его процессе вам нужно будет научиться работать с базой данных, понимать принципы ООП и другое.</p>`,
	imgPath: '', 
               
	tools: [CNET, Java, CPlusQt],
	prosAndCons: {
		pros: ["Стандарты не сильно меняются", "Не нужно поднимать локальный сервер для разработки", "Низкий порог вхождения(C#, Java)"],
		cons: ["Со временем может исчезнуть", "Тяжелее тестировать на разных операционных системах", "Отличительный синтаксис(C++)"]
	},
	profsAlike: {
		ids: ['BackEnd'],
		result: [{
			title: "",
			imgPath: "",
			urlPath: ""
		}]
	},
	conclusion: '<p>В текущих реалиях не рекоммендуется обучаться в данном направлении и посмотреть в сторону других... например, веб-разработки. Если вы все таки решились начать с данной профессии, то уделяйте много времени практики. Теоретические вещи, которые вы будете проходить, изначально могут быть сложными, но чем вы больше с этим сталкиваетесь, тем легче будет это даваться. Удачи!</p>',
	popularQuest: [{
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
export default Desktop